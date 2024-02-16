"use client"

import Image from "next/image";
import Front from "./components/front";
import { Ecoprovider } from "@/context/contextapi";
import Signpage from "./components/sign/sign";

export default function Home() {
  return (
    <main>
      <Ecoprovider>
      <Front/>
      <Signpage></Signpage>
      </Ecoprovider>

     </main>
  );
}
