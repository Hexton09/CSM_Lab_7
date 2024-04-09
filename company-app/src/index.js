// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import keycloakInst from './components/keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const initOptions = { onLoad: 'login-required' };

  ReactDOM.render(
    <ReactKeycloakProvider authClient={keycloakInst} initOptions={initOptions}>
      <App />
    </ReactKeycloakProvider>,
    document.getElementById('root')
  )