module.exports = app => {
  'use strict';

  const {
    aeoru5
  } = app.controller;

  app.get('/aeoru5/aniSvgTxt', aeoru5.getAniSvgTxt);
  app.post('/aeoru5/aniSvgTxt', aeoru5.getAniSvgTxt);
};