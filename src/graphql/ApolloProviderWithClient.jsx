import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/explore?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
  cache: new InMemoryCache(),
});

const ApolloProviderWithClient = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWithClient;
