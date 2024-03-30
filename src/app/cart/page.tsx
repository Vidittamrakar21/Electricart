"use client"

import { useEffect, useState } from "react"
import {useRouter} from 'next/navigation'
import { gql } from "@apollo/client"
import { gqclient } from "../sign/page"
import Cookies from "js-cookie"
import Cardcart from "@/components/cartcard"

const finduser = gql`
mutation Mutation($uid: String) {
    findoneuser(uid: $uid) {
      
      cart
      
    }
  }

`

export default function Cart() {


    

    

    const router = useRouter()
    const [data, setdata] = useState([])

    const fetchcart = async ()=>{

        const id = Cookies.get('uid');

        if(id){
            gqclient.mutate({
                mutation: finduser,
                variables: {
                    uid: id
                }
            }).then((res)=>{

                setdata(res.data.findoneuser.cart)
            })
        }
        
    }

    useEffect(()=>{
        fetchcart()

    },[])

    const movepayment = () => {
        router.push('/checkout')
    }


    const [itemcount , setcount ] = useState(1);

    const incrementcount = () => {
        setcount(item => item + 1)
    }

    const decrementcount = () => {
        if(itemcount > 1){
            setcount(item => item - 1)

        }
    }

    return (
        <div className="min-h-[650px] flex flex-col justify-start items-center select-none">

            {/* use when cart is empty  */}

            {data.length === 0 ? <div className="h-[400px] w-[1100px] bg-[white] mt-[85px] flex flex-col justify-center items-center sm1:w-[340px]">
                <div className="h-[250px] w-[250px] ">
                    <img src="/images/cart.png" className="h-[100%] w-[100%]" alt="" />
                </div>
                <h1 className="text-[18px]">Your cart is empty!</h1>
                <button className="h-[35px] w-[180px] bg-[#4fb0d6] text-[white] mt-5 cursor-pointer">Shop Now</button>
            </div> : <></>}



            <div className={data.length>0?"min-h-[700px] w-[1300px] mt-[80px] flex flex-row justify-evenly items-start mb-[50px] select-none sm1:flex-col sm1:w-[350px] sm1:justify-center sm1:items-center sm1:mt-[25px]": "hidden"}>
                <div className="w-[800px] min-h-[270px] flex flex-col justify-center items-start bg-[white] mr-[350px] sm1:w-[340px] sm1:mr-[0px]">

                    {/* cart item */}

                   {data.map((item: string, index: number)=>(
                     <Cardcart key={index} id={item}></Cardcart>
                   ))}


                  

                </div>

                {/* price detail part */}


               {data.length > 0 ?  <div className="w-[400px] min-h-[340px] bg-[white]  fixed top-[80px] right-[300px] flex flex-col justify-start items-center sm1:relative sm1:w-[340px] sm1:right-[0px] sm1:top-[20px]">

                     <div className="flex flex-row justify-start items-center h-[45px] w-[400px] border-b-[1px] border-b-[#aaaaaacb] sm1:w-[340px]">
                     <h1 className="text-[gray] font-[500] ml-2">PRICE DETAILS</h1>

                     </div>

                     <div className="flex flex-row  justify-between items-center h-[45px] w-[380px] sm1:w-[320px] ">
                     <h2 >Price (1 item)</h2>
                     <h2>&#8377;1,06,580</h2>

                     </div>

                     <div className="flex flex-row justify-between items-center h-[45px] w-[380px]  sm1:w-[320px]">
                     <h2>Discount</h2>
                     <h2 className="text-[green]">-&#8377;8580</h2>

                     </div>

                     <div className="flex flex-row justify-between items-center h-[45px] w-[380px]  sm1:w-[320px]">
                     <h2>Delivery Charges</h2>
                     <div className="flex flex-row justify-center items-center">
                     <h2 className="line-through  text-[gray]">&#8377;120</h2>
                     <h2 className="text-[green]">Free</h2>
                     </div>

                     </div>

                     <div className="flex flex-row justify-between items-center h-[45px] w-[380px] sm1:w-[320px]">
                     <h2 className="text-[18px] font-[500]">Total Amount</h2>
                     <h2 className="text-[18px] font-[500]">&#8377;98,000</h2>

                     </div>

                     <div className="flex flex-row justify-start items-center h-[45px] w-[380px] sm1:w-[320px]">
                     <h1 className="text-[green]">You will save &#8377;8580 on this order </h1>

                     </div>


                    <button onClick={movepayment} className="h-[40px] w-[180px] bg-[#eb6a2e] text-[white] relative top-[10px] cursor-pointer left-[0px]" >Place Order</button>
                </div> : <></>}
            </div>
        </div>
    )
}