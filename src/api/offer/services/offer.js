'use strict';

/**
 * offer service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const toEmail = process.env.TOEMAIL;
const welcome = process.env.WELCOME;
//module.exports = createCoreService('api::offer.offer');
module.exports = {
    async create(data) {
      const response = await strapi.entityService.create('api::offer.offer', {
        data,
      });
      strapi
        .service("api::comment.sendmail")
        .send(
          welcome,
          toEmail,
          "Welcome",
          `A Offer has been created ${entity.name}`
        );
      return response;
    },
  };