import { createReducer } from 'redux-starter-kit';
import { addDays } from 'date-fns';
import { isEmpty } from 'lodash';
import {
  changeNextDay,
  changePrevDay,
  changeDay,
  reset,
  addEvent,
  removeEvent,
  selectEventCell,
  cancelSelectEventCell,
} from '../actions';
import { formatDateToUsa, parseDateFromUsa } from '../helpers';

const initialStateData = {
  activeDay: formatDateToUsa(new Date()),
  schedule: ({ listByDate: {} }),
  ui: ({ selectedCellEventData: {} }),
};

const activeDay = createReducer(initialStateData.activeDay, {
  [changeNextDay]: (state) => {
    const parsed = parseDateFromUsa(state);
    const formatted = addDays(parsed, 1);
    const normalized = formatDateToUsa(formatted);
    return normalized;
  },
  [changePrevDay]: (state) => {
    const parsed = parseDateFromUsa(state);
    const formatted = addDays(parsed, -1);
    const normalized = formatDateToUsa(formatted);
    return normalized;
  },
  [changeDay]: (_, { payload }) => payload,
  [reset]: () => initialStateData.activeDay,
});

const schedule = createReducer(initialStateData.schedule, {
  [addEvent]: (state, { payload }) => ({
    listByDate: {
      ...state.listByDate,
      [payload.date]: {
        ...state.listByDate[payload.date],
        [payload.hour]: true,
      },
    },
  }),
  [removeEvent]: (state, { payload }) => {
    if (isEmpty(payload)) {
      return state;
    }
    return ({
      listByDate: {
        ...state.listByDate,
        [payload.date]: {
          ...state.listByDate[payload.date],
          [payload.hour]: false,
        },
      },
    });
  },
});

const ui = createReducer(initialStateData.ui, {
  [selectEventCell]: (_, { payload }) => ({ selectedCellEventData: payload }),
  [cancelSelectEventCell]: () => initialStateData.ui,
  [addEvent]: () => initialStateData.ui,
});

export default {
  activeDay,
  schedule,
  ui,
};
