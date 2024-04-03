"use client"
import {useRouter, useSearchParams} from 'next/navigation'


export default function Confirmed (){

    const fulldate = new Date(Date.now());
    const date = fulldate.getDate();
    const day = fulldate.getDay();
    const month = fulldate.getMonth();
  
    const router = useRouter();
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
   

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

    const movetoorder = ()=>{
        router.push('/order')
    }

    const movetohome = ()=>{
        router.push('/')
    }

    return(
        <div className="h-[800px] w-[100%] bg-[#9b9a9a] flex justify-center items-center flex-col sm1:h-[700px] shadow-lg">
            <div className="h-[500px] w-[380px] sm1:w-[320px] bg-[white] flex justify-center items-center flex-col">
                <div className="h-[200px] w-[200px] sm1:h-[160px] sm1:w-[160px]">
                    <img className="h-[100%] w-[100%]" src="/images/tick.webp" alt="" />
                </div>
                <h1 className="text-[20px]">Your Order is Confirmed !</h1>
                <h3 className="mt-2 text-[green]">Will be {getdeliverydate(day+5,month,date+5)}</h3>
                <h3 className="mt-2 text-[green]">Order Id: {id}</h3>
                <div className="h-[50px] w-[380px] sm1:w-[320px] mt-5 flex justify-center items-center cursor-pointer select-none">
                   <button onClick={movetoorder} className="h-[35px] w-[120px]  mt-5 bg-[#FB641B] text-[white] text-[15px]">Check Order</button>
                   <button onClick={movetohome}  className="h-[35px] w-[120px] ml-5 mt-5 bg-[white] text-[black] border border-[#acacac] text-[15px]">Ok</button>
                   </div>

            </div>

    </div>
    )
}