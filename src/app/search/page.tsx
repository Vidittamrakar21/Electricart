"use client"

import Footer from "../components/footer"
import {useRouter,useSearchParams} from 'next/navigation'

import { useParams } from "next/navigation"
import Itemcard from "../components/itemcard"
import Filter from "../components/filter"
import { client } from "../page"
import Itemcardskeleton from "../components/itemcardskeleton"
import { gql, useQuery } from "@apollo/client"
import { useState } from "react"

type itemtype = {
    _id: string
    title: string
    spec: string
    rating: number
    price: number
    image: string

}

export default function Search (){

    
    const router = useRouter()
    const searchParams = useSearchParams()

    const param = searchParams.get('param')
    const key = param?.toString()

    const gohome = () =>{
        router.push('/')
    }

    console.log(key)

    const [data, setdata] = useState([])
    const [box, openbox] = useState(false)
//@ts-ignore
    const searchbox = (e)=> {
        if(e.target.value === ""){
            openbox(false)
        }
        else{
            openbox(true)
        }



    }

client.query({
    query: gql`
{
    getbycategory(category:"${param}"){
    _id    
    title
    spec
    rating
    price
    image
    }
}
`
}).then((result)=>{setdata(result.data.getbycategory)});


    if(!param){
        return(

            <div className=" min-h-[800px] flex flex-col justify-center items-center"> 
             <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-30 border-b sm1:fixed sm1:z-30">
               <h1 className=" font-sans text-[27px] cursor-pointer sm1:hidden relative right-[100px]" onClick={gohome}>Electricart</h1>
            <div className=" flex flex-row items-start justify-center cursor-pointer  relative right-6 sm1:right-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </div>
             <input onChange={searchbox} type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:w-80 " autoFocus = {true} />

    
            </nav>
            {/* searchbox */}

            <div className={box?"h-[200px] shadow-lg w-[384px] bg-[white] fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
            </div>

             <h1 className="text-[19px]">Search Results will appear here.</h1> 

            </div>
        )
    }


    if(data.length === 0){
        return(
            <div className=" min-h-[900px] flex flex-col justify-center items-center"> 
            <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-30 border-b sm1:fixed sm1:z-30">
               <h1 className=" font-sans text-[27px] cursor-pointer sm1:hidden relative right-[100px]" onClick={gohome}>Electricart</h1>
            <div className=" flex flex-row items-start justify-center cursor-pointer  relative right-6 sm1:right-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </div>
             <input onChange={searchbox} type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:w-80 " autoFocus = {true} />
    
            </nav>
    
             {/* searchbox */}

             <div className={box?"h-[200px] w-[384px] shadow-lg bg-[white] fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
            </div>
            
    
            
    
            
    
            <div className="flex flex-row justify-center items-start min-h-[900px] w-[100%] relative top-[100px] ">
                <Filter></Filter>
                <div className=" flex flex-row justify-start items-center min-h-[400px] mb-[130px] w-[1350px] bg-[white] flex-wrap ml-[150px] sm1:ml-[0px] sm1:w-[350px]">

              <Itemcardskeleton></Itemcardskeleton>
              <Itemcardskeleton></Itemcardskeleton>
              <Itemcardskeleton></Itemcardskeleton>
              <Itemcardskeleton></Itemcardskeleton>
           
               
                </div>
            </div>
    
            </div>

        )
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
         <input onChange={searchbox} type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:w-80 " autoFocus = {true} />

        </nav>

         {/* searchbox */}

         <div className={box?"h-[200px] shadow-lg w-[384px] bg-[white] fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
            </div>
        

        {/* <h1 className="text-[19px]">Search Results will appear here.</h1> */}

        

        <div className="flex flex-row justify-center items-start min-h-[900px] w-[100%] relative top-[100px] ">
            <Filter></Filter>
            <div className=" flex flex-row justify-start items-center min-h-[400px] mb-[130px] w-[1350px] bg-[white] flex-wrap ml-[150px] sm1:ml-[0px] sm1:w-[350px]">
            {data.map((item: itemtype, index:number)=>(
                <Itemcard key={index} id={item._id} title={item.title} spec={item.spec} rating={item.rating} price={item.price} image={item.image}></Itemcard>
            ))} 
          
          {/* <Itemcardskeleton></Itemcardskeleton>
          <Itemcardskeleton></Itemcardskeleton>
          <Itemcardskeleton></Itemcardskeleton>
          <Itemcardskeleton></Itemcardskeleton> */}
       
           
            </div>
        </div>

        </div>
    )
}