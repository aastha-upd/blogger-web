import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// Use process.env variable for the GraphQL server URI
const GRAPHQL_URI = process.env.REACT_APP_GRAPHQL_URI || 'https://blogger-service.onrender.com/graphql';

const client = new ApolloClient({
    link: new HttpLink({
        uri: GRAPHQL_URI,
    }),
    cache: new InMemoryCache(),
});

export default client;
