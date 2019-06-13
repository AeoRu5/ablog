module.exports = app => {
  'use strict';

  const {
    aeoru5
  } = app.controller;

  app.post('/aeoru5/aniSvgTxt', aeoru5.getAniSvgTxt);
  app.post('/aeoru5/saveTemporaryInfo', aeoru5.saveTemporaryInfo);
  app.post('/aeoru5/signUp', aeoru5.signUp);
  app.post('/aeoru5/signIn', aeoru5.signIn);
  app.get('/aeoru5/userInfo', aeoru5.userInfo);
};