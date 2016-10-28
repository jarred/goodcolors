const Hapi = require('hapi');
const inert = require('inert');

const server = new Hapi.Server();

server.connection({port: 3000});

server.register(inert, err => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/bundle.js',
    handler: (request, reply) => {
      reply.file('./dist/bundle.js');
    }
  });

  server.route({
    method: 'GET',
    path: '/{p*}',
    handler: (request, reply) => {
      reply.file('./index.html');
    }
  });
});

server.start(err => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
