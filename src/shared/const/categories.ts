export const CATEGORIES = ['all', 'human', 'alien'] as const
export type CategoryType = (typeof CATEGORIES)[number]
