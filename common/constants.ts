export const FORM = {
  Organisation: {
    type: 'list',
    values: [
      "Men's Fellowship",
      "Women's Fellowship",
      'Guild',
      "Christ's Little Band",
      'Choir',
      'Vessels',
      'Youth Fellowship',
      'SUWMA',
    ],
  },
  Age: {
    type: 'list',
    values: [
      '14 - 18',
      '19 - 22',
      '23 - 28',
      '29 - 35',
      '36 - 42',
      '43 - 48',
      '49 - 54',
      '55 - 60',
      '60+',
    ],
  },
  Suggestion: {
    type: 'text',
    values: null,
  },
} as const
