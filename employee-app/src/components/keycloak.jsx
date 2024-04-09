// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8081/',
  realm: 'sso-demo',
  clientId: 'employee-portal',
  clientSecret: 'sCwKRbAt4mtkjRC3kgZLriPghyqM07Aq'
};

const keycloakInst = new Keycloak(keycloakConfig);

export default keycloakInst;
