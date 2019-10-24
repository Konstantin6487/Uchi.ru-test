import { createAction, createReducer } from 'redux-starter-kit';
import { addDays, format, parse } from 'date-fns';

export const addDay = createAction('day/ADD_DAY');
export const removeDay = createAction('day/REMOVE_DAY');
export const setDay = createAction('day/SET_DAY');

const initialState = format(new Date(), 'M-d-yyyy', { timeZone: 'Europe/Moscow' });

const day = createReducer(initialState, {
  [addDay]: (state) => {
    const parsed = parse(state, 'M-d-yyyy', new Date());
    const formatted = addDays(parsed, 1);
    const normalized = format(formatted, 'M-d-yyyy', { timeZone: 'Europe/Moscow' });

    return normalized;
  },
  [removeDay]: (state) => {
    const parsed = parse(state, 'M-d-yyyy', new Date());
    const formatted = addDays(parsed, -1);
    const normalized = format(formatted, 'M-d-yyyy', { timeZone: 'Europe/Moscow' });

    return normalized;
  },
  [setDay]: (_, { payload }) => payload,
});


const reducer = {
  day,
};

export default reducer;
