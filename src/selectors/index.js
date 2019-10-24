import { createSelector } from 'redux-starter-kit';

const getSchedule = (state) => state.schedule;
const getListByDate = (state) => state.listByDate;

export const listByDateSelector = createSelector(
  getSchedule,
  getListByDate,
);

const getUi = (state) => state.ui;
const eventCell = (state) => state.selectedCellEventData;

export const selectEventCellSelector = createSelector(
  getUi,
  eventCell,
);

export const getActiveDay = (state) => state.activeDay;
