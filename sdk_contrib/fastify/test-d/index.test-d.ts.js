import * as AWSXRay from 'aws-xray-sdk-core';
import * as Fastify from 'fastify';
import { expectType } from 'tsd';

const server = Fastify();
server.register(require('../lib'));

server.route({
  method: 'GET',
  path: '/',
  handler: async (request, _reply) => {
    (expectType < AWSXRay.Segment) | (undefined > request.segment);
    return { data: 'ok' };
  },
});
