require('dotenv').config();


const config = {
 "default-connection": "my-sqs-eu",
  "default-queue-name": "filipe",
  "connections": {
    "my-sqs-eu": {
      "driver": "sqs",
      "key": "your-public-key",
      "secret": "your-secret-key",
      "region": "eu-west-1",
      "account": process.env.SQS_ACCOUNT,
      "queueName" : process.env.SQS_QUEUE_NAME
    },
    "redis-local": {
      "driver": "redis",
      "host": "127.0.0.1",
      "port": "6379",
      "user": "",
      "password": "",
      "db":"",
    }
  }
}

module.exports = { config }
