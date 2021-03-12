const { ApolloServer } = require('apollo-server');

const db = require('./db');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

db.starter();

const Server = new ApolloServer({typeDefs, resolvers});

Server
  .listen()
  .then(sv => console.log('Rodando em: ', sv.url))
  .catch(console.error);
