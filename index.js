import { GraphQLServer } from "graphql-yoga";
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers
});

server.start(() => console.log("Running a GraphQL API server at localhost:4000"));