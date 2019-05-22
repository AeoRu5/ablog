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

    domainWhiteList: [ 'http://localhost:8080' ]
  };

  config.cors = {
    allowMethods: 'GET,POST',
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  }

  config.middleware = [];

  return config;
};
