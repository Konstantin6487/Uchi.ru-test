import { createAction } from 'redux-starter-kit';

export const reducerActiveDay = 'activeDay';
export const reducerSchedule = 'schedule';
export const reducerUi = 'ui';

export const changeNextDay = createAction(`${reducerActiveDay}/CHANGE_NEXT_DAY`);
export const changePrevDay = createAction(`${reducerActiveDay}/CHANGE_PREV_DAY`);
export const changeDay = createAction(`${reducerActiveDay}/CHANGE_DAY`);
export const reset = createAction(`${reducerActiveDay}/RESET_DAY`);

export const addEvent = createAction(`${reducerSchedule}/EVENT_ADD`);
export const removeEvent = createAction(`${reducerSchedule}/EVENT_REMOVE`);

export const selectEventCell = createAction(`${reducerUi}/EVENT_SELECT_CELL`);
export const cancelSelectEventCell = createAction(`${reducerUi}/EVENT_SELECT_CANCEL`);
