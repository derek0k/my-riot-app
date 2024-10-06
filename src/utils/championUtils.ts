export const getChampionStats = (info: Record<string, number>) => {
  return Object.entries(info).map(([key, value]) => ({
    key,
    value,
  }));
};
