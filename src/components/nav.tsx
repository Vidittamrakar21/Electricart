"use client"

import { useContext ,useState} from "react"
import { EcoContext } from "@/context/contextapi"
import {useRouter} from 'next/navigation'
import Signpage from "./sign/sign"


export default function Navbar (){
  const data  =  useContext(EcoContext);
  const router = useRouter()

  const opensign = ()=>{
    router.push('/sign')
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

  const openorder = () => {
    router.push('/order')
    setbox(false)
  }

  const openotify = () => {
    router.push('/notification')
    setbox(false)
  }

  const [box ,setbox] = useState<boolean>(false);

  const handlebox = () => {
    setbox(!box)
  }


    return(
 
         <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-20 border-b sm1:fixed sm1:z-20">
          <div className="  w-1/2 h-14 bg-white flex flex-row items-center justify-evenly sm1:w-[300px] ">
          <h1 className=" font-sans text-[27px] cursor-pointer sm1:mr-12" onClick={openhome}>Electricart</h1>
          

            <div className=" flex flex-row items-start justify-center cursor-pointer  relative left-5 sm1:left-[-20px]" onClick={opensearch}>
              
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </div>
         <input type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:hidden" onClick={opensearch} />

           <div className=" flex flex-row items-start justify-center cursor-pointer sm1:mr-2" onClick={opensign}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            <h2 className="font-sans ml-3 sm1:hidden">Login</h2>
            </div>

            <div className=" flex flex-row items-start justify-center cursor-pointer sm1:mr-2 " onClick={opencart}>
            <div className="flex justify-center items-center h-[15px] w-[15px] rounded-[50%] bg-[red] text-[white]">
                1
              </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <h2 className="font-sans ml-3 sm1:hidden">Cart</h2>
            </div>

            <div className=" flex flex-row items-start justify-center cursor-pointer" onClick={handlebox}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
             <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>  
            </div>

          </div>

            <div  className={box? "h-[150px] w-[180px] sm1:right-[30px] bg-[white] select-none flex flex-col justify-center items-center fixed right-[500px] top-[60px] shadow-lg rounded-[8px] border" :"hidden"}>
                <div onClick={openorder} className="h-[45px] w-[170px] flex justify-start items-center ml-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"  viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
               </svg>

               <h2 className=" ml-2">Orders</h2>
                </div>

                <div onClick={openotify} className="h-[45px] w-[170px] flex justify-start items-center ml-3  cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"  viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                </svg>

               <h2 className=" ml-2">Notifications</h2>
                </div>


                <div className="h-[45px] w-[170px] flex justify-start items-center ml-3 cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray"  viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>

               <h2 className=" ml-2">Logout</h2>
                </div>
            </div>
            
        </nav>
      
    )
}