'use strict';

const url_schema = require('../schema/url.js');


const insertUrl = (request, reply) => {

  console.log(request.payload);
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

