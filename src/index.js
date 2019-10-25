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

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...getDefaultMiddleware({
    serializableCheck: false,
  }), save()],
  preloadedState: load(),
});

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
