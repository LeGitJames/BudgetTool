export const foodPlaces = [
  'thai',
  'kebab',
  'taksim',
  'little greece',
  'kfc',
  'countdown',
  'hansan',
  'sushi',
  "st pierre's",
  'butchery',
  'wendys',
  'krispy kreme',
  'wang food',
  'sun island',
  'buns n rolls',
  'maki mono',
  'prego',
  'restaurant',
  'roasts',
  'major tom',
  'katsubi',
  'cafe',
  'pizza',
  'subway',
  'seafood',
  'kumkang',
  'cj albany',
  'foodmart',
  'lotsa goodies',
  'new world',
  'stoned cow',
  'meat room',
  'food',
  'rathgar',
  'hallertau',
  'downlow',
  'order meal',
  'gao asian',
  'speakers corner',
  'mcdonalds',
  'woolworths',
  'farro',
  'athenia in rome',
  'taco loco',
  'bakery',
];

export const petrolStations = ['Z Albany', 'Z Massey', 'Z Greville', 'Z Constellation', 'Caltex', 'BP Connect', 'Z Lakewood'];
export const subscriptions = ['Wwwsnapfitn', 'Paypal *microsoft 15 - DEBIT', 'apple.com/Bill', 'Google Storage'];

export const detailsMap = {
  Mortgage: {
    textColour: 'FF0000',
    details: ['Loan repayment - LOAN REPAYMENT'],
  },
  Contents: {
    textColour: '97975B',
    details: ['AA Insurance Pre - DIRECT DEBIT'],
  },
  Internet: {
    textColour: '00FFE8',
    details: ['Voyager Internet Lim - DIRECT DEBIT'],
  },
  Power: {
    textColour: 'DC00FF',
    details: ['Genesis Energy - DIRECT DEBIT'],
  },
  Phone: {
    textColour: '377432',
    details: ['One NZ'],
  },
  Food: {
    textColour: '2EDF30',
    details: foodPlaces,
  },
  Petrol: {
    textColour: 'FF7A33',
    details: petrolStations,
  },
  Subscriptions: {
    textColour: '00FF00',
    details: subscriptions,
  },
};

