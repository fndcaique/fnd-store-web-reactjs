import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../../store/reducers';

export const getStore = (initialState) => {
  if (!initialState) {
    return configureStore({
      reducer: rootReducer,
    });
  }
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export const renderWithRouterAndStore = (
  component,
  initialState = undefined,
) => {
  const store = getStore(initialState);

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
