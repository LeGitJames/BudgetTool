import { test } from "@playwright/test";
import { WestpacPage } from "../Pages/WestpacPage";
import { AddWeeks } from "./HelperFunctions.test";
import "dotenv/config";
import "exceljs";
import { Workbook } from "exceljs";
import { dataRows, detailsMap } from "../BudgetData";

test("Populate Budget", async ({ page }) => {
  if (!process.env.ACCOUNT_USERNAME) {
    throw new Error("Set ACCOUNT_USERNAME in environment variables");
  }
  if (!process.env.ACCOUNT_PASSWORD) {
    throw new Error("Set ACCOUNT_PASSWORD in environment variables");
  }
  if (!process.env.ACCOUNT_NAME) {
    throw new Error("Set ACCOUNT_NAME in environment variables");
  }
  if (!process.env.START_DATE) {
    throw new Error("Set START_DATE in environment variables");
  }
  if (!process.env.FILE_NAME) {
    throw new Error("Set FILE_NAME in environment variables");
  }

  const westpacPage = new WestpacPage(page);
  await westpacPage.Goto();
  await westpacPage.Login(
    process.env.ACCOUNT_USERNAME,
    process.env.ACCOUNT_PASSWORD
  );
  await westpacPage.SelectAccount(process.env.ACCOUNT_NAME);
  const startDate = new Date(process.env.START_DATE);
  const endDate = AddWeeks(startDate, 2);
  await westpacPage.ApplyFilters(startDate, endDate);
  const allTransactions = await westpacPage.GetAllTransactions();

  const workbook = new Workbook();
  await workbook.xlsx.readFile(process.env.FILE_NAME);
  const worksheet = workbook.addWorksheet(
    startDate.toLocaleDateString("en-NZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
  let count = 1;
  for (const transaction of allTransactions) {
    const moneyOut = await transaction.locator("td").nth(3).innerText();
    const moneyIn = await transaction.locator("td").nth(4).innerText();
    const details = await transaction.locator("td").nth(2).innerText();

    let cellColour;
    let cellText;
    for (const transactionType in detailsMap) {
      for (const possibleDetail of detailsMap[transactionType].details) {
        if (details.includes(possibleDetail)) {
          cellColour = detailsMap[transactionType].textColour;
          cellText = transactionType;
        }
      }
    }
    const row = worksheet.getRow(count);
    row.getCell(1).value = details;
    if (moneyOut !== "") {
      const cell = row.getCell(2);
      cell.value = parseFloat(moneyOut.replace("– $", "").replace(/,/g, ""));
      cell.font = {
        name: "Arial Black",
        color: { argb: cellColour },
        family: 2,
        size: 11,
      };
    } else {
      row.getCell(3).value = parseFloat(
        moneyIn.replace("$", "").replace(/,/g, "")
      );
    }
    row.getCell(4).value = cellText;
    row.commit();
    count++;
  }

  for (const dataRow of dataRows) {
    const { rowNumber, cells } = dataRow;
    const excelRow = worksheet.getRow(rowNumber);
    for (const cell of cells) {
      const excelCell = excelRow.getCell(cell.cellNumber);
      excelCell.value = cell.value;
      if (cell.font) {
        excelCell.font = cell.font;
      }
    }
    excelRow.commit();
  }

  await workbook.xlsx.writeFile(process.env.FILE_NAME);
});
