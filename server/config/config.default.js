'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_8618659651239_1216';

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },

    domainWhiteList: [ 'http://localhost:8080', 'https://aeorus.xyz' ]
  };

  config.cors = {
    allowMethods: 'GET,POST',
  };

  config.middleware = [];

  return config;
};