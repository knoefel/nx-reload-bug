import { i18nInit, SettingsProvider } from '@cv/app/core';
import React, { FC } from 'react';
import * as ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import 'sanitize.css/sanitize.css';
import { App } from './App';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const ConnectedApp: FC = () => (
  <I18nextProvider i18n={i18nInit}>
    <HelmetProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </HelmetProvider>
  </I18nextProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <ConnectedApp />
  </React.StrictMode>,
  MOUNT_NODE
);
