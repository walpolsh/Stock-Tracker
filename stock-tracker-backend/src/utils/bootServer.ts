import {ApolloServer} from 'apollo-server';
import {Stock} from '../typeDefs/Stock';
import {resolvers} from '../resolvers/resolvers';

export const bootServer = () => {
  console.log('Connected to PostgreSQL');
  const server = new ApolloServer({
    typeDefs: Stock,
    resolvers,
  });
  server.listen(4001).then(({url}) => {
    console.log(`Apollo Client running on ${url}`);
  });
};
