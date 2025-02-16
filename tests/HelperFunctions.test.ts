import { test, expect } from "@playwright/test";

/**
 * Adds a given number of weeks to a date
 * @param date
 * @param numberOfWeeks
 * @returns a new date with the number of weeks added
 */
export function AddWeeks(date: Date, numberOfWeeks: number) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + numberOfWeeks * 7);
  return newDate;
}

const addWeeksTestCases = [
  {
    caseName: "Should add 1 week to the given date",
    weeksAdded: 1,
    input: "2023-01-01",
    expectedOutput: "2023-01-08",
  },
  {
    caseName: "Should add 0 weeks to the given date",
    weeksAdded: 0,
    input: "2024-01-01",
    expectedOutput: "2024-01-01",
  },
  {
    caseName: "Should add multiple weeks to the given date",
    weeksAdded: 4,
    input: "01/01/1999",
    expectedOutput: "01/29/1999",
  },
  {
    caseName: "Should handle negative weeks",
    weeksAdded: -1,
    input: "01/01/2025",
    expectedOutput: "12/25/2024",
  },
];

for (const testCase of addWeeksTestCases) {
  const { caseName, weeksAdded, input, expectedOutput } = testCase;
  test(caseName, () => {
    const date = new Date(input);
    const result = AddWeeks(date, weeksAdded);
    expect(result).toStrictEqual(new Date(expectedOutput));
  });
}

test("Should not modify the original date", () => {
  const date = new Date("10/10/2025");
  AddWeeks(date, 1);
  expect(date).toStrictEqual(new Date("10/10/2025"));
});
