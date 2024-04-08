import {useRouter} from 'next/navigation'
import { client } from '@/app/client';
import { useState ,useEffect } from 'react';
import { gql } from '@apollo/client';
import Recentskeleton from './recentskeleton';

type propstype = {
    id: string
}

export default function Recentcard (props: propstype){
    interface producttype {
        title: string,
        spec: string,
        originalprice: number,
        price: number,
        category: string,
        brand: string,
        delivery: string,
        seller: string,
        description: string,
        rating: number,
        reviews: [],
        image: string,
    }

    
    const [data, setdata] = useState<producttype>()
    const [fetched, setfetch] = useState<boolean>(false)

   const fetchdata = async ()=>{
    if(!fetched){
        await client.query({
            query: gql`
        {
            
            getbyid(id:"${props.id}"){
                title
                spec
                originalprice
                price
                category
                brand
                delivery
                seller
                description
                rating
                reviews {
                  rate
                  review
                }
                image
            }
        }
        `
        }).then((result)=>{ setdata(result.data.getbyid); setfetch(true)});
        
    }
   }
    const router = useRouter()

    const handleclick = () => {
        router.push(`/products/product?id=${props.id}`)
    }

    const truncateTitle = (title:string | undefined, maxLength:number) => {
      if(title){
        if (title.length <= maxLength) {
            return title;
          } else {
            const words = title.split(' ');
            const truncatedTitle = words.slice(0, maxLength).join(' ');
            return truncatedTitle + '...';
          }
      }
      };

      useEffect(()=>{
        fetchdata()
      })

      //@ts-ignore
      if(!data){
       return(
        <Recentskeleton></Recentskeleton>
       )
      }

    return(
        <>
        <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[250px] sm1:w-[150px]  sm1:ml-3 sm1:mt-0">
            <div className="h-[200px] w-[220px] sm1:h-[140px] sm1:w-[140px] flex items-center justify-center bg-[white]">
                <img className="min-h-[50%] max-h-[100%] min-w-[50%] max-w-[100%]" src={data?.image} alt="" />
            </div>
            
            <h2 className=" mt-3 text-[#070707] ml-1 sm1:text-[14px]" >{truncateTitle(data?.title,5)}</h2>
            <h3 className="mt-2 ml-1">&#8377; {data?.price}</h3>
        </div>
        
        </>
    )
}