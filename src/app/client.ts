import { ApolloClient ,InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({

    uri: "https://electricart-product-server.vercel.app/graphql",
    cache: new InMemoryCache()
  });