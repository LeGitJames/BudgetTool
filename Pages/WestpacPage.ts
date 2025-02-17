import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

interface FilterOptions {
  includeWithdrawls: boolean;
  includeDeposits: boolean;
  minAmount: number | string;
  maxAmount: number | string;
}

/**
 * @class
 * Page object model to perform actions on the westpac webpage
 */
export class WestpacPage {
  protected readonly page: Page;
  readonly url: string;
  readonly loginButton: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;
  readonly accountsHeader: Locator;
  readonly transactionFiltersButton: Locator;
  readonly fromDatePicker: Locator;
  readonly toDatePicker: Locator;
  readonly selectMonthDropdown: Locator;
  readonly selectYearDropdown: Locator;
  readonly applyFiltersButton: Locator;
  readonly withdrawlsCheckbox: Locator;
  readonly depositsCheckbox: Locator;
  readonly minAmountField: Locator;
  readonly maxAmountField: Locator;
  readonly endOfTransactionsText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = 'https://www.westpac.co.nz/';
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.usernameField = this.page.getByTestId('input-username');
    this.passwordField = this.page.getByTestId('input-password');
    this.submitButton = this.page.getByTestId('button-submit');
    this.accountsHeader = this.page.getByRole('heading', { name: 'Accounts', exact: true });
    this.transactionFiltersButton = this.page.getByRole('button', { name: 'Transaction filters' });
    this.fromDatePicker = this.page.locator('#from-date-picker-region').getByText('Date');
    this.toDatePicker = this.page.locator('#to-date-picker-region').getByText('Date');
    this.selectMonthDropdown = this.page.locator('select[aria-label="Select month"]');
    this.selectYearDropdown = this.page.locator('select[aria-label="Select year"]');
    this.applyFiltersButton = this.page.getByRole('button', { name: 'Apply filters' });
    this.withdrawlsCheckbox = this.page.getByTestId('account-details-filters-container').locator('#money-direction-out div').nth(3);
    this.depositsCheckbox = this.page.getByTestId('account-details-filters-container').locator('#money-direction-in div').nth(3);
    this.minAmountField = this.page.getByPlaceholder('Min amount');
    this.maxAmountField = this.page.getByPlaceholder('Max amount');
    this.endOfTransactionsText = this.page.getByText('No more items to show');
  }

  /**
   * Navigate to westpac home page
   */
  async Goto() {
    await this.page.goto('https://www.westpac.co.nz/');
  }

  /**
   * Login to bank account
   * @param username
   * @param password
   */
  async Login(username: string, password: string) {
    await this.loginButton.click();
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
    await expect(this.accountsHeader).toBeVisible();
    console.log('Logged in to westpac account');
  }

  /**
   * Select bank account to get transactions of
   * @param accountName name of bank account
   */
  async SelectAccount(accountName: string) {
    this.page.locator('a').filter({ hasText: accountName }).first().click();
    await expect(this.page.getByRole('heading', { name: accountName })).toBeVisible();
  }

  /**
   * Apply filters for transactions
   * @param fromDate the start date of transactions
   * @param toDate end date of transactions
   * @param options extra optional options for filtering
   */
  async ApplyFilters(fromDate: Date, toDate: Date, options?: FilterOptions) {
    await this.transactionFiltersButton.click();
    await this.fromDatePicker.click();
    const fromSelectYearDropdown = this.selectYearDropdown.first();
    const fromSelectMonthDropdown = this.selectMonthDropdown.first();
    const toSelectYearDropdown = this.selectYearDropdown.nth(1);
    const toSelectMonthDropdown = this.selectMonthDropdown.nth(1);
    await fromSelectYearDropdown.selectOption(fromDate.getFullYear().toString());
    await fromSelectMonthDropdown.selectOption(fromDate.toLocaleString('en-nz', { month: 'short' }));
    await this.page.getByRole('link', { name: fromDate.getDate().toString(), exact: true }).click();
    await this.toDatePicker.click();
    await toSelectYearDropdown.selectOption(toDate.getFullYear().toString());
    await toSelectMonthDropdown.selectOption(toDate.toLocaleString('en-nz', { month: 'short' }));
    await this.page.getByRole('link', { name: toDate.getDate().toString(), exact: true }).click();

    const { includeWithdrawls = true, includeDeposits = true, minAmount = '', maxAmount = '' } = options || {};
    // Westpac doesn't use proper checkboxes so cant use .check() here
    const withdrawlsCheckboxValue = await this.withdrawlsCheckbox.getAttribute('data-value');
    if (includeWithdrawls !== (withdrawlsCheckboxValue === 'Yes')) {
      this.withdrawlsCheckbox.click();
    }
    const depositsCheckboxValue = await this.depositsCheckbox.getAttribute('data-value');
    if (includeDeposits !== (depositsCheckboxValue === 'Yes')) {
      this.depositsCheckbox.click();
    }

    await this.minAmountField.fill(minAmount.toString());
    await this.maxAmountField.fill(maxAmount.toString());
    await this.page.waitForTimeout(1000); // wait for UI to catch up. TODO - replace with more robust solution
    await this.applyFiltersButton.click();
    console.log('Applied date filters');
  }

  /**
   * @returns locator objects for all the transactions listed on the page
   */
  async GetAllTransactions() {
    let allTransactionsLoaded = false;
    const maxScrolls = 10; // only doing 2 week periods so shouldn't need more than this
    let timesScrolled = 0;
    while (!allTransactionsLoaded && timesScrolled < maxScrolls) {
      try {
        await expect(this.endOfTransactionsText).toBeVisible({ timeout: 1000 });
        allTransactionsLoaded = true;
      } catch {
        // scroll to bottom
        await this.page.mouse.wheel(5000000, 5000000);
        timesScrolled++;
        console.log('Transactions still loading...');
      }
    }
    if (!allTransactionsLoaded) {
      throw new Error('Could not load all transactions');
    }
    console.log('Loaded all transactions');
    return await this.page.locator('.timeline-table tr[data-event-id]').all();
  }
}
