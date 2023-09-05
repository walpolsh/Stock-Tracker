const ApolloServer = require('apollo-server');
const {Stock} = require('../typeDefs/Stock');
const {stockResolver} = require('../resolvers/stockResolvers');
const bootServer = () => {
  console.log('Connected to PostgreSQL');
  const server = new ApolloServer({
    typeDefs: Stock,
    resolvers: stockResolver,
  });
  server.listen(4001).then(({url}) => {
    console.log(`Apollo Client running on ${url}`);
  });
};

export default bootServer;
