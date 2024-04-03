"use client"

import {  useState , useRef, useEffect, CSSProperties} from "react"
import { gql } from "@apollo/client";
import { gqclient } from "../sign/page";
import Cookies from "js-cookie";
import Cardcart from "@/components/cartcard";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

const UP_ADD = gql`

mutation Mutation($add: String, $uid: String) {
    putadd(add: $add, uid: $uid)
  }

`

const finduser = gql`
mutation Mutation($uid: String) {
    findoneuser(uid: $uid) {
      
      address
      cart
      
    }
  }

`



const removecart = gql`

mutation Mutation($uid: String, $pid: String) {

    rmcart(uid: $uid, pid: $pid)
  }



`

const confirmorder = gql`

mutation Mutation($uid: String, $pid: [String], $totalprice: Float, $totalitems: Float, $paymentmode: String, $paymentstatus: String, $orderstatus: String, $deliveryaddress: String) {
    createorder(uid: $uid, pid: $pid, totalprice: $totalprice, totalitems: $totalitems, paymentmode: $paymentmode, paymentstatus: $paymentstatus, orderstatus: $orderstatus, deliveryaddress: $deliveryaddress)
  }

`

const emptycart = gql`
mutation Mutation($uid: String) {
    clearcart(uid: $uid)
  }

`
const override1: CSSProperties = {
    position: "relative",
    top: "10px",
    left: "60px"
  };

const override2: CSSProperties = {
    position: "relative",
    top: "10px",
    left: "0px"
  };

export default function Checkout() {

    const name = useRef<HTMLInputElement>(null)
    const mobile = useRef<HTMLInputElement>(null)
    const pincode = useRef<HTMLInputElement>(null)
    const local = useRef<HTMLInputElement>(null)
    const area = useRef<HTMLTextAreaElement>(null)
    const city = useRef<HTMLInputElement>(null)
    const state = useRef<HTMLSelectElement>(null)
    const digit = useRef<HTMLInputElement>(null)
    

    const [itemcount , setcount ] = useState(1);

    const router = useRouter();

    const incrementcount = () => {
        setcount(item => item + 1)
    }

    const decrementcount = () => {
        if(itemcount > 1){
            setcount(item => item - 1)

        }
    }

    const [ adbox , isadbox] = useState(false)
    const [ gate , isgate] = useState(true)
    const [ cod , iscod] = useState(false)
    const [confirm, setconfirm] = useState(false)
    const [paymentmethod, setpaymethod] = useState("")

 
    const showadbox = () =>{
        isadbox(true)
    }

    const closeadbox = () =>{
        isadbox(false)
    }

    const choseopta = () =>{
        if(!gate && cod){
            isgate(true)
            iscod(false)
            setconfirm(false)
            setpaymethod("Razorpay")

        }
       
    }

    const choseoptb = () =>{
        if(!cod && gate){
            isgate(false)
            iscod(true)
            setconfirm(true)
            setpaymethod("COD")

        }
       
    }

    type addtype =  {
        name: string
        mobile: number
        pincode: number
        local: string
        area: string
        city: string
        state: string
    }

    const updateadd  = async (e: any) =>{
       

        if(!(name.current?.value && mobile.current?.value && pincode.current?.value && local.current?.value && area.current?.value && city.current?.value && state.current?.value)){
            alert("All the fields are required")
        }

        else{
            let obj = {
                name: name.current?.value,
                mobile: mobile.current?.value,
                pincode: pincode.current?.value,
                local: local.current?.value,
                area: area.current?.value,
                city: city.current?.value ,
                state: state.current?.value
            }

            const data = JSON.stringify(obj);

            if(data){
                const id = Cookies.get('uid')
                gqclient.mutate({
                  mutation: UP_ADD,
                   variables: {
                   uid: id,
                    add: data
                }
             }).then((res)=>{
                if((res.data.putadd) === "updated"){

                    isadbox(false)
                    //@ts-ignore
                    name.current.value = ""
                    //@ts-ignore
                    mobile.current.value = ""
                    //@ts-ignore
                    pincode.current.value = ""
                    //@ts-ignore
                    local.current.value = ""
                    //@ts-ignore
                    area.current.value = ""
                    //@ts-ignore
                    city.current.value  = ""
                    //@ts-ignore
                    state.current.value = ""
                    fetchaddress()
                }
             })
            }
        }

        
    }

    const [adds, setadds] = useState([])
    const [arr, setarr] = useState([])

    const fetchaddress = async ()=>{
        const id = Cookies.get('uid')
        
        gqclient.mutate({
            mutation: finduser,
            variables:{
                uid: id
            }
        }).then(async (res)=>{
            //@ts-ignore
            const updatedItems = [];
            
            (res.data.findoneuser.address).map((item:string)=>{
              //@ts-ignore
                    
              updatedItems.push(JSON.parse(item))
            })
            //@ts-ignore
            setarr(updatedItems)

           const i =  updatedItems.length - 1
           isradio(i)
           //@ts-ignore
           setadr(JSON.stringify(updatedItems[updatedItems.length - 1]))
        })


    }


   




    

    const id = Cookies.get('uid');

    const [data, setdata] = useState([])
    const [loading, isloading] = useState(false)
    const [oloading, setoloading] = useState(false)

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
                if(data.length === itemprice.length){
                    findallamount()
                }
            }
           }

       
    }

    const discountprice = (x: number) => {
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


    function findallamount (){

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
    const [radio , isradio] = useState<string| number>("")
    const [adr , setadr] = useState<string>("")
    
    function ty (){
     if(arr.length>0){
        const i = arr.length -1
        console.log("radioo")
        isradio(i)
     }
    }


    const handleradio = (x:number, y: object) =>{
        isradio(x)
        setadr(JSON.stringify(y))

    }

    const [random , setrandom] = useState(0);

    const generaterandom = () =>{
       const r =  Math.floor(Math.random() * (999 - 100 + 1)) + 100;
       setrandom(r)

     
    }

    const [check , setcheck] = useState(true)
    const [paystatus , setstatus] = useState("yet to be paid")

    const orderdata = {
        uid: id,
        pid: data,
        totalprice: pricing-discounting,
        totalitems: data.length,
    
        paymentmode: paymentmethod,
        paymentstatus: paystatus,
        orderstatus: "Order Placed",
        deliveryaddress: adr
        
    }

    const confirmcod = async ()=>{
       if(arr.length>0){
         //@ts-ignore
         if(random ===   Number(digit.current?.value)){
           
            setcheck(true)
           setoloading(true)
           
            // console.log(orderdata)

            await gqclient.mutate({
                mutation: confirmorder,
                variables: orderdata


                
            }).then(async (res)=> {
                if(res.data.createorder){
                    await gqclient.mutate({
                        mutation: emptycart,
                        variables: {
                            uid: id
                        }
                    }).then((rs)=>{

                        if(rs.data.clearcart === "updated"){
                            router.push(`/confirmed/confo?id=${res.data.createorder}`)
                            setoloading(false)
                        }
                    })


                     
                }
            })

           
        }
        else{
            setcheck(false)
            generaterandom()
              //@ts-ignore
              digit.current.value = ""
        }
       }

       else{
        alert("Kindly add a Delivery Address !")
       }
       
    }

   
    
    useEffect(()=>{
        fetchaddress()
        fetchcart(0)
        generaterandom()
    },[])


    return (
        <div className="min-h-[650px] flex flex-col justify-start items-center select-none">

            {/* use when cart is empty  */}

            {/* <div className="h-[400px] w-[1100px] bg-[white] mt-[85px] flex flex-col justify-center items-center sm1:w-[340px]">
                <div className="h-[250px] w-[250px] ">
                    <img src="/images/cart.png" className="h-[100%] w-[100%]" alt="" />
                </div>
                <h1 className="text-[18px]">Your cart is empty!</h1>
                <button className="h-[35px] w-[180px] bg-[#4fb0d6] text-[white] mt-5 cursor-pointer">Shop Now</button>
            </div> */}

            <div className=" min-h-[700px] w-[1300px] mt-[80px] flex flex-row justify-evenly items-start mb-[50px] select-none sm1:flex-col sm1:w-[350px] sm1:justify-center sm1:items-center sm1:mt-[25px]">
                <div className="w-[800px] min-h-[270px] flex flex-col justify-center items-start bg-[white] mr-[350px] sm1:w-[340px] sm1:mr-[0px] sm1:mt-[50px]">

                    <div className="min-h-[100px] w-[800px] flex flex-col justify-start items-start bg-[white] sm1:w-[340px]">
                            <div onClick={ty} className="h-[40px] w-[800px] flex flex-col justify-center items-start bg-[#4C3F91] text-[white] sm1:w-[340px]">
                                <h1 className="ml-2">Delivery Address</h1>
          
                            </div>

                          {arr.map((item: addtype, index : number)=>(
                              <div key={index} className=" mt-2 flex flex-row justify-start items-center cursor-pointer  ml-4 min-h-[65px] w-[750px] sm1:w-[300px] border-b-[1px] border-b-[#a8a8a8]">
                              <input onClick={()=>{handleradio(index,item)}} type="radio" checked={radio === index?true: false} />
                              <div className=" ml-3 flex flex-col justify-start items-start cursor-pointer   min-h-[55px] w-[550px] sm1:w-[290px]">
                                        <h1 className="font-[500]">{item.name} &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;          {item.mobile}</h1>
                                        <h2 className="">{item.area},{item.local}, {item.city}, {item.state}  &nbsp;  <span className="font-[500]">-{item.pincode}</span></h2>
                              </div>
                             

                            </div>
                          ))}

                            <div onClick={showadbox} className=" mt-4 flex flex-row justify-start items-center cursor-pointer  border h-[45px] w-[800px] sm1:w-[340px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#4C3F91"  viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                            <h1 className="text-[#4C3F91] ml-2">ADD A NEW ADDRESS</h1>
                            </div>

                            <div className={adbox?"flex flex-col justify-start items-start cursor-pointer h-[405px] w-[800px] sm1:w-[340px] sm1:h-[500px]":"hidden"}>
                                <div className="flex flex-row justify-start items-center cursor-pointer   h-[65px] w-[750px] sm1:w-[300px] sm1:flex-col sm1:h-[95px]">
                                        <input ref={name} type="text" placeholder="&nbsp; &nbsp;Enter Name" className="h-[45px] sm1:w-[270px]  w-[350px] border-[1.5px] sm1:mt-2 border-[#b1b1b1] ml-2 sm1:h-[35px]"/>
                                        <input ref={mobile} type="number" placeholder="&nbsp;&nbsp;10-Digit Mobile Number" className="h-[45px]  sm1:w-[270px] sm1:mt-2 border-[1.5px] border-[#b1b1b1] w-[350px] ml-2 sm1:h-[35px]"/>
                                </div>

                                <div className=" mt-2 flex flex-row justify-start items-center cursor-pointer   h-[65px] w-[750px] sm1:flex-col sm1:w-[300px] sm1:h-[95px] ">
                                        <input ref={pincode} type="number" placeholder="&nbsp;&nbsp;Pincode" className=" h-[45px] sm1:w-[270px] w-[350px] sm1:mt-2 border-[1.5px] border-[#b1b1b1] ml-2 sm1:h-[35px]"/>
                                        <input ref={local} type="text" placeholder="&nbsp;&nbsp;Locality" className="h-[45px] sm1:w-[270px] border-[1.5px] sm1:mt-2 border-[#b1b1b1] w-[350px] ml-2 sm1:h-[35px]"/>
                                </div>

                                <textarea ref={area} className=" resize-none border-[1.5px] border-[#b1b1b1] ml-2 mt-4 sm1:w-[300px] sm1:ml-4" placeholder="&nbsp; &nbsp;Address (Area and Street)" cols={65} rows={4}></textarea>

                                <div className=" mt-2 flex flex-row justify-start items-center cursor-pointer sm1:h-[95px]  h-[65px] w-[750px] sm1:w-[300px] sm1:mt-2 sm1:flex-col ">
                                        <input ref={city} type="text" placeholder="&nbsp;&nbsp;City/District/Town" className=" h-[45px] w-[350px] sm1:mt-2 sm1:w-[270px] border-[1.5px] border-[#b1b1b1] ml-2 sm1:h-[35px]"/>
                                        <select ref={state}  className=" h-[45px] w-[350px] border-[1.5px] border-[#b1b1b1] sm1:mt-2 sm1:w-[270px] ml-2 sm1:h-[35px]">
                                        <option value="" disabled selected hidden>Select State</option>
                                        <option value="Andhra Pradesh" >Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                        </select>
                                </div>

                                <div className=" mt-2 flex flex-row justify-start items-center cursor-pointer   h-[65px] w-[750px] sm1:w-[300px] sm1:ml-4">
                                      <button onClick={updateadd} className="h-[45px] text-[18px] text-[white] w-[230px] sm1:w-[180px] sm1:h-[40px] sm1:text-[15px] bg-[#4C3F91] mt-3 ml-2">Save and Deliver Here</button>
                                      <h2 onClick={closeadbox} className="ml-4 text-[#3883f5] mt-3 text-[18px]  sm1:text-[15px]">Cancel</h2>
                                </div>


                            </div>

                           

                    </div>

                    <div className=" mt-4 h-[40px] w-[800px] flex flex-col justify-center items-start bg-[#4C3F91] text-[white] sm1:w-[340px]">
                                <h1 className="ml-2">Order Summary</h1>
                            </div>


                    {/* cart item */}
                    {data.map((item: string, index: number)=>(
                     <Cardcart key={index} id={item} rmitem = {removeitem} fetchprice={settingprice} fetchdiscount= {discountprice}></Cardcart>
                   ))}

                    <ClipLoader color="#36d7b7" loading={loading} size={40} cssOverride={override1}/>

                    <div className=" mt-4 h-[40px] w-[800px] flex flex-col justify-center items-start bg-[#4C3F91] text-[white] sm1:w-[340px]">
                                <h1 className="ml-2">Payment Options</h1>
                            </div>

                            <div onClick={choseopta} className=" mt-2 flex flex-row justify-start items-center cursor-pointer  ml-4 h-[65px] w-[750px] sm1:w-[300px]">
                                     <div className="h-[55px] w-[30px]">
                                     <input type="radio" checked={gate} onClick={choseopta}/>
                                     </div>
                                      <div className=" ml-3 flex flex-col justify-start items-start cursor-pointer   h-[55px] w-[550px] sm1:w-[280px]">
                                                <h1 className="font-[500]">Pay Through Razorpay Gateway</h1>
                                               
                                      </div>

                                </div>

                            <div onClick={choseoptb} className=" mt-2 flex flex-row justify-start items-center cursor-pointer  ml-4 min-h-[65px] w-[750px] sm1:w-[300px]">
                                     <div className="h-[55px] w-[30px]">
                                     <input type="radio" checked={cod} onClick={choseoptb}/>
                                     </div>
                                      <div className=" ml-3 flex flex-col justify-start items-start cursor-pointer   h-[55px] w-[550px] sm1:w-[280px]">
                                                <h1 className="font-[500]">Cash on Delivery</h1>
                                               
                                      </div>

                                    

                                </div>

                                <div className={confirm?"flex items-center justify-center min-h-[100px] w-[550px] sm1:w-[320px] border ml-2 mb-3  border-[#525252]  sm1:flex-col":"hidden"}>
                                      <div className="flex items-center justify-center">
                                      <div className="flex items-center justify-center font-shaw text-[70px] sm1:text-[45px] italic  h-[70px] sm1:h-[50px] w-[120px] border border-[#8d8d8d] sm1:mt-2 text-green-500 font-bold">{random}</div>
                                       <div className="ml-2 cursor-pointer select-none" onClick={generaterandom}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="grey" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                         <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                                        </svg>
                                       </div>
                                      </div>
                                    
                                    <input ref={digit} type="number" className={check?"h-[40px] w-[180px] text-[20px] ml-2 sm1:mt-2  sm1:ml-0 border border-[gray]": "h-[40px] w-[180px] text-[20px] ml-2 sm1:mt-2  sm1:ml-0  border-[#fa3939] border-[2px]"}   placeholder="&nbsp; Enter The Digits "/>
                                    <button onClick={confirmcod} className="h-[40px] w-[130px] bg-[#eb6a2e] ml-2 text-[white] sm1:mt-2 sm1:mb-2 sm1:ml-0 sm1:w-[180px] cursor-pointer ">Confirm Order</button>
                                    <ClipLoader color="#36d7b7" loading={oloading} size={40} cssOverride={override2}/>
                                </div>
                  

                </div>

                {/* price detail part */}


                <div className="w-[400px] min-h-[340px] bg-[white]  fixed top-[80px] right-[300px] flex flex-col justify-start items-center sm1:relative sm1:w-[340px] sm1:right-[0px] sm1:top-[20px]">

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
                    <h2 className="text-[18px] font-[500]">Amount Payable</h2>
                    <h2 className="text-[18px] font-[500]">&#8377;{pricing - discounting}</h2>

                    </div>

                    <div className="flex flex-row justify-start items-center h-[45px] w-[380px] sm1:w-[320px]">
                    <h1 className="text-[green]">You will save &#8377;{discounting} on this order </h1>

                    </div>


                        <button className={ !confirm?"h-[40px] w-[180px] bg-[#eb6a2e] text-[white] relative top-[10px] cursor-pointer left-[0px]": "hidden"} >Continue</button>
                </div>
            </div>
        </div>
    )
}