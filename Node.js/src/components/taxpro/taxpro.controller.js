const TaxProService = require('./taxpro.service');


const Taxprocontroller={
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  list: async (httpRequest) => {
    const loginData = await TaxProService.doTaxprolist(httpRequest.body);
    return {
      statusCode: 200,
      body: {
        data: loginData
      }
    };

},
viewDetails: async (httpRequest) => {
    const loginData = await TaxProService.viewDetailTaxPro(httpRequest);
    return {
      statusCode: 200,
      body: {
        data: loginData
      }
    };

}

}

module.exports=Taxprocontroller;