const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

// validator
const TaxProValidator = require('./taxpro.validator');

// service
const TaxProService = require('./taxpro.service');

// controller
const TaxProController = require('./taxpro.controller');

// routes
const routes = require('./taxpro.routes')({
  router,
  TaxProController,
  TaxProValidator,
  makeValidatorCallback,
  makeExpressCallback
});

module.exports = {
    TaxProService,
    TaxProController,
    TaxProRoutes: routes
};
