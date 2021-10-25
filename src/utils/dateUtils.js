export function getWeekStartDate(date) {
  // Clone date object
  const startDate = new Date(date.getTime());
  // TODO: This probably works. But should test for dates near the start of the month
  startDate.setDate(startDate.getDate() - date.getDay());
  return startDate;
}

export function getNextNthDate(date, n) {
  const nextDate = new Date(date.getTime());
  if (n > 0) {
    nextDate.setDate(nextDate.getDate() + n);
  }
  return nextDate;
}

export function isSameDate(firstDate, secondDate) {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
}
