import {  useEffect, useState } from "react"
import Card from "./cards"
import Cardskeleton from "./cardskeleton"
import { gql, useQuery } from "@apollo/client"
import { client } from "../app/client"



type productype = {
    item : string
    price: string
    image: string
}

export default function Container () {
 
    const [listdata, setdata] = useState([]);
    const [load , setload] = useState(false);

    

    const [fetched, setfetch] = useState<boolean>(false)

   const fetchdata = async ()=>{
    if(!fetched){
        client.query({
            query: gql`
        {
            getlistitem{
                item 
                price 
                image
            }
        }
        `
        }).then((result)=>{setdata(result.data.getlistitem); setfetch(true);});
        
    }
   }

   useEffect(()=>{
    fetchdata()
   })


    if(listdata.length=== 0){

       return(
        <div className=" min-h-[400px] w-[1600px] bg-[white] mt-8 flex flex-row flex-wrap justify-center items-center mb-8 select-none sm1:w-[340px]">
         
        <Cardskeleton></Cardskeleton>
        <Cardskeleton></Cardskeleton>
        <Cardskeleton></Cardskeleton>
        <Cardskeleton></Cardskeleton>
        <Cardskeleton></Cardskeleton>
        <Cardskeleton></Cardskeleton>

        </div>
       )

    }


    return(
        <div className=" min-h-[400px] w-[1600px] bg-[white] mt-8 flex flex-row flex-wrap justify-center items-center mb-8 select-none sm1:w-[340px]">
          

            {listdata.length>0?listdata.map((product: productype, index:number)=>(
               <>
                <Card key={index} item={product.item} price ={product.price}  image={product.image}></Card>
                <div className={index === 5?"h-[250px] w-[1470px] ml-2 rounded-[10px] mt-[0px] sm1:w-[320px] sm1:h-[160px] sm1:ml-0":"hidden"}>
                <img className="h-[100%] w-[100%] rounded-[10px]" src="https://t4.ftcdn.net/jpg/03/32/95/71/360_F_332957101_NV588R5pQUyusBU22Wvzqqhq3E7pOPwb.jpg" alt="" />
                </div>
               
               </>
            )):<></>}

        

        </div>
    )

                 
}