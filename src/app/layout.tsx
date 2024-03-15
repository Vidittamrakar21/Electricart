
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/nav";
import Footer from "../components/footer";
import { ApolloClient ,InMemoryCache , ApolloProvider} from "@apollo/client";

const client = new ApolloClient({

  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electricart",
  description: "An Ecommerce Platform for Electronic Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
         
           {children}
       
            <Navbar></Navbar>

            <Footer></Footer>
         
        
    
      </body>

    </html>
  );
}
