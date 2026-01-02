import { Stat } from '../types';

// EDIT HERE: main site text and stat groupings.
export const heroContent = {
  title: 'International-School Families in Singapore: Context for Consumer Patterns',
  subtitle:
    'Explore how demographics, policy, and costs shape consumer signals—without stereotyping any community.',
  actions: [
    { href: '/ics-snapshot', label: 'ICS snapshot' },
    { href: '/choose-your-context', label: 'Choose your school context' }
  ]
};

export const framingPoints = [
  'Understand how demographic and cost structures shape consumer patterns, without stereotyping.',
  '“Expat” is not one income level; employment terms, subsidies, and family needs vary.',
  'Use proxies carefully and pair every claim with a caveat.'
];

export const populationStats: Stat[] = [
  {
    id: 'non-residents-2024',
    label: 'Non-resident population',
    value: '1.86M',
    year: 'End-June 2024',
    description: 'Includes work pass holders, dependants, and others; not all are high-income.',
    sourceId: 'singstat-population-2024'
  },
  {
    id: 'residents-2024',
    label: 'Resident population',
    value: '4.18M',
    year: 'End-June 2024',
    description: 'Citizens and permanent residents in Singapore.',
    sourceId: 'singstat-population-2024'
  }
];

export const participationStats: Stat[] = [
  {
    id: 'intl-school-share',
    label: 'Singaporean share in international schools',
    value: 'Less than 0.5%',
    year: '2021 statement',
    description: 'MOE notes very small share; waivers generally required for citizens to attend.',
    sourceId: 'moe-parliament-2021'
  }
];

export const icsStats: Stat[] = [
  {
    id: 'ics-enrollment',
    label: 'ICS enrollment',
    value: '354 students',
    year: '2020–2021',
    description: 'International Community School student body size.',
    sourceId: 'ics-annual-report-2021'
  },
  {
    id: 'ics-nationalities',
    label: 'Nationalities represented',
    value: '28 nationalities',
    year: '2020–2021',
    description: 'ICS reports diverse passports with an American plurality.',
    sourceId: 'ics-annual-report-2021'
  },
  {
    id: 'ics-usa-share',
    label: 'USA nationality share',
    value: '24.0%',
    year: '2020–2021',
    description: 'Share of students with USA nationality at ICS.',
    sourceId: 'ics-annual-report-2021'
  },
  {
    id: 'ics-korea-share',
    label: 'South Korea nationality share',
    value: '20.9%',
    year: '2020–2021',
    description: 'Share of students with South Korean nationality at ICS.',
    sourceId: 'ics-annual-report-2021'
  },
  {
    id: 'ics-singapore-share',
    label: 'Singapore nationality share',
    value: '5.7%',
    year: '2020–2021',
    description: 'Share of students with Singaporean nationality at ICS.',
    sourceId: 'ics-annual-report-2021'
  }
];

export const schoolModelStats: Stat[] = [
  {
    id: 'sji-singaporean-share',
    label: 'SJI International High School',
    value: '55.5% Singaporean',
    year: '2021 profile',
    description: 'Remaining 44.5% from ~30 nationalities.',
    sourceId: 'sji-profile-2021'
  },
  {
    id: 'acs-singaporean-share',
    label: 'ACS (International)',
    value: '50% Singaporean',
    year: 'School profile',
    description: 'Remainder from ~30 countries.',
    sourceId: 'acs-profile'
  }
];

export const feeStats: Stat[] = [
  {
    id: 'ics-elementary-fee',
    label: 'ICS Elementary tuition',
    value: 'S$33,824',
    year: 'Published fee',
    description: 'Annual tuition for Elementary division.',
    sourceId: 'ics-fees'
  },
  {
    id: 'ics-middle-fee',
    label: 'ICS Middle School tuition',
    value: 'S$38,539',
    year: 'Published fee',
    description: 'Annual tuition for Middle School division.',
    sourceId: 'ics-fees'
  },
  {
    id: 'ics-high-fee',
    label: 'ICS High School tuition',
    value: 'S$43,133',
    year: 'Published fee',
    description: 'Annual tuition for High School division.',
    sourceId: 'ics-fees'
  },
  {
    id: 'uwcsea-g11-fee',
    label: 'UWCSEA G11–12 tuition',
    value: 'S$46,824 + development levy TBD',
    year: 'Published fee',
    description: 'Development levy not included; record actual amount when available.', // TODO: Fill from source manually
    sourceId: 'uwcsea-fees'
  },
  {
    id: 'tanglin-year7-9-fee',
    label: 'Tanglin Trust Year 7–9 tuition',
    value: 'S$51,375',
    year: '2025–2026 schedule',
    description: 'Annual tuition for upper middle years.',
    sourceId: 'tanglin-fees'
  },
  {
    id: 'tanglin-sixth-form-fee',
    label: 'Tanglin Trust Sixth Form tuition',
    value: 'S$55,734',
    year: '2025–2026 schedule',
    description: 'Annual tuition for Sixth Form.',
    sourceId: 'tanglin-fees'
  },
  {
    id: 'household-income-benchmark',
    label: 'Median monthly household income',
    value: 'S$11,297',
    year: '2024',
    description: 'Benchmark for contextualizing annualized tuition comparisons.',
    sourceId: 'singstat-income-2024'
  }
];

export const perceptionStats: Stat[] = [
  {
    id: 'housing-affordability-negative',
    label: 'Housing affordability viewed negatively',
    value: '80%',
    year: '2024 survey',
    description: 'InterNations Expat Insider respondents on housing affordability.',
    sourceId: 'internations-2024'
  },
  {
    id: 'cost-of-living-negative',
    label: 'Cost of living viewed negatively',
    value: '75%',
    year: '2024 survey',
    description: 'Perception of overall cost of living.',
    sourceId: 'internations-2024'
  },
  {
    id: 'disposable-income-enough',
    label: 'Disposable income enough or more than enough',
    value: '70%',
    year: '2024 survey',
    description: 'Share saying their disposable income covers needs.',
    sourceId: 'internations-2024'
  },
  {
    id: 'financial-satisfaction',
    label: 'Satisfied with financial situation',
    value: '50%',
    year: '2024 survey',
    description: 'Self-reported satisfaction with finances.',
    sourceId: 'internations-2024'
  }
];

export const benchmarkNarrative =
  'Comparing annual tuition to the annualized median household income (12 × S$11,297) helps students see scale, but it does not reveal who receives subsidies or employer support.';
