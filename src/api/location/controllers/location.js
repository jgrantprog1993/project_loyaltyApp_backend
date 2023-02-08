'use strict';
const {sanitizeInput, sanitizeOutput} = require('@strapi/utils');
const { constants } = require('@strapi/utils/lib/relations');
/**
 * location controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::location.location', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async me(ctx) {
        console.log(ctx)
        console.log(ctx.state)
      const user = ctx.state.user

      if(!user){
        return ctx.badRequest(null, [{messages: {id: "No Auth Header was found"}}])
      }

      const data = await strapi.services.locations.find({user:user.id})

      if(!data) {
        return ctx.notDound()
      }

      return sanitizeOutput(data, {model: strapi.models.locations})
    },
}));
