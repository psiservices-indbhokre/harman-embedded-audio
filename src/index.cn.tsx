import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import App from '@src/views/chinese/App/App';
import store, { history } from './modules/store';

import './index.scss';

import './i18n';

import "@src/assets/scss/material-kit-pro-react.scss";

// import registerServiceWorker from './registerServiceWorker';

i18next.changeLanguage('cn');
ReactDOM.render(
  <I18nextProvider i18n={i18next}>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  </I18nextProvider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
