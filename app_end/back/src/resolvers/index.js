const messageResolver = require("./messageResolver");
const roomResolver = require("./roomResolver");
const userResolver = require("./userResolver");

module.exports = [
  messageResolver,
  roomResolver,
  userResolver
];

