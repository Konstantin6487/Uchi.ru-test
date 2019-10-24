import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import App from './components/App';
import reducer from './reducers';
import { addEvent } from './actions';

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

store.dispatch(addEvent({ date: '10-24-2019', hour: '23' }));

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
