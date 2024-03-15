"use client"

import Image from "next/image";
import Front from "./components/front";
import Navbar from "./components/nav";
import { Ecoprovider } from "@/context/contextapi";
import { ApolloClient ,InMemoryCache , ApolloProvider} from "@apollo/client";

export const client = new ApolloClient({

  uri: "https://electricart-product-server.vercel.app/graphql",
  cache: new InMemoryCache()
});

export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>

      <Ecoprovider>
    
      <Front/>

      </Ecoprovider>
      </ApolloProvider>

     </main>
  );
}
