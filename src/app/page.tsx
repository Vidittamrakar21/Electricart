"use client"

import Image from "next/image";
import Front from "./components/front";
import { Ecoprovider } from "@/context/contextapi";

export default function Home() {
  return (
    <main>
      <Ecoprovider>
      <Front/>

      </Ecoprovider>

     </main>
  );
}
