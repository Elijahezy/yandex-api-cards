import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app'
import createAPI from './components/services/api';
import { fetchProductsAction } from './components/store/api-actions';
import { Data } from './components/store/reducer';
import Global from './styles/global-styles'

const api = createAPI();

const store = configureStore({
  reducer: Data,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

store.dispatch(fetchProductsAction())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

