
const express = require('express');
const Controller = require('./idp.controller');

const router = express.Router();

module.exports = function(options){
  const idpController = new Controller(options);

  router.get('/chomage', idpController.getChomage);
  router.get('/retraite', idpController.getRetraite);
  router.get('/formation', idpController.getFormation);

  return router
}
