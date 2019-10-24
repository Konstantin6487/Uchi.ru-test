import { format, parse, startOfWeek, addDays } from 'date-fns';

export const defaultTimeZone = { timeZone: 'Europe/Moscow' };

export const formatDateToUsa = (date) => format(date, 'M-d-yyyy', defaultTimeZone);
export const formatDatePretty = (date) => format(date, 'EEEE d MMMM yyyy', defaultTimeZone);
export const parseDateFromUsa = (date) => parse(date, 'M-d-yyyy', new Date());

export const getDayDigit = (date) => format(date, 'd', defaultTimeZone);
export const getDayName = (date) => format(date, 'EEEEE', defaultTimeZone);
export const getStartOfWeek = (date) => startOfWeek(date, { weekStartsOn: 1 });

export const getWeekDaysData = (weekStart) => Array
  .from({ length: 7 }, (_, i) => addDays(weekStart, i))
  .map((day) => ({
    date: formatDateToUsa(day),
    dayNum: getDayDigit(day),
    dayName: getDayName(day),
  }));
