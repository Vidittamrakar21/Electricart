import {  useEffect, useState } from "react"
import Card from "./cards"
import Cardskeleton from "./cardskeleton"
import { gql, useQuery } from "@apollo/client"

const getlist = gql`
{
    getlistitem{
        item 
        price 
        image
    }
}
`

type productype = {
    item : string
    price: string
    image: string
}

export default function Container () {
    const {loading,data,error} = useQuery(getlist);
    const [listdata, setdata] = useState([]);
    const [load , setload] = useState(false);



    if(loading || error){

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

    if(error){
        console.log("er",error)
    }

    if(data && !load){
        setdata(data.getlistitem);
        setload(true)

      

    }

    return(
        <div className=" min-h-[400px] w-[1600px] bg-[white] mt-8 flex flex-row flex-wrap justify-center items-center mb-8 select-none sm1:w-[340px]">
          

            {listdata.length>0?listdata.map((product: productype, index:number)=>(
                <Card key={index} item={product.item} price ={product.price}  image={product.image}></Card>
            )):<></>}

        

        </div>
    )

                 
}