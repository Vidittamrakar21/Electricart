import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "@/app/client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type propstype = {
    id: string
  
   
}

const removecart = gql`

mutation Mutation($uid: String, $pid: String) {

    rmcart(uid: $uid, pid: $pid)
  }


`

export default function Ordercard(props:propstype){

    const id = Cookies.get('uid');
  
    const router  = useRouter()
    
    

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

    const handleclick = ()=>{
        router.push(`/products/product?id=${props.id}`)
    }



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
     
    
     
       }
    });
    

  
    
    
    

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


    const [box , setbox] = useState<boolean>(false);  const [star1 , setstar1] = useState<boolean>(false);
    const [star2 , setstar2] = useState<boolean>(false);
    const [star3 , setstar3] = useState<boolean>(false);
    const [star4 , setstar4] = useState<boolean>(false);
    const [star5 , setstar5] = useState<boolean>(false);

    const openmodal = () => {
        setbox(true)
    }

    const closemodal = () => {
        setbox(false)
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


    useEffect(()=>{
        //@ts-ignore
       

    },[])
     

    return(
        <>
          <div className="min-h-[120px] border w-[980px] sm1:w-[330px]   sm1:flex-col bg-[white] mt-[15px] shadow-lg flex flex-row justify-evenly items-center sm1:items-start sm1:justify-start sm1:min-h-[280px]"  >
                           <div  onClick={handleclick} className="h-[80px] w-[80px] sm1:h-[120px] sm1:w-[120px] sm1:ml-2 sm1:mt-2">
                            <img className="min-h-[50%] max-h-[100%] min-w-[50%] max-w-[100%]" src={data?.image} alt="" />
                              </div>

                              <div  onClick={handleclick} className="flex flex-col justify-center items-start  h-[110px] sm1:ml-2 sm1:h-[50px]">
                              <h2 className=" mt-3 text-[black] ml-1" >{truncateTitle(data?.title, 5)}</h2>
                               <h4 className="text-[13px] text-[#808080] font-[400] ml-1">{data?.spec}</h4>
                              </div>

                              <div  onClick={handleclick} className="flex flex-row justify-center sm1:justify-start items-center h-[110px] sm1:ml-2 sm1:h-[50px]">
                              <h2>&#8377; {data?.price}</h2>
                              
                              </div>

                               {/* show when order is cancelled    */}

                              {/* <div className="flex flex-row justify-center items-center h-[100px] ">
                              <div className="h-[12px] w-[12px] bg-[#f53d3d] rounded-[50%]">
                              </div>
                                 <h2 className="ml-2">Order Cancelled </h2>
                             
                              </div> */}

                             

                              <div onClick={openmodal} className="flex flex-row justify-center items-center h-[110px] sm1:justify-start sm1:ml-2 sm1:h-[50px]">
                              {/* <h2 className="text-[#0066ff]">Cancel Order</h2> */}
                             <h2 className="text-[#0066ff]"> &#9733;Rate and Review</h2>
                          
                               </div>

                           </div>



                           <div className={box? "fixed top-0 flex justify-center items-center left-0 right-0 bottom-0 bg-[#3b3b3b7a]":"hidden"}>
                    <div className="h-[530px] w-[400px]  sm1:w-[340px] flex flex-col justify-start items-start shadow-xl rounded-[8px] bg-[white] ">
                    <div onClick={closemodal} className="relative left-[350px] sm1:left-[290px] top-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="grey" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                </div>
                                <h1 className="text-[18px] text-[black] font-[500] mt-5 ml-4">Rate This Product</h1>
                                <div className="text-[40px] h-[45px] w-[380px] sm1:w-[320px] mt-3 flex flex-row justify-evenly items-center text-[#bbbbbb] select-none cursor-pointer">
                                        <div className={star1 === true ? "text-[#ffd13c]":""} onClick={handlestar1}>&#9733;</div>
                                        <div className={star2 === true ? "text-[#ffd13c]":""} onClick={handlestar2}>&#9733;</div>
                                        <div className={star3 === true ? "text-[#ffd13c]":""} onClick={handlestar3}>&#9733;</div>
                                        <div className={star4 === true ? "text-[#ffd13c]":""} onClick={handlestar4}>&#9733;</div>
                                        <div className={star5 === true ? "text-[#ffd13c]":""} onClick={handlestar5}>&#9733;</div>
                                </div>
                                <h1 className="text-[18px] text-[black] font-[500] mt-5 ml-4">Review This Product</h1>
                                <textarea className=" sm1:w-[320px] mt-5 ml-5 sm1:ml-2 resize-none border border-[#a8a8a8] rounded-[8px]" placeholder="&nbsp; &nbsp; Description (Optional)"  cols={33} rows={10}></textarea>
                                <button className="h-[40px] relative left-[100px] sm1:left-[70px] top-4 w-[190px] bg-[#FB641B] text-[white] text-[17px]">Submit</button>
                    </div>

                    {/* cancel order modal */}

                    {/* <div className="h-[120px] w-[400px] sm1:w-[340px] flex flex-col justify-start items-start shadow-xl rounded-[8px] bg-[white] ">
                   
                                <h1 className="text-[16px] ml-4 mt-5 font-[500]">Are you sure , you want to cancel order ?</h1>
                                <div className="h-[50px] w-[380px] sm1:w-[320px] flex justify-center items-center">
                                <button className="h-[35px] w-[120px] ml-5 mt-5 bg-[#FB641B] text-[white] text-[15px]">Cancel Order</button>
                                <button onClick={closemodal} className="h-[35px] w-[120px] ml-5 mt-5 bg-[white] text-[black] border border-[#acacac] text-[15px]"> NO</button>

                                </div>
                    </div> */}

                </div>
        
        </>
    )
} 