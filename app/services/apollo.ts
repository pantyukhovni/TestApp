import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { DefaultOptions } from '@apollo/client';
import Config from "react-native-config";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  uri: Config.API_URL,
  cache: new InMemoryCache({
    addTypename: false
  }),
  defaultOptions
});

export default client;

export const { query, mutate } = client;