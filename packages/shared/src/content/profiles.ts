import { SchoolProfile } from '../types';

// EDIT HERE: adjust community profiles for the interactive selectors.
export const schoolProfiles: SchoolProfile[] = [
  {
    id: 'expat-majority',
    name: 'Expat-majority, multinational (ICS-like)',
    composition: [
      'American plurality with 28 nationalities represented; 354 students in 2020–2021.',
      'Sample nationality shares: USA 24.0%; South Korea 20.9%; Singapore 5.7%.',
      'Families may be on expatriate packages; mix of passports and visa types.'
    ],
    costBundle: [
      'Tuition signals: Elementary S$33,824; Middle S$38,539; High S$43,133.',
      'Campus life oriented around transient mobility and international curricula.',
      'Co-curriculars often draw from multiple countries and holiday calendars.'
    ],
    hypotheses: [
      'Consumer norms benchmarked against other expat hubs (housing near school buses, imported groceries).',
      'Peer influence may favor tech devices, travel-heavy breaks, and brand variety across countries.',
      'Parents may prioritize convenience services due to mobility and dual careers.'
    ],
    caveats: [
      'High tuition does not equal high disposable income for every family.',
      'Passport mix ≠ income mix; employment terms differ widely.',
      'Survey any claim for sample bias and whether costs are employer-subsidized.'
    ]
  },
  {
    id: 'local-international-mix',
    name: 'Local-international mix (SJI/ACS(I)-like)',
    composition: [
      'SJI International High School: 55.5% Singaporeans; 44.5% from ~30 other nationalities.',
      'ACS (International): 50% Singaporean; remainder from ~30 countries.',
      'Greater presence of long-term residents alongside mobile expatriates.'
    ],
    costBundle: [
      'School fees compete with local enrichment costs and national service timelines.',
      'Families navigate both Ministry of Education expectations and international pathways.',
      'Social calendars may include local festivals and neighborhood commitments.'
    ],
    hypotheses: [
      'Consumer choices may blend local price anchors (hawker food, MRT) with occasional premium splurges.',
      'Uniforms and local sports leagues can normalize shared baselines for gear and spending.',
      'Housing choices may span HDB, condos, and landed homes, creating varied peer references.'
    ],
    caveats: [
      'Nationality does not predict wealth; some Singaporean families prioritize fees over other spending.',
      'Peer norms differ by neighborhood and transport mode (bus, MRT, car).',
      'International pathways (IB, AP) do not imply foreign income levels.'
    ]
  },
  {
    id: 'hybrid-reference',
    name: 'Hybrid / mixed reference points',
    composition: [
      'Mix of permanent residents, new arrivals, and returnees who have lived in multiple countries.',
      'Students may compare Singapore prices with both home-country and previous-city baselines.',
      'Community events blend local traditions with global themes.'
    ],
    costBundle: [
      'Household budgets juggle relocation costs, savings goals, and regional travel.',
      'Parents may face currency fluctuations and differing tax systems.',
      'Activity choices weigh convenience (delivery apps) against local-price alternatives.'
    ],
    hypotheses: [
      'Consumer pressures shift depending on which peer group anchors the conversation (local vs. expat).',
      'Students may act as cultural translators for brands and payment habits.',
      'Group projects can reveal varying assumptions about what counts as “normal” spending.'
    ],
    caveats: [
      'Mixed reference points complicate averages—no single cost story covers everyone.',
      'Assumptions about “expat perks” miss families on local contracts or scholarships.',
      'Inflation and exchange rates can change decisions month to month.'
    ]
  }
];
