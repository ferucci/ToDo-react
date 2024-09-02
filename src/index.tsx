import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

import { store } from './store'
import { Provider } from 'react-redux'
import ThemeProvider from './providers/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
