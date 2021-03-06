'use strict';


const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Joi = require('joi');
const Vision = require('vision');
const Pack = require('../package')

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

const options = {
    info: {
      'title': 'Test API Documentation',
      'version': Pack.version,
    }
};

server.register([
  Inert,
  Vision,
  {
      'register': HapiSwagger,
      'options': options
  }], (err) => {

    server.register([require('../routes/url.js')]);

    server.start( (err) => {
      if (err) {
          //console.log(err);
      } else {
          console.log('Server running at:', server.info.uri);
      }
    });

});

