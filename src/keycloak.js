import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://172.20.1.29:8080/',
  realm: 'myrealm',
  clientId: 'myclient',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;