import { createSelector } from 'redux-starter-kit';
import { parse } from 'date-fns';

const getSchedule = (state) => state.schedule;
const getListByDate = (state) => state.listByDate;

export const listByDateSelector = createSelector(
  getSchedule,
  getListByDate,
);

const getUi = (state) => state.ui;
const eventCell = (state) => state.selectedEventCell;

export const selectEventCellSelector = createSelector(
  getUi,
  eventCell,
);

export const getSelectedDay = (state) => state.day;
