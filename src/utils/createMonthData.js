import {
  addDays,
  getTime,
  getDate,
  getDay,
  getDaysInMonth,
  getMonth,
  startOfMonth,
  startOfWeek,
  toDate,
  format,
} from 'date-fns';

export const createMonthData = (currentDate, selectedDate) => {
  const monthStart = startOfMonth(currentDate);

  const month = getMonth(currentDate);

  const today = getDate(currentDate);

  const startDayThisWeek = getDay(monthStart);

  const daysInMonth = getDaysInMonth(currentDate);

  const numOfWeeks = daysInMonth / 7 + 1;

  const now = new Date();

  let tmpDay = startDayThisWeek
    ? toDate(startOfWeek(monthStart))
    : toDate(monthStart);

  const tileData = [];

  for (let i = 0; i < numOfWeeks; i++) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      if (i > 0 && j === 0 && getMonth(tmpDay) !== month) {
        break;
      }

      const id = i * 7 + j; // counting index - doesn't

      let day = {
        id: 'tile-' + id,
        title: format(tmpDay, 'dd'),
        subtitle: '',
        dateFns: toDate(tmpDay),
        mode: 'ready',
        select: false,
      };

      if (getMonth(tmpDay) !== month || id < startDayThisWeek) {
        day.mode = 'disabled';
      } else if (getDate(day.dateFns) === today && getMonth(now) === month) {
        day.subtitle = 'Today';
      }

      if (selectedDate.length > 0) {
        selectedDate.forEach(item => {
          if (item === getTime(day.dateFns)) {
            day.select = item;
          }
        });
      }

      tmpDay = addDays(tmpDay, 1);

      week.push(day);
    }

    if (week.length > 0) {
      tileData.push(week);
    }
  }

  return tileData;
};
