import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import { profile, document } from '../controllers/profile'
import user from '../controllers/user'

const resolvers = {
    user,
    profile,
    document 
}
const graphql = graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  });

  module.exports = graphql;