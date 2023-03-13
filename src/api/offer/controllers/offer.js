'use strict';

/**
 * offer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::offer.offer', {
    count(ctx) {
       var { query } = ctx.request
       return strapi.query('api::offer.offer').count({ where: query });
   }
 });
