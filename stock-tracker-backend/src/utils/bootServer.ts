import {snakeCaseFieldResolver} from './snakeCaseFieldResolver';

const {ApolloServer} = require('apollo-server');
const typeDefs = require('../typeDefs/Stock');
const resolvers = require('../resolvers/stockResolvers');

const bootServer = () => {
  console.log('Connected to PostgreSQL');
  const server = new ApolloServer({
    fieldResolver: snakeCaseFieldResolver,
    typeDefs,
    resolvers,
  });
  server.listen(4001).then(({url}) => {
    console.log(`Apollo Client running on ${url}`);
  });
};

module.exports = bootServer;
