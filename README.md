# Budgeting web sraping script

Tool to get all transactions made from your bank account and put them into a budget spreadsheet\
IMPORTANT: Budget file needs to be created first and relavant info will need to be updated in BudgetData.ts file. (Future improvement)

## Prerequisites

- Check you have npm
```
    npm --version
    if not, download nodejs
    run `npm install -g npm`
```

## Install the packages and install the playwright browsers

```
    npm install
    npx playwright install
```

- From vs code extensions, install following

```
    Playwright Test for VSCode
    eslint
    Prettier - Code formatter
```

## Check for code format issues

- Lint files - changes what it can and formats them:
```
    npm run lint
```

## Run script
```
    npx playwright test PopulateBudget.test.ts
```

## Run unit tests
```
    npx playwright test UnitTests.test.ts
```

## Playwright documentation

- https://playwright.dev/docs/intro
