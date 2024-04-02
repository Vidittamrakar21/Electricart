"use client"

import { useEffect, useState , CSSProperties} from "react"
import {useRouter} from 'next/navigation'
import { gql } from "@apollo/client"
import { gqclient } from "../sign/page"
import Cookies from "js-cookie"
import Cardcart from "@/components/cartcard"
import ClipLoader from "react-spinners/ClipLoader";


const finduser = gql`
mutation Mutation($uid: String) {
    findoneuser(uid: $uid) {
      
      cart
      
    }
  }

`

const removecart = gql`

mutation Mutation($uid: String, $pid: String) {

    rmcart(uid: $uid, pid: $pid)
  }


`

const override: CSSProperties = {
    position: "absolute",
    top: "290px"
  };
export default function Cart() {


    

    const id = Cookies.get('uid');

    const router = useRouter()
    const [data, setdata] = useState([])
    const [loading, isloading] = useState(false)

    const fetchcart = async (x: number)=>{
        isloading(true)
       

        if(id){
          await  gqclient.mutate({
                mutation: finduser,
                variables: {
                    uid: id
                }
            }).then((res)=>{

                if(res.data.findoneuser.cart){
                    setdata(res.data.findoneuser.cart)
                    isloading(false)
                    Cookies.set('cart',(res.data.findoneuser.cart).length )
                }

                else{
                    isloading(true)
                }

               
                console.log("fetch worked")
            })
        }
        
    }

    const removeitem = async (x: string) => {
        isloading(true)
        if(id){
           await gqclient.mutate({
                mutation: removecart,
                variables: {
                    uid: id,
                    pid: x
                }
            }).then((res)=> {
                if(res.data.rmcart){
                    isloading(false)
                    setdata([])
                    fetchcart(0)
                  
                    console.log(x)
                }
            })
        }
    }


   

    const movepayment = () => {
        router.push('/checkout')
    }

    const movehome = () => {
        router.push('/')
    }



    const [itemprice , setprice ] = useState<number[]>([]);
    const [discount , setdiscount ] = useState<number[]>([]);
    const [worked1 , isworking1] = useState(false)
    const [worked2 , isworking2] = useState(false)
    const settingprice = (x: number) => {
        
           if(!worked1){
            const index  = itemprice.indexOf(x);
            if(index === -1 && x !== undefined){

                itemprice.push(x)
                setprice(itemprice)
                console.log(itemprice)
                isworking1(true)
                if(itemprice.length >= data.length){
                    findallamount()
                }
            }
           }

       
    }

    const discountprice = async (x: number) => {
        if(!worked2){
            const index  = discount.indexOf(x);
            if(index === -1 && x !== undefined){

                discount.push(x)
                setdiscount(discount)
                console.log(discount)
                isworking2(true)
                if(data.length === discount.length){
                    findalldiscount()
                }
               
            }
           }
    }

    const [pricing , setpricing] = useState(0)
    const [discounting , setdiscounting] = useState(0)


    function findallamount  (){

       if(itemprice.length>0){
        itemprice.forEach((item)=>{
           setpricing((x)=> x + item)
        })
       }
    }

    function findalldiscount (){

       if(discount.length>0){
        discount.forEach((item)=>{
           setdiscounting((x)=> x + item)
        })
       }
    }


    useEffect(()=>{
        fetchcart(0)
        // findallamount()

    },[])

    return (
        <div className="min-h-[650px] flex flex-col justify-start items-center select-none">

            {/* use when cart is empty  */}

            {data.length === 0 && loading === false ? <div className="h-[400px] w-[1100px] bg-[white] mt-[85px] flex flex-col justify-center items-center sm1:w-[340px]">
                <div className="h-[250px] w-[250px] ">
                    <img src="/images/cart.png" className="h-[100%] w-[100%]" alt="" />
                </div>
                <h1 className="text-[18px]">Your cart is empty!</h1>
                <button onClick={movehome} className="h-[35px] w-[180px] bg-[#4fb0d6] text-[white] mt-5 cursor-pointer">Shop Now</button>
            </div> : <></>}


            <ClipLoader color="#36d7b7" loading={loading} size={40} cssOverride={override}/>


            <div className={data.length>0?"min-h-[700px] w-[1300px] mt-[80px] flex flex-row justify-evenly items-start mb-[50px] select-none sm1:flex-col sm1:w-[350px] sm1:justify-center sm1:items-center sm1:mt-[25px]": "hidden"}>
                <div className="w-[800px] min-h-[270px] flex flex-col justify-center items-start bg-[white] mr-[350px] sm1:w-[340px] sm1:mr-[0px]">

                    {/* cart item */}

                   {data.map((item: string, index: number)=>(
                     <Cardcart key={index} id={item} rmitem = {removeitem} fetchprice={settingprice} fetchdiscount= {discountprice}></Cardcart>
                   ))}


                  

                </div>

                {/* price detail part */}


               {data.length > 0 ?  <div className="w-[400px] min-h-[340px] bg-[white]  fixed top-[80px] right-[300px] flex flex-col justify-start items-center sm1:relative sm1:w-[340px] sm1:right-[0px] sm1:top-[20px]">

                     <div className="flex flex-row justify-start items-center h-[45px] w-[400px] border-b-[1px] border-b-[#aaaaaacb] sm1:w-[340px]">
                     <h1 className="text-[gray] font-[500] ml-2">PRICE DETAILS</h1>

                     </div>

                     <div className="flex flex-row  justify-between items-center h-[45px] w-[380px] sm1:w-[320px] ">
                     <h2 >Price ({data.length} item)</h2>
                     <h2>&#8377;{pricing}</h2>

                     </div>

                     <div className="flex flex-row justify-between items-center h-[45px] w-[380px]  sm1:w-[320px]">
                     <h2>Discount</h2>
                     <h2 className="text-[green]">-&#8377;{discounting}</h2>

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
                     <h2 className="text-[18px] font-[500]">&#8377;{pricing-discounting}</h2>

                     </div>

                     <div className="flex flex-row justify-start items-center h-[45px] w-[380px] sm1:w-[320px]">
                     <h1 className="text-[green]">You will save &#8377;{discounting} on this order </h1>

                     </div>


                    <button onClick={movepayment} className="h-[40px] w-[180px] bg-[#eb6a2e] text-[white] relative top-[10px] cursor-pointer left-[0px]" >Place Order</button>
                </div> : <></>}
            </div>
        </div>
    )
}