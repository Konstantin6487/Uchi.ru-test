import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import App from '../components/App';
import reducer from '../reducers';


it('renders without crashing', () => {
  const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(wrapper).toContainMatchingElements(1, 'div[data-test="app"]');
});
