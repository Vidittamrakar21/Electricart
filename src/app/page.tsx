"use client"

import Image from "next/image";
import Front from "../components/front";
import Navbar from "../components/nav";
import { Ecoprovider } from "@/context/contextapi";
import {  ApolloProvider} from "@apollo/client";



export default function Home() {
  return (
    <main>
    

      <Ecoprovider>
    
      <Front/>

      </Ecoprovider>

     
     </main>
  );
}
