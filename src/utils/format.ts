const pad = (n: number) => String(n).padStart(2, '0');

/** 2026-05-31 -> 31.05.2026 */
export const formatDate = (date: string | Date) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
};

/** WEDNESDAY · 21.10.2026 · 14:32:07 */
export const formatClock = (d: Date) =>
  [
    d.toLocaleDateString('en-GB', { weekday: 'long' }).toUpperCase(),
    formatDate(d),
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`,
  ].join(' · ');
