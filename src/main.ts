import { readFileSync } from 'node:fs';
import { ApolloServer } from 'apollo-server';
import {resolvers} from './resolvers';

const typeDefs = readFileSync('src/schema.graphql', 'utf8')
 
 
 
const server = new ApolloServer({ typeDefs, resolvers })

 
// The `listen` method launches a web server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})