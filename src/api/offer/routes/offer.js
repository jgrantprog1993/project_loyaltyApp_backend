'use strict';

/**
 * offer router
 */

module.exports = {
    routes: [
      {
       method: 'POST',
       path: '/offer',
       handler: 'offer.create',
       config: {
         policies: [],
         middlewares: [],
       },
      },
    ],
  };

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::offer.offer');
