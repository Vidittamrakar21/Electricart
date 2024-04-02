import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "@/app/client";
import Cookies from "js-cookie";
import { gqclient } from "@/app/sign/page";
type propstype = {
    id: string
    rmitem: (x: string) => void
    fetchprice: (x: number) => void
    fetchdiscount: (x: number) => void
}

const removecart = gql`

mutation Mutation($uid: String, $pid: String) {

    rmcart(uid: $uid, pid: $pid)
  }


`

export default function Cardcart(props:propstype){

    const id = Cookies.get('uid');

    
    

    interface producttype {
        title: string,
        spec: string,
        originalprice: number | undefined,
        price: number | undefined,
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



    client.query({
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
    }).then((result)=>{ 
       if(data === undefined){
        setdata(result.data.getbyid) ;  
        //@ts-ignore
        setprice((result.data.getbyid).price)
        props.fetchprice((result.data.getbyid).originalprice)
        props.fetchdiscount(((result.data.getbyid).originalprice) - ((result.data.getbyid).price))
       }
    });
    

    const price = data?.price
    const originalprice = data?.originalprice
    //@ts-ignore
    const off = Math.floor((((originalprice)- (price))/(originalprice))*100)
    
    
    
    
    const [itemcount , setcount ] = useState(1);
    const [itemprice , setprice ] = useState(0);
    //@ts-ignore
    
    const incrementcount = () => {
        setcount(item => item + 1)
        //@ts-ignore
        setprice(data?.price * (itemcount+1))
        //@ts-ignore
        props.fetchprice(data?.originalprice)
    
    }

    const decrementcount = () => {
        if(itemcount > 1){
            setcount(item => item - 1) 
            //@ts-ignore
            setprice(itemprice - (data?.price))

        }
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


    const removeitem = async () => {
        // if(id){
        //    await gqclient.mutate({
        //         mutation: removecart,
        //         variables: {
        //             uid: id,
        //             pid: props.id
        //         }
        //     }).then((res)=> {
        //         if(res.data.rmcart){
        //             // window.location.reload()
        //             props.rmitem("")
                    
                   
        //         }
        //     })

         props.rmitem(props.id)

        console.log(props.id)
    
    }

    useEffect(()=>{
        //@ts-ignore
        props.fetchprice(data?.originalprice)

    },[])
     

    return(
        <>
         <div className="h-[220px] w-[780px] mt-[34px] bg-[white] flex flex-row justify-center items-center border sm1:w-[340px]">
                     <div className="h-[150px] w-[150px] sm1:h-[100px] sm1:w-[100px] flex items-center justify-center bg-[white]">
                         <img className="min-h-[50%] max-h-[100%] min-w-[50%] max-w-[100%]" src={data?.image} alt="" />
                     </div>
                     <div className="h-[150px] w-[600px] flex flex-col justify-center items-start ml-4 sm1:w-[200px] sm1:h-[100]">
                        <div className="flex flex-row justify-center items-center"> 
                         <h2 className="sm1:text-[13px]">{truncateTitle(data?.title, 5)}</h2>
                        <h2 className="text-[14px] ml-5 sm1:text-[12px]">Delivery by Monday Feb 19</h2>
                        </div>

                        <h3 className="text-[14px] text-[gray] sm1:text-[12px]">Seller: {data?.seller}</h3>

                        <div className="flex flex-row justify-center items-center">
                                 <h5 className=" line-through text-[14px] text-[gray]">&#8377; {data?.originalprice}</h5>
                                 <h2 className="text-[17px] font-[600] ml-2">&#8377; {itemprice}</h2>
                                 <h2 className="  text-[14px] ml-2 text-[green] sm1:text-[13px]">{off}% Off 1 coupon & 1 offer applied</h2>
                        </div>

                        <div className="flex flex-row justify-center items-center mt-5">
                                 <div className="flex flex-row justify-evenly w-[120px] items-center">
                                     <div className="h-[23px] w-[23px] border border-[#6d6c6c] rounded-[50%] flex flex-row justify-center items-center" onClick={decrementcount}>-</div>
                                     <div className="h-[25px] w-[40px]   border border-[#6d6c6c] flex flex-row justify-center items-center">{itemcount}</div>
                                     <div className="h-[23px] w-[23px] border border-[#6d6c6c] rounded-[50%] flex flex-row justify-center items-center" onClick={incrementcount}>+</div>
                                 </div>

                                 <h1 onClick={removeitem} className="text-[18px] text-[500] ml-2 cursor-pointer">Remove</h1>
                        </div>

                     </div>

             </div>
        
        </>
    )
} 