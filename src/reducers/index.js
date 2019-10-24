import { createAction, createReducer } from 'redux-starter-kit';
import { addDays, format } from 'date-fns';

export const add = createAction('day/ADD_DAY');
const remove = createAction('day/REMOVE_DAY');

const initialState = format(
  new Date(),
  'M-d-yyyy',
);

const day = createReducer(initialState, {
  [add]: (state) => addDays(state, 1),
  [remove]: (state) => addDays(state, -1),
});


const reducer = {
  day,
};

export default reducer;
