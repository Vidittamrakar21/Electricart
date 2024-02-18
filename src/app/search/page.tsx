"use client"

import Footer from "../components/footer"
import {useRouter} from 'next/navigation'
import Itemcard from "../components/itemcard"

export default function Search (){

    const router = useRouter()

    const gohome = () =>{
        router.push('/')
    }

    return(

        <div className=" min-h-[900px] flex flex-col justify-center items-center"> 
        <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-30 border-b sm1:fixed sm1:z-30">
           <h1 className=" font-sans text-[27px] cursor-pointer sm1:hidden relative right-[100px]" onClick={gohome}>Electricart</h1>
        <div className=" flex flex-row items-start justify-center cursor-pointer  relative right-6 sm1:right-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </div>
         <input type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:w-80 " autoFocus = {true} />

        </nav>

        {/* <h1 className="text-[19px]">Search Results will appear here.</h1> */}

        <Itemcard></Itemcard>

        {/* <Footer/> */}
        </div>
    )
}