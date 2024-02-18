import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// Use process.env variable for the GraphQL server URI
const GRAPHQL_URI = process.env.GRAPHQL_URI || 'https://blogger-service.onrender.com/graphql';

const client = new ApolloClient({
    link: new HttpLink({
        uri: GRAPHQL_URI,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
        },
    },
});

export default client;
