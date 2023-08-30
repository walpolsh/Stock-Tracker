import {ApolloServer} from 'apollo-server';
import {Stock} from '../typeDefs/Stock';
import {stockResolver} from '../resolvers/stockResolver';

export const bootServer = () => {
  console.log('Connected to PostgreSQL');
  const server = new ApolloServer({
    typeDefs: Stock,
    resolvers: stockResolver,
  });
  server.listen(4001).then(({url}) => {
    console.log(`Apollo Client running on ${url}`);
  });
};
