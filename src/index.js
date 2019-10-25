import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import { save, load } from 'redux-localstorage-simple';
import App from './components/App';
import reducer from './reducers';
import { reducerSchedule, reducerActiveDay } from './actions';

const preloadStates = [reducerActiveDay, reducerSchedule];

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...getDefaultMiddleware({
    serializableCheck: false,
  }), save({ states: preloadStates })],
  preloadedState: load({ states: preloadStates }),
});

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
