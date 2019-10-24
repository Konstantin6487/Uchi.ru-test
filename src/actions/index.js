import { createAction } from 'redux-starter-kit';

export const changeNextDay = createAction('activeDay/CHANGE_NEXT_DAY');
export const changePrevDay = createAction('activeDay/CHANGE_PREV_DAY');
export const changeDay = createAction('activeDay/CHANGE_DAY');
export const reset = createAction('activeDay/RESET_DAY');

export const addEvent = createAction('schedule/EVENT_ADD');
export const removeEvent = createAction('schedule/EVENT_REMOVE');

export const selectEventCell = createAction('ui/EVENT_SELECT_CELL');
export const cancelSelectEventCell = createAction('ui/EVENT_SELECT_CANCEL');
