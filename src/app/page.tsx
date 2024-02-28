"use client"

import Image from "next/image";
import Front from "./components/front";
import Navbar from "./components/nav";
import { Ecoprovider } from "@/context/contextapi";
import Signpage from "./components/sign/sign";

export default function Home() {
  return (
    <main>
      <Ecoprovider>
    
      <Front/>

      </Ecoprovider>

     </main>
  );
}
