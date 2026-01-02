import { ContentSection } from '../types';

// EDIT HERE: glossary terms to guide student inquiry.
export const glossary: ContentSection = {
  id: 'glossary',
  title: 'Glossary for Careful Claims',
  description: 'Key terms to help you read population and cost data without overclaiming.',
  stats: [
    {
      id: 'glossary-resident',
      label: 'Resident / Non-resident',
      value: 'Population categories',
      year: 'Context',
      description: 'Residents include citizens and permanent residents; non-residents include many visa types and do not equal “wealthy expats.”',
      sourceId: 'singstat-population-2024'
    },
    {
      id: 'glossary-proxy',
      label: 'Proxy',
      value: 'A stand-in measure',
      year: 'Context',
      description: 'A data point that hints at something else (e.g., tuition as a signal of income) but is not proof.',
      sourceId: 'internations-2024'
    },
    {
      id: 'glossary-benchmark',
      label: 'Benchmark',
      value: 'A comparison point',
      year: 'Context',
      description: 'Using median household income as a scale helps, but does not reveal subsidies or employer payments.',
      sourceId: 'singstat-income-2024'
    },
    {
      id: 'glossary-sample-bias',
      label: 'Sample bias',
      value: 'Who is included?',
      year: 'Context',
      description: 'Survey or school data reflect only those who participate; missing groups change the story.',
      sourceId: 'moe-parliament-2021'
    },
    {
      id: 'glossary-median-mean',
      label: 'Median vs. mean',
      value: 'Middle vs. average',
      year: 'Context',
      description: 'Median household income (middle value) is less affected by very high or low earners than the mean.',
      sourceId: 'singstat-income-2024'
    }
  ]
};
