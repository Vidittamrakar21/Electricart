"use client"

import { useContext } from "react"
import { EcoContext } from "@/context/contextapi"
import {useRouter} from 'next/navigation'


export default function Navbar (){
  const data  =  useContext(EcoContext);
  const router = useRouter()

  const openlog = ()=>{
   data?.openlog(true)
   
  } 

  const opensearch = () => {
    router.push('/search')
  }

  const openhome = () => {
    router.push('/')
  }

  const opencart = () => {
    router.push('/cart')
  }


    return(
        <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-20 border-b sm1:fixed sm1:z-20">
          <div className="  w-1/2 h-14 bg-white flex flex-row items-center justify-evenly sm1:w-[300px] ">
          <h1 className=" font-sans text-[27px] cursor-pointer sm1:mr-12" onClick={openhome}>Electricart</h1>
          

            <div className=" flex flex-row items-start justify-center cursor-pointer  relative left-5 sm1:left-[-10px]" onClick={opensearch}>
              
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </div>
         <input type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:hidden" onClick={opensearch} />

           <div className=" flex flex-row items-start justify-center cursor-pointer" onClick={openlog}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            <h2 className="font-sans ml-3 sm1:hidden">Login</h2>
            </div>

            <div className=" flex flex-row items-start justify-center cursor-pointer " onClick={opencart}>
            <div className="flex justify-center items-center h-[15px] w-[15px] rounded-[50%] bg-[red] text-[white]">
                1
              </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <h2 className="font-sans ml-3 sm1:hidden">Cart</h2>
            </div>

            <div className=" flex flex-row items-start justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
             <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>  
            </div>

          </div>
        </nav>
    )
}