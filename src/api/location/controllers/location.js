'use strict';
const utils = require('@strapi/utils')
const { sanitize } = utils
/**
 * location controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const modelUid = "api::location.location"

module.exports = createCoreController(modelUid, ({ strapi }) => ({
   // Method 1: Creating an entirely custom action
   getUserLocations: async(ctx, next) => {
      console.log("GOT HERE!!!!")
      ctx.body = "GOT HERE!!!!lalaa"
      const {id} = ctx.request.params
      console.log(id)

   //    const events = await strapi
   //    .db
   //    .query('plugin::users-permissions.user')
   //    .me({
   //       where: {
   //          id: user.id
   //       },
   //       populate: { 
   //          locations: { select: 'id'}
   //       }
   //       })
   // },
    // find: async (ctx, next) => {
    //   // destructure to get `data` and `meta` which strapi returns by default
    //   const {data, meta} = await super.find(ctx)
      
    //   // perform any other custom action
    //   return {data, meta}
    // }
   }
}
   )
   );