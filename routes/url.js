'use strict';

const url_schema = require('../schema/url.js');
const QueueManager = require('QueueManager');
const config = require('../config/config.js').config;
const queue = new QueueManager(config);

const insertUrl = (request, reply) => {

  if(request.payload.url) {

    queue.push('urlSchema',{url:request.payload.url});
  }
};


exports.register = (server, options, next) => {

  server.route({
    method : 'POST',
    path : '/url/insert',
    handler : insertUrl,
    //description : 'insert URL ',
    //notes : 'insert URL',
    //tags : ['API'],
    //validate : {
      //payload : url_schema.insert
    //}
  });

  return next();
};


exports.register.attributes = {
  name: 'routes-url'
};

