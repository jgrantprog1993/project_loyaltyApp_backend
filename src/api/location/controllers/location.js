'use strict';
const utils = require('@strapi/utils')
const { sanitize } = utils
/**
 * location controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::location.location', {
   count(ctx) {
      var { query } = ctx.request
      return strapi.query('api::location.location').count({ where: query });
  }
});
   
   // Method 1: Creating an entirely custom action
  // https://dev.to/paratron/limit-access-of-strapi-users-to-their-own-entries-298l
   
   // async find(ctx){
      //    console.log("TESTTESTESTESTEST!!!")
      //    const user = ctx.state.user;
   
      //    ctx.query.filters = {
      //       ...(ctx.query.filters || {}),
      //       owner: user.id
      //    };
   
      //    return super.find(ctx);
      // },

      // async findOne(ctx){
      //    const user = ctx.state.user;

      //    ctx.query.filters = {
      //       ...(ctx.query.filters || {}),
      //       owner: user.id
      //    };

      //    return super.findOne(ctx);
      // },

      // async update(ctx){
      //    const user = ctx.state.user;

      //    ctx.query.filters = {
      //       ...(ctx.query.filters || {}),
      //       owner: user.id
      //    };

      //    return super.update(ctx);
      // },

      // async delete(ctx){
      //    const user = ctx.state.user;

      //    ctx.query.filters = {
      //       ...(ctx.query.filters || {}),
      //       owner: user.id
      //    };

      //    return super.delete(ctx);
      // }
//}

