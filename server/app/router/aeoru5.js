module.exports = app => {
  'use strict';

  const {
    aeoru5
  } = app.controller;

  app.get('/aeoru5/userInfo', aeoru5.userInfo);

  app.post('/aeoru5/signUp', aeoru5.signUp);
  app.post('/aeoru5/signIn', aeoru5.signIn);
  app.post('/aeoru5/aniSvgText', aeoru5.getAniSvgText);
  app.post('/aeoru5/uploadAvatar', aeoru5.uploadAvatar);
  app.post('/aeoru5/updateUserInfo', aeoru5.updateUserInfo);
  app.post('/aeoru5/saveTemporaryInfo', aeoru5.saveTemporaryInfo);
};