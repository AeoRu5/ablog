module.exports = app => {
  'use strict';

  const {
    aeoru5
  } = app.controller;

  app.post('/aeoru5/aniSvgTxt', aeoru5.getAniSvgTxt);
  app.post('/aeoru5/signUp', aeoru5.getRegisterForm);
};