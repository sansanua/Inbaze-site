import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const GLOBAL_URL = process.env.REACT_APP_BACKEND_URL;
// const LOCAL_URL = process.env.REACT_APP_BACKEND_LOCAL_URL;

// const url = process.env.NODE_ENV === 'production' ? GLOBAL_URL : LOCAL_URL;
const url = GLOBAL_URL;

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: `${url}/graphql`,
});
const client = new ApolloClient({
    cache,
    link,
});

export default client;
