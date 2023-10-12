export function sortStocks(
  sortField: string,
  sortOrder: string,
): (a: string | number, b: string | number) => number {
  return (a, b) => {
    const valueA = a[sortField];
    const valueB = b[sortField];
    if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  };
}
