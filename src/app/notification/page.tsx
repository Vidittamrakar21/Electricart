"use client"
import { useRouter } from "next/navigation"

export default function Notify (){

    const router = useRouter()

    const movehome = () => {
        router.push('/')
    }

    return (
        <div className="min-h-[800px] mt-[50px]  sm1:min-h-[700px] w-[100%] bg-[#ebebeb] flex justify-start items-center flex-col">


            {/* <div className="mt-[70px] flex justify-center items-center flex-col h-[250px] w-[350px] sm1:w-[320px]">
                <h1 className="text-[23px]">No Notification Yet !</h1>
                <button onClick={movehome} className="h-[35px] w-[150px] bg-[#4FB0D6] mt-4 text-[white] border-none  select-none cursor-pointer">Continue Shopping</button>
            </div> */}


            <div className="min-h-[80px] w-[550px] sm1:w-[330px] mt-4 bg-[#bbbbbbb9] rounded-[10px] shadow-lg flex justify-center items-start flex-col ">
                <h2 className="ml-2 text-[purple]">Order Id: fdsdfs24fw34243f35</h2>
                <h2 className="ml-2">Your Order is Confirmed and will be delivered by 12 April, Friday</h2>
            </div>

        
        </div>
    )
}