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

export function getWeekStartDateWithStartTime(date) {
  const d = getWeekStartDate(date);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}

export function getWeekEndDateWithEndTime(date) {
  const d = getWeekStartDate(date);
  d.setDate(d.getDate() + (6 - d.getDay()));
  d.setHours(23);
  d.setMinutes(59);
  d.setSeconds(59);
  d.setMilliseconds(999);
  return d;
}

export function getPrevWeekStartDate(date) {
  const d = getWeekStartDate(date);
  d.setDate(d.getDate() - 7);
  return d;
}

export function getNextWeekStartDate(date) {
  const d = getWeekStartDate(date);
  d.setDate(d.getDate() + 7);
  return d;
}
