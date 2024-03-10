"use client"
import {useRouter, useSearchParams} from 'next/navigation'
import { useState } from 'react'
import {client} from "../page"
import { gql} from "@apollo/client"




export default function Product () {

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


    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const movepayment = () => {
        router.push('/checkout')
    }
    const movecart = () => {
        router.push('/cart')
    }
    const movehome = () => {
        router.push('/')
    }

    const [box , isbox] = useState<Boolean>(false)

    const handlebox = () =>{
        isbox(true)
    }
    //@ts-ignore
    const [data, setdata] = useState<producttype>("")

    client.query({
        query: gql`
    {
        getbyid(id:"${id}"){
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
    }).then((result)=>{console.log(result); setdata(result.data.getbyid)});

    const fulldate = new Date(Date.now());
    const date = fulldate.getDate();
    const day = fulldate.getDay();
    const month = fulldate.getMonth();
    console.log("date", day ,date , month)

   

    const getday = (x:number) => {
        if(x=== 0 || x=== 7){
            return "Sunday"
        }
        else if(x=== 1|| x=== 8){
            return "Monday"
        }
        else if(x=== 2|| x=== 9){
            return "Tuesday"
        }
        else if(x=== 3|| x=== 10){
            return "Wednesday"
        }
        else if(x=== 4|| x=== 11){
            return "Thursday"
        }
        else if(x=== 5|| x=== 12){
            return "Friday"
        }
        else if(x=== 6|| x=== 13){
            return "Saturday"
        }
    }

    const getmonth  = (x:number)=>{
        if(x === 0){
            return "January"
        }
        else if(x === 1){
            return "February"
        }
        else if(x === 2){
            return "March"
        }
        else if(x === 3){
            return "April"
        }
        else if(x === 4){
            return "May"
        }
        else if(x === 5){
            return "June"
        }
        else if(x === 6){
            return "July"
        }
        else if(x === 7){
            return "August"
        }
        else if(x === 8){
            return "September"
        }
        else if(x === 9){
            return "October"
        }
        else if(x === 10){
            return "November"
        }
        else if(x === 11){
            return "December"
        }
    }

    const getdeliverydate = (x:number, y:number, z:number) => {
        const day = getday(x)
        const month = getmonth(y)
        return `Delivered by ${z} ${month},${day}`
    }

    type reviewtype = {
        rate: number | null
        review: string | null
    }

    //@ts-ignore
    if(data === ""){
        return(
            <div className="animate-pulse min-h-[900px] flex justify-center items-start mt-[100px] select-none sm1:flex-col sm1:items-center sm1:mt-[70px]">
                <div className="h-[500px] w-[500px]  bg-[white] flex justify-center items-center flex-col fixed left-[280px] sm1:relative sm1:left-[0px] sm1:w-[340px] sm1:h-[400px]">
                    <div className="h-[400px] w-[400px] rounded-[10px] bg-slate-400 border mt-2  sm1:w-[300px] sm1:h-[300px] flex items-center justify-center ">
                        
                    </div>

                    <div className="h-[100px] w-[500px] flex justify-evenly items-center sm1:fixed sm1:bottom-0 sm1:w-[100%] sm1:left-0 sm1:right-0 sm1:z-10 sm1:h-[50px]">
                            <button onClick={handlebox} className="h-[50px] w-[190px] bg-[#f0a822] text-[white] sm1:w-[100%]">Add To Cart</button>
                            <button onClick={movepayment} className="h-[50px] w-[190px] bg-[#EB6A2E] text-[white] sm1:w-[100%]"> Buy Now</button>
                    </div>

                </div>

                <div className=" min-h-[600px] w-[900px] mb-[50px]  bg-[white] flex flex-col justify-start ml-[550px] sm1:w-[340px] sm1:ml-0">
                <div className=" mt-3 h-[20px] w-[800px] sm1:w-[300px] rounded-[10px] bg-slate-400 ml-1 " ></div>
               <h4 className="text-[15px] text-[#808080] font-[400] ml-1"></h4>
               <div className="w-[50px] h-[25px] bg-slate-400 text-[white] mt-2 ml-1 text-[15px] flex items-center justify-center rounded-[5px]">
                    
                </div>
                
                <div className=" mt-3 h-[20px] w-[50px] sm1:w-[90px] rounded-[10px] bg-slate-400 ml-1 " ></div>
                <div className=" mt-3 h-[500px] w-[800px] sm1:w-[320px] ml-2 rounded-[10px] bg-slate-400  " ></div>
               
               

          </div>
        </div>
        )
    }
 
    return (
        <div className="min-h-[900px] flex justify-center items-start mt-[100px] select-none sm1:flex-col sm1:items-center sm1:mt-[70px]">
                <div className="h-[500px] w-[500px]  bg-[white] flex justify-center items-center flex-col fixed left-[280px] sm1:relative sm1:left-[0px] sm1:w-[340px] sm1:h-[400px]">
                    <div className="h-[400px] w-[400px] border mt-2  sm1:w-[300px] sm1:h-[300px] flex items-center justify-center bg-[white]">
                        <img className="min-h-[50%] max-h-[100%] min-w-[50%] max-w-[100%]" src={data.image} alt="" />
                    </div>

                    <div className="h-[100px] w-[500px] flex justify-evenly items-center sm1:fixed sm1:bottom-0 sm1:w-[100%] sm1:left-0 sm1:right-0 sm1:z-10 sm1:h-[50px]">
                            <button onClick={handlebox} className="h-[50px] w-[190px] bg-[#f0a822] text-[white] sm1:w-[100%]">Add To Cart</button>
                            <button onClick={movepayment} className="h-[50px] w-[190px] bg-[#EB6A2E] text-[white] sm1:w-[100%]"> Buy Now</button>
                    </div>

                </div>

                <div className=" min-h-[600px] w-[900px] mb-[50px]  bg-[white] flex flex-col justify-start ml-[550px] sm1:w-[340px] sm1:ml-0">
                <h1 className=" mt-3 text-[black] ml-1 text-[19px]" >{data.title}</h1>
               <h4 className="text-[15px] text-[#808080] font-[400] ml-1">{data.spec}</h4>
               <div className="w-[50px] h-[25px] bg-[green] text-[white] mt-2 ml-1 text-[15px] flex items-center justify-center rounded-[5px]">
                    {data.rating} &#9733;
                </div>
                <h3 className="font-[600] ml-1  text-[22px] mt-4"> &#8377; {data.price} </h3>
                <h5 className=" line-through text-[14px] text-[gray] ml-2">&#8377; {data.originalprice}</h5>
                <h2 className="mt-2 ml-2">Available Offers</h2>

                <div className="flex flex-col h-[180px] w-[850px] border items-start justify-start  sm1:w-[340px] sm1:h-[280px]" >
                    <div className="flex flex-row w-[800px] items-start justify-start mt-4 sm1:w-[320px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px] sm1:w-[290px]">Bank Offer10% off on BOBCARD EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</h3>

                    </div>

                    <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px]  sm1:w-[290px]">Bank Offer10% off on Citi-branded Credit and Debit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C</h3>

                    </div>


                    <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px]  sm1:w-[290px]">Bank Offer10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</h3>

                    </div>


                    <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px]  sm1:w-[290px]">Special PriceGet extra 14% off (price inclusive of cashback/coupon)T&C</h3>

                    </div>


                </div>

                <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray"  viewBox="0 0 16 16">
               <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                 </svg>

                 <div className="flex flex-row justify-center items-center ml-2">
                    {data.delivery === "Free"? <><h2 className="text-[green] sm1:text-[13px]">Free Delivery</h2>
                    <h2 className="line-through sm1:text-[13px] text-[gray]">&#8377;90</h2></>: <h2 className=" sm1:text-[13px] text-[gray]">&#8377; {data.delivery}</h2> }
                    <h2 className="font-[500] ml-2 sm1:text-[13px]">{getdeliverydate(day+5,month,date+5)}</h2>
                    </div>

                </div>

                <div className="flex flex-row items-center justify-start w-[800px] sm1:w-[320px] h-[30px] mt-4 ml-2">
                        <h2 className="text-[gray]">Seller</h2>
                        <h1 className="text-[blue] ml-3">{data.seller}</h1>

                </div>
                
                <div className="mb-5 flex flex-row items-start justify-start w-[800px] sm1:w-[320px] min-h-[30px] mt-4 ml-2">
                        <h2 className="text-[gray]">Description</h2>
                        <h1 className=" ml-3 text-[14px]">{data.description? data.description: "NA"}</h1>

                </div>

                <h1 className={(data.reviews).length > 1 ? "text-[22px] font-[500] mt-4 ml-4": "hidden"}>Rating And Reviews</h1>

                <div className={(data.reviews).length>1?" mb-5 flex flex-col items-start justify-start w-[800px] sm1:w-[320px] min-h-[90px] mt-4 ml-2": "hidden"}>
                       {(data.reviews).length>1? (data.reviews).map((item: reviewtype, index: number)=>(
                             <div className="flex flex-col items-start justify-start w-[800px] sm1:w-[340px] min-h-[50px] mt-4" >
                             <div className="w-[40px] h-[20px] bg-[green] text-[white] mt-2 ml-1 text-[12px] flex items-center justify-center rounded-[5px]">
                                   {item.rate} &#9733;
                              </div>
                                 <h1 className=" ml-2 text-[14px] sm1:mt-2">
                                 {item.review}
                                 </h1>
                             </div>
                       )): <></>}


                        
                </div>



                </div>

                <div className={box?"fixed top-0 flex justify-center items-center left-0 right-0 bottom-0 bg-[#3b3b3b7a]":"hidden"}>
                <div className="h-[120px] w-[400px] sm1:w-[340px] flex flex-col justify-start items-start shadow-xl rounded-[8px] bg-[white] ">
                   
                   <h1 className="text-[16px] ml-[60px] mt-5 font-[500]">Item is added to your cart !</h1>
                   <div className="h-[50px] w-[380px] sm1:w-[320px] flex justify-center items-center">
                   <button onClick={movecart} className="h-[35px] w-[120px] ml-5 mt-5 bg-[#FB641B] text-[white] text-[15px]">Go To Cart</button>
                   <button onClick={movehome} className="h-[35px] w-[120px] ml-5 mt-5 bg-[white] text-[black] border border-[#acacac] text-[15px]">Keep Shopping</button>
                   </div>
               </div>
                </div>
        </div>
    )
}