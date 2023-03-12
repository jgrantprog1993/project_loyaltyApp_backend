'use strict';

/**
 * offer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::offer.offer', {
    count(ctx) {
       var { query } = ctx.request
       return strapi.query('api::offer.offer').count({ where: query });
   },
   async create(ctx) {
    return await strapi
      .service("api::offer.offer")
      .create(ctx.request.body);
  },
 });
