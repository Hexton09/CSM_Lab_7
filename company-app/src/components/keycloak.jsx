// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8081/',
  realm: 'sso-demo',
  clientId: 'company-portal==',
  clientSecret:'KFd8zlrFXyq7uGHo9GXcR7NUrFPOVEPv',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