export const dataRows = [
  {
    rowNumber: 1,
    cells: [
      { cellNumber: 7, value: 'Budget' },
      { cellNumber: 8, value: 'Actual' },
      { cellNumber: 9, value: 'Difference' },
    ],
  },
  {
    rowNumber: 2,
    cells: [
      { cellNumber: 6, value: 'Mortgage' },
      { cellNumber: 7, value: { formula: '=Sheet1!B4' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "mortgage", B:B)' } },
      { cellNumber: 9, value: { formula: '=G2-H2' } },
      {
        cellNumber: 11,
        value: 'Mortgage',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Mortgage'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 3,
    cells: [
      { cellNumber: 6, value: 'Contents Insurance' },
      { cellNumber: 7, value: { formula: '=Sheet1!B5' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "contents", B:B)' } },
      { cellNumber: 9, value: { formula: '=G3-H3' } },
      {
        cellNumber: 11,
        value: 'Contents Insurance',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Contents'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 4,
    cells: [
      { cellNumber: 6, value: 'Internet' },
      { cellNumber: 7, value: { formula: '=Sheet1!B6' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "internet", B:B)' } },
      { cellNumber: 9, value: { formula: '=G4-H4' } },
      {
        cellNumber: 11,
        value: 'Internet',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Internet'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 5,
    cells: [
      { cellNumber: 6, value: 'Power' },
      { cellNumber: 7, value: { formula: '=Sheet1!B7' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "power", B:B)' } },
      { cellNumber: 9, value: { formula: '=G5-H5' } },
      {
        cellNumber: 11,
        value: 'Power',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Power'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 6,
    cells: [
      { cellNumber: 6, value: 'Petrol' },
      { cellNumber: 7, value: { formula: '=Sheet1!B8' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "petrol", B:B)' } },
      { cellNumber: 9, value: { formula: '=G6-H6' } },
      {
        cellNumber: 11,
        value: 'Petrol',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Petrol'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 7,
    cells: [
      { cellNumber: 6, value: 'Food' },
      { cellNumber: 7, value: { formula: '=Sheet1!B9' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "grocery", B:B)' } },
      { cellNumber: 9, value: { formula: '=G7-H7' } },
      {
        cellNumber: 11,
        value: 'Food',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Food'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 8,
    cells: [
      { cellNumber: 6, value: 'Phone' },
      { cellNumber: 7, value: { formula: '=Sheet1!B10' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "phone", B:B)' } },
      { cellNumber: 9, value: { formula: '=G8-H8' } },
      {
        cellNumber: 11,
        value: 'Phone',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Phone'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 9,
    cells: [
      { cellNumber: 6, value: 'Subscriptions' },
      { cellNumber: 7, value: { formula: '=Sheet1!B11' } },
      {
        cellNumber: 8,
        value: { formula: '=SUMIF(D:D, "subscriptions", B:B)' },
      },
      { cellNumber: 9, value: { formula: '=G9-H9' } },
      {
        cellNumber: 11,
        value: 'Subscriptions',
        font: {
          name: 'Arial Black',
          color: { argb: detailsMap['Subscriptions'].textColour },
          family: 2,
          size: 11,
        },
      },
    ],
  },
  {
    rowNumber: 10,
    cells: [
      { cellNumber: 6, value: 'Spending' },
      { cellNumber: 7, value: { formula: '=Sheet1!B12' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "spending", B:B)' } },
      { cellNumber: 9, value: { formula: '=G10-H10' } },
    ],
  },
  {
    rowNumber: 11,
    cells: [
      { cellNumber: 6, value: 'Household Items' },
      { cellNumber: 7, value: { formula: '=Sheet1!B13' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "household", B:B)' } },
      { cellNumber: 9, value: { formula: '=G11-H11' } },
    ],
  },
  {
    rowNumber: 12,
    cells: [
      { cellNumber: 6, value: 'Insurances' },
      { cellNumber: 7, value: { formula: '=Sheet1!B14' } },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "insurance", B:B)' } },
      { cellNumber: 9, value: { formula: '=G12-H12' } },
    ],
  },
  {
    rowNumber: 13,
    cells: [
      { cellNumber: 6, value: 'Body Corp' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "body corp", B:B)' } },
    ],
  },
  {
    rowNumber: 14,
    cells: [
      { cellNumber: 6, value: 'Rates' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "rates", B:B)' } },
    ],
  },
  {
    rowNumber: 17,
    cells: [
      { cellNumber: 6, value: 'Misc Car Payments' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "misc car", B:B)' } },
    ],
  },
  {
    rowNumber: 18,
    cells: [
      { cellNumber: 6, value: 'Dental' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "dental", B:B)' } },
    ],
  },
  {
    rowNumber: 19,
    cells: [
      { cellNumber: 6, value: 'Doctor' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "doctor", B:B)' } },
    ],
  },
  {
    rowNumber: 20,
    cells: [
      { cellNumber: 6, value: 'Rego' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "rego", B:B)' } },
    ],
  },
  {
    rowNumber: 21,
    cells: [
      { cellNumber: 6, value: 'WoF + service' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "wof", B:B)' } },
    ],
  },
  {
    rowNumber: 22,
    cells: [
      { cellNumber: 6, value: 'AA roadside' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "roadside", B:B)' } },
    ],
  },
  {
    rowNumber: 23,
    cells: [
      { cellNumber: 6, value: 'Gifts' },
      { cellNumber: 8, value: { formula: '=SUMIF(D:D, "gifts", B:B)' } },
    ],
  },
  {
    rowNumber: 26,
    cells: [
      { cellNumber: 6, value: 'Set aside costs Total' },
      { cellNumber: 8, value: { formula: '=SUM(H13:H25)' } },
    ],
  },
  {
    rowNumber: 27,
    cells: [
      { cellNumber: 6, value: 'Per Fortnight' },
      { cellNumber: 8, value: { formula: '=H26/26' } },
    ],
  },
  {
    rowNumber: 28,
    cells: [
      { cellNumber: 6, value: 'Total Total' },
      { cellNumber: 7, value: { formula: '=SUM(G2:G12)' } },
      { cellNumber: 8, value: { formula: '=SUM(H2:H12)' } },
      { cellNumber: 9, value: { formula: '=G28-H28' } },
    ],
  },
];
