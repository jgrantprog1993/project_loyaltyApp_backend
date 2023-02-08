'use strict';

/**
 * location router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::location.location', {
    only: ['find', 'findAll', 'me'],
    config: {
        find: {
          auth: false,
          policies: [],
          middlewares: [],
        },
        findAll: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        me: {
        auth: false,
        policies: [],
        middlewares: [],
        }
      }
});