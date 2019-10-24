import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'redux-starter-kit';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// store.dispatch(add());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
