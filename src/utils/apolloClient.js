import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// const url =
//     process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL : process.env.REACT_APP_BACKEND_LOCAL_URL;
const url = process.env.REACT_APP_BACKEND_URL

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: `${url}/graphql`,
});
const client = new ApolloClient({
    cache,
    link,
});

export default client;
