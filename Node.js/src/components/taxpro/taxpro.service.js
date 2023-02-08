
const db = require('../../db/db.js');
const logger = require('../../support/logger');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');



const TaxProService = {
    /**
     * Login a user and generate token.
     * @async
     * @method
     * @param {UserDto} requestBody - Request Body
     * @returns {Context} Context object
     * @throws {NotFoundError} When the user is not found.
     */
  
  
    doTaxprolist: async (httpRequestBody) => {
      try {
        console.log("httpRequestBody",httpRequestBody.taxProId)

        var sqlObj = `SELECT * FROM taxprofessionaldata`;
        // making db call for inset user in to user_account table with role table inserion 
        const resultObj = await db.promise(sqlObj)
     
        if (resultObj.length == 0) {
          //
          logger.error("doRegister() Insert failed");
          //
          throw new BadRequestError('Insert failed');
        }
        return {
          resultObj
        };
      } catch (error) {
         logger.error(" dolist() "+error);
      }
      
    },
    viewDetailTaxPro: async (httpRequest) => {
      console.log("httpRequestId",httpRequest.params.id)
      const userId=httpRequest.params.id
      try {
        console.log("httpRequestBody",httpRequest)

        var sqlObj = `SELECT taxprofessionaldata.taxProId, taxprofessionaldata.taxProName, taxprofessionaldata.consultentType, taxprofessionaldata.ratePerHour ,state.stateName,city.cityName
        FROM taxprofessionaldata
        LEFT JOIN state 
        ON taxprofessionaldata.stateId = state.stateId
        LEFT JOIN city
        ON state.cityId = city.cityId
        WHERE taxprofessionaldata.taxProId = ${userId};`;
        // making db call for inset user in to user_account table with role table inserion 
        const resultObj = await db.promise(sqlObj)
     
        if (resultObj.length == 0) {
          //
          logger.error("viewDetailTaxPro() Insert failed");
          //
          throw new BadRequestError('Insert failed');
        }
        return {
          resultObj
        };
      } catch (error) {
         logger.error(" viewDetailTaxPro() "+error);
      }
      
    },

    addDetails: async (requestBody) => {
      try {
        const ratingId=1
        const {taxProName,consultentType,ratePerHour,state,city} = requestBody;
        let insertQuery = `INSERT INTO taxprofessionaldata (taxProName, consultentType, ratePerHour, stateId, ratingId) SELECT '${taxProName}', '${consultentType}', '${ratePerHour}', stateId, ${ratingId} FROM state WHERE state.stateName = '${state}' AND city.cityName = '${city}';`;
        // making db call for inset user in to user_account table with role table inserion 
        const resultObj = await db.promise(sqlObj)
        .then((result) => {
          // get inserted user id from previous query
          let queryObj = `select userId from user_account where userId = '${result.insertId}'`;
          return db.promise(queryObj);
        }).then((result) => {
          // insert useride into rolelist table with user role as static
          let roleType = 1; // user role type value = 1 and dadmin type = 2
          let queryObj = `INSERT INTO rolelist VALUES (?,?,?)`;
          return db.promise(queryObj,[,roleType, result[0].userId]);
        })
        .catch((err) => { 
          // write error into logger file
          console.log("catch error ",err);
        });
  
        if (resultObj.length == 0) {
          //
          logger.error("doRegister() Insert failed");
          //
          throw new BadRequestError('Insert failed');
        }
        return {
          resultObj
        };
      } catch (error) {
         logger.error("doRegister()"+error);
      }
      
    }

  };


  module.exports=TaxProService