"use client"

import { useState , useEffect, CSSProperties} from "react"
import { gql } from "@apollo/client";
import { gqclient } from "../sign/page";
import { useRouter } from "next/navigation";
import Ordercard from "@/components/ordercard";
import Cookies from "js-cookie";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    position: "absolute",
    top: "290px"
  };

const findallorders = gql`
mutation Mutation($uid: String) {
    orderfind(uid: $uid) {
      _id  
      uid
      pid
      totalprice
      totalitems
      paymentmode
      paymentstatus
      orderstatus
      deliveryaddress
      image
    }
  }
`

type ordertype = {
    _id:string
    uid: string
    pid: [string]
    totalprice: number
    totalitems: number
    paymentmode: string
    paymentstatus: string
    orderstatus: string
    deliveryaddress: string
    image: string
}



export default function Order () {

    const [star1 , setstar1] = useState<boolean>(false);
    const [star2 , setstar2] = useState<boolean>(false);
    const [star3 , setstar3] = useState<boolean>(false);
    const [star4 , setstar4] = useState<boolean>(false);
    const [star5 , setstar5] = useState<boolean>(false);
    const [box , setbox] = useState<boolean>(false);
    const [loading , setoloading] = useState<boolean>(false);
    const [data , setdata] = useState([])
    const id  = Cookies.get('uid')
    const router = useRouter()


    const fetchdata = async () =>{
        setoloading(true)
        gqclient.mutate({
            mutation: findallorders,
            variables: {
                uid: id
            }
        }).then((res)=>{

            setdata(res.data. orderfind)
            setoloading(false)
        })
    }

    const handlestar1 = () => {
        setstar1(true)
        setstar2(false)
        setstar3(false)
        setstar4(false)
        setstar5(false)
    }
    const handlestar2 = () => {
        setstar1(true)
        setstar2(true)
        setstar3(false)
        setstar4(false)
        setstar5(false)
    }
    const handlestar3 = () => {
        setstar1(true)
        setstar2(true)
        setstar3(true)
        setstar4(false)
        setstar5(false)
    }
    const handlestar4 = () => {
        setstar1(true)
        setstar2(true)
        setstar3(true)
        setstar4(true)
        setstar5(false)
        
    }
    const handlestar5 = () => {
        setstar1(true)
        setstar2(true)
        setstar3(true)
        setstar4(true)
        setstar5(true)
    }

    const openmodal = () => {
        setbox(true)
    }

    const closemodal = () => {
        setbox(false)
    }

    const [open , isopen] = useState(false)

    const openlist = () => {
        isopen(true)
    }

    const movehome = ()=>{
        router.push('/')
    }
//@ts-ignore
    const [productdata, setprodata] = useState<ordertype>()
    const [proid, setproid] = useState<string[]>([])

    const handlepro = (x:ordertype) =>{
        //@ts-ignore
        setprodata(x)

        setproid(x.pid)

    }


    useEffect(()=>{
        fetchdata()
    },[])

    return (
        <div className="min-h-[700px] w-[100%] flex justify-center items-center flex-col">

             <div className={box?"fixed top-0 flex justify-center items-center left-0 right-0 bottom-0 bg-[#3b3b3b7a]":"hidden"}>
                <div className="h-[120px] sm1:h-[140px] w-[400px] sm1:w-[340px] flex flex-col justify-start items-start shadow-xl rounded-[8px] bg-[white] ">
                   
                   <h1 className="text-[16px] ml-[40px] mt-5 font-[500]">Are you sure , you want to cancel this order !</h1>
                   <div className="h-[50px] w-[380px] sm1:w-[320px] flex justify-center items-center">
                   <button onClick={closemodal} className="h-[35px] w-[120px] ml-5 mt-5 bg-[white] text-[black] border border-[#acacac] text-[15px]">No</button>
                   <button  className="h-[35px] w-[120px] ml-5 mt-5 bg-[#FB641B] text-[white] text-[15px]">Cancel Order</button>
                   </div>
               </div>
                </div>

          <ClipLoader color="#36d7b7" loading={loading} size={40} cssOverride={override}/>
                    {/* show when no order are there */}
                <div className={data.length=== 0 && !loading?"h-[400px]  w-[1100px] bg-[white] mt-[255px] sm1:mt-[180px] flex flex-col justify-center items-center sm1:w-[340px]":"hidden"}>
                <div className="h-[250px] w-[250px] ">
                    <img src="/images/box.png" className="h-[100%] w-[100%]" alt="" />
                </div>
                <h1 className="text-[18px]">Haven't received any order yet!</h1>
                <button onClick={movehome} className="h-[35px] w-[180px] bg-[#4fb0d6] text-[white] mt-5 cursor-pointer">Shop Now</button>
            </div>


                <div onClick={openlist} className={!open?"min-h-[300px] mt-[70px] sm1:mt-[70px] mb-[50px] w-[1000px] sm1:w-[340px] select-none flex flex-col justify-start items-center":"hidden"}>

                    {/* order component */}
                          {data.map((item:ordertype, index:number)=>(
                            <div key={index} onClick={()=>{handlepro(item)}} className="min-h-[120px] border w-[980px] sm1:w-[330px]   sm1:flex-col bg-[white] mt-[15px] shadow-lg flex flex-row justify-evenly items-center sm1:items-start sm1:justify-start sm1:h-[350px]"  >
                            <div className="h-[80px] w-[80px] sm1:h-[120px] sm1:w-[120px] sm1:mt-2 sm1:ml-2">
                             <img className="min-h-[50%] max-h-[100%] min-w-[50%] max-w-[100%]" src={item.image} alt="" />
                               </div>
  
                               <div className="flex flex-col justify-center items-start  h-[110px] sm1:ml-2 sm1:h-[50px]">
                               <h2 className=" mt-0 text-[black] ml-1" >{item.totalitems} item</h2>
                                {/* <h4 className="text-[13px] text-[#808080] font-[400] ml-1">Gray,256gb</h4> */}
                               </div>
  
                               <div className="flex flex-col justify-center items-start  h-[110px] sm1:ml-2 sm1:h-[50px]">
                               <h2 className=" mt-0 text-[black] ml-1" >{item.paymentmode}</h2>
                                {/* <h4 className="text-[13px] text-[#808080] font-[400] ml-1">Gray,256gb</h4> */}
                               </div>
  
                               <div className="flex flex-row justify-center sm1:justify-start items-center h-[110px] sm1:ml-2 sm1:h-[50px]">
                               <h2>&#8377; {item.totalprice}</h2>
                               <h2 className="ml-2">&#183; {item.paymentstatus}</h2>
                               </div>
  
                                {/* show when order is cancelled    */}
  
                               {/* <div className="flex flex-row justify-center items-center h-[100px] ">
                               <div className="h-[12px] w-[12px] bg-[#f53d3d] rounded-[50%]">
                               </div>
                                  <h2 className="ml-2">Order Cancelled </h2>
                               
                               </div> */}
  
                               <div className="flex flex-row justify-center items-center sm1:justify-start sm1:ml-2 sm1:mb-2">
                               <div className="h-[12px] w-[12px] bg-[#45ec45] rounded-[50%]">
                               </div>
                                  <h2 className="ml-2">{item.orderstatus}</h2>
                               
                               </div>
  
                             
  
                            </div>
                          ))}


                         
                </div> 

                {/* inside component  */}

                <div className={open?" min-h-[300px] mt-[70px] sm1:mt-[70px] mb-[50px] w-[1000px] sm1:w-[340px] select-none flex flex-col justify-start items-center":"hidden"}>

                    <div className="h-[50px] w-[980px] bg-[white] flex justify-start items-center sm1:h-[190px] sm1:flex-col sm1:w-[330px] sm1:items-start">
                              <div className="flex flex-col justify-center items-start  h-[40px] sm1:ml-2 ml-2">
                              <h2 className=" mt-0 text-[green] ml-1" >Order Id: {productdata?._id}</h2>
                             
                              </div>

                              <div className="flex flex-col justify-center items-start  h-[40px] sm1:ml-2 sm1:h-[50px] ml-4">
                             <h2 className=" mt-0 text-[black] ml-1" >{productdata?.totalitems} (item)</h2>
                              {/* <h4 className="text-[13px] text-[#808080] font-[400] ml-1">Gray,256gb</h4> */}
                             </div>

                              <div className="flex flex-col justify-center items-start  h-[40px] sm1:ml-2 sm1:h-[50px] ml-4">
                             <h2 className=" mt-0 text-[black] ml-1" >{productdata?.paymentmode}</h2>
                              {/* <h4 className="text-[13px] text-[#808080] font-[400] ml-1">Gray,256gb</h4> */}
                             </div>

                              <div className="flex flex-row justify-center sm1:justify-start items-center h-[40px] sm1:ml-2 ml-4">
                              <h2>&#8377; {productdata?.totalprice}</h2>
                              <h2 className="ml-2">&#183; {productdata?.paymentstatus}</h2>
                              </div>

                              <div className="flex flex-row justify-center items-center sm1:justify-start sm1:ml-2 ml-4">
                              <div className="h-[12px] w-[12px] bg-[#45ec45] rounded-[50%]">
                              </div>
                                 <h2 className="ml-2">{productdata?.orderstatus}</h2>
                             
                              </div>

                              {/* <div onClick={openmodal} className="flex flex-row justify-center items-center h-[40px] ml-4 sm1:justify-start sm1:ml-2">
                              <h2 className="text-[#0066ff]">Cancel Order</h2>
                           
                          
                               </div> */}

                    

                    </div>

                    {/* ///// */}
    
                        {proid.map((item: string, index:number)=>(

                            <Ordercard id={item} key={index}></Ordercard>

                        ))}


                                {/* /////// */}
                </div>

              

                {/* */}
        </div>
    )
}



