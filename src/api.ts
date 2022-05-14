// ESM
import { RequestContext } from '@mikro-orm/core';
import Fastify from 'fastify';
import fp from 'fastify-plugin';
import orm from './db';

const fastify = Fastify({
  logger: true,
});

function dbPlugin(fastify, opts, done) {
  RequestContext.create(orm.em, done);
}

fastify.register(fp(dbPlugin), { url: 'https://example.com' });

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});

fastify.get('/box', async () => {
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  // Server is now listening on ${address}
});
