/**
 *
 * @param {Object} TaxProRouter
 * @param {ExpressRouter} TaxProRouter.router
 * @param {Taxprocontroller} TaxProRouter.TaxProController
 * @param {TaxProRouter} TaxProRouter.TaxProRouter
 * @param {makeExpressCallback} TaxProRouter.makeExpressCallback
 * @param {makeValidatorCallback} TaxProRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */

const authorization = require('../../middlewares/auth');

module.exports = ({ router, TaxProController, makeExpressCallback }) => {
    router.get('/list',authorization, makeExpressCallback(TaxProController.list));
    router.get('/view/:id', makeExpressCallback(TaxProController.viewDetails));
  
    return router;
  };