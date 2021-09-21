export function monthDayYear(inputDate: string): string {
  const date = new Date(inputDate);
  const [month, day, year] = [date.getUTCMonth(), date.getUTCDate(), date.getUTCFullYear()];
  return `${month + 1}/${day}/${year}`;
}