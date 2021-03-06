'use strict';
const { routes, utils } = require('@contrast/test-bench-utils');

const sinkData = utils.getSinkData('unsafeFileUpload', 'express');
const routeMeta = utils.getRouteMeta('unsafeFileUpload');

module.exports = async function route(fastify, options) {
  fastify.get(routes.unsafeFileUpload.base, async (request, reply) => {
    reply.view('unsafeFileUpload', {
      ...options,
      ...routeMeta,
      sinkData
    });
    return reply;
  });

  sinkData.forEach(({ method, url, sink, key }) => {
    fastify[method](url, async (request, reply) => {
      const input = utils.getInput({ locals: {}, req: request, key });
      // We sometimes use these routes just to test UFU and there is no input
      // Just return 'done' in that case
      if (input) {
        return await sink(input);
      } else {
        return 'done';
      }
    });
  });
};
