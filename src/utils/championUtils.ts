export const getChampionStats = (info: Record<string, number>) => {
  return Object.entries(info).map(([key, value]) => ({
    key,
    value,
  }));
};

export const truncateDescription = (
  desc: string,
  maxLength: number = 24
): string => {
  return desc.length > maxLength ? `${desc.slice(0, maxLength - 1)}⋯` : desc;
};
