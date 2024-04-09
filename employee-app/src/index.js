import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import keycloakInst from './components/keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const initOptions = { onLoad: 'login-required' };

const root = document.getElementById('root');

createRoot(root).render(
  <ReactKeycloakProvider authClient={keycloakInst} initOptions={initOptions}>
    <App />
  </ReactKeycloakProvider>
);