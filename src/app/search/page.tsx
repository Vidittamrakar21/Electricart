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

    let param = searchParams.get('param')
    const key = param?.toString()

    const gohome = () =>{
        router.push('/')
    }

    console.log(key)

    const [data, setdata] = useState([])
    const [box, openbox] = useState(false)
    const [opt, setopt] = useState([""])
//@ts-ignore
    const searchbox = (e)=> {
        if(e.target.value === ""){
            openbox(false)
           

        }
        else{
            openbox(true)
            if(e.target.value === "s" || e.target.value === "S" ){
                setopt(["Smartphone", "smartwatch", "Speaker" ])
            }
            else if(e.target.value === "smart" || e.target.value === "Smart" ){
                setopt(["Smartphone", "Smartwatch" ])
            }

            else if(e.target.value === "spe" || e.target.value === "Spe" ){
                setopt(["Speaker"])
            }

            else if(e.target.value === "speaker" || e.target.value === "Speaker" ){
                setopt(["Speaker"])
            }

            else if(e.target.value === "mo" || e.target.value === "Mo" || e.target.value === "m" ){
                setopt(["Mobile","Mouse"])
            }

            else if(e.target.value === "mobile" || e.target.value === "mob" ){
                setopt(["Mobile"])
            }

            else if(e.target.value === "mouse" || e.target.value === "mou" ){
                setopt(["Mouse"])
            }

            else if( e.target.value === "w" || e.target.value === "W" ){
                setopt(["Watch", "washing machine"])
            }
            else if(e.target.value === "wat" || e.target.value === "watch" ){
                setopt(["watch"])
            }
            else if(e.target.value === "wash" || e.target.value === "washing machine"  ){
                setopt(["Washing Machine"])
            }

            else if(e.target.value === "h" || e.target.value === "head" || e.target.value === "headphone" || e.target.value === "H" ){
                setopt(["Headphone"])
            }

            else if(e.target.value === "l" || e.target.value === "lap" || e.target.value === "laptop" || e.target.value === "L" ){
                setopt(["Laptop"])
            }

            else if(e.target.value === "t" || e.target.value === "T"  ){
                setopt(["TV","Trimmer"])
            }
            else if(e.target.value === "tv" || e.target.value === "TV" || e.target.value === "screen" || e.target.value === "television" ){
                setopt(["TV"])
            }

            else if(e.target.value === "f" || e.target.value === "F" || e.target.value === "fri" || e.target.value === "fridge" || e.target.value === "Fridge" ){
                setopt(["Fridge"])
            }

            else if(e.target.value === "a" || e.target.value === "air" || e.target.value === "ac" || e.target.value === "AC" || e.target.value === "Air Conditioner" ){
                setopt(["Air Conditioner"])
            }

            else if(e.target.value === "k" || e.target.value === "K" || e.target.value === "key" || e.target.value === "keyboard" || e.target.value === "Keyboard" ){
                setopt(["Keyboard"])
            }

            else if( e.target.value === "tri" || e.target.value === "trimmer" || e.target.value === "Trimmer" ){
                setopt(["Trimmer"])
            }
            else{
                setopt([])
            }
        }



    }

    const handlesearchbox = (x:string) => {
        setopt([])
        openbox(false)
        if(x === 'Air Conditioner')
        {
            router.push(`/search?param=AC`)
        }
        else if(x === 'Smartphone'){
            router.push(`/search?param=Mobile`)
        }

        else if(x === 'TV'){
            router.push(`/search?param=Tv`)
        }

        else if(x === 'Watch'){
            router.push(`/search?param=Smart Watch`)
        }
        else{
            
            router.push(`/search?param=${x}`)
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

            <div className={box?"min-h-[100px] shadow-lg w-[384px] bg-[white] flex flex-col justify-start items-start fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
            {opt.map((item:string, index:number)=>(
                 <li onClick={()=>{handlesearchbox(item)}} key={index} className="text-[black] text-[18px] list-none select-none cursor-pointer ml-2 mt-2">{item}</li>
            ))}

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

             <div className={box?"min-h-[100px] w-[384px] shadow-lg bg-[white] flex flex-col justify-start items-center fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
             
             {opt.map((item:string, index:number)=>(
                 <li onClick={()=>{handlesearchbox(item)}} key={index} className="text-[black] text-[18px] list-none select-none cursor-pointer ml-2 mt-2">{item}</li>
            ))}
               
                
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

         <div className={box?"min-h-[100px] shadow-lg w-[384px] bg-[white] fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
         {opt.map((item:string, index:number)=>(
                 <li onClick={()=>{handlesearchbox(item)}} key={index} className="text-[black] text-[18px] list-none select-none cursor-pointer ml-2 mt-2">{item}</li>
            ))}
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