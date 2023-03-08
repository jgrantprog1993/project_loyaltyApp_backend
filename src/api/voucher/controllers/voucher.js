'use strict';

/**
 * voucher controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::voucher.voucher', {
    count(ctx) {
       var { query } = ctx.request
       return strapi.query('api::voucher.voucher').count({ where: query });
   }
 });
