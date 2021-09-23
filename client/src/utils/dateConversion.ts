export function monthDayYear(inputDate: string): string {
  const date = new Date(inputDate);
  const [month, day, year] = [date.getUTCMonth(), date.getUTCDate(), date.getUTCFullYear()];
  const months = [
    'Janurary',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return `${months[month]} ${day}, ${year}`;
}