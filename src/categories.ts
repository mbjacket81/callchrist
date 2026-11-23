export const CATEGORIES = {
  emotional: 'Heart & mind',
  loss: 'Grief & loss',
  family: 'Family & relationships',
  health: 'Health & sickness',
  work: 'Work & money',
  faith: 'Faith & doubt',
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
