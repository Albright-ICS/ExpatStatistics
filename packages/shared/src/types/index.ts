export type Stat = {
  id: string;
  label: string;
  value: string;
  year: string;
  description: string;
  sourceId: string;
};

export type SchoolProfile = {
  id: string;
  name: string;
  composition: string[];
  costBundle: string[];
  hypotheses: string[];
  caveats: string[];
};

export type ContentSection = {
  id: string;
  title: string;
  description: string;
  stats?: Stat[];
};

export type SourceEntry = {
  id: string;
  title: string;
  url: string;
  annotation: string;
};
