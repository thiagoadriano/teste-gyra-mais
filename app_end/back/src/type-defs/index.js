const { gql } = require('apollo-server');
const {readFileSync} = require('fs');
const {resolve} = require('path');

const content = readFileSync(
  resolve(__dirname, '../schema.graphql'),
  { encoding: 'utf8' }
);

module.exports = gql(content);
