"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import axios from "axios"
import Cookies from "js-cookie";

export default function Notify (){

    const id = Cookies.get('uid');

    type notifytype = {
        uid: string,
        msg: {oid: string, not: string}
    }

    const [data,setdata] = useState<notifytype[]>([])


    const fetchnotify = async ()=>{
        const nodata  = await (await axios.post('https://electricart-product-server.vercel.app/api/getnotify', {uid: id})).data;

        if(nodata){
            setdata(nodata)
        }

    }

    const router = useRouter()

    const movehome = () => {
        router.push('/')
    }

    useEffect(()=>{
        fetchnotify()
    })

    return (
        <div className="min-h-[800px] mt-[50px]  sm1:min-h-[700px] w-[100%] bg-[#ebebeb] flex justify-start items-center flex-col">


            <div className={data.length === 0?"mt-[70px] flex justify-center items-center flex-col h-[250px] w-[350px] sm1:w-[320px]":"hidden"}>
                <h1 className="text-[23px]">No Notification Yet !</h1>
                <button onClick={movehome} className="h-[35px] w-[150px] bg-[#4FB0D6] mt-4 text-[white] border-none  select-none cursor-pointer">Continue Shopping</button>
            </div>


           {data.map((item:notifytype, index:number)=>(
             <div key={index} className="min-h-[80px] w-[550px] sm1:w-[330px] mt-4 bg-[#bbbbbbb9] rounded-[10px] shadow-lg flex justify-center items-start flex-col ">
             <h2 className="ml-2 text-[purple]">Order Id:{item.msg.oid}</h2>
             <h2 className="ml-2">{item.msg.not}</h2>
             </div>
           ))}

        
        </div>
    )
}