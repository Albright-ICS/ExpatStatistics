import { Stat } from '../types';
import { feeStats, populationStats, participationStats, perceptionStats, icsStats, schoolModelStats } from './siteContent';

export type ClaimOption = {
  id: string;
  label: string;
  stat: Stat;
};

const claimSources: ClaimOption[] = [
  ...populationStats,
  ...participationStats,
  ...icsStats,
  ...schoolModelStats,
  ...feeStats,
  ...perceptionStats
].map((stat) => ({ id: stat.id, label: stat.label, stat }));

export const claimToolkit = {
  prompt: 'Pick two data points, then craft a claim and a matching caveat.',
  claimOptions: claimSources,
  caveatTemplates: [
    'This signal might be skewed because employer subsidies are not shown.',
    'Nationality shares do not reveal household income.',
    'Survey results depend on who responded and may miss certain groups.',
    'Fees are published rates and may differ after discounts or waivers.'
  ],
  claimTemplate:
    'Claim: Using {{statA}} and {{statB}}, we see a possible consumer pressure. Caveat: These numbers do not prove income or spending for every family.'
};
