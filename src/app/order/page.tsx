"use client"

import { useState } from "react"

export default function Order () {

    const [star1 , setstar1] = useState<boolean>(false);
    const [star2 , setstar2] = useState<boolean>(false);
    const [star3 , setstar3] = useState<boolean>(false);
    const [star4 , setstar4] = useState<boolean>(false);
    const [star5 , setstar5] = useState<boolean>(false);
    const [box , setbox] = useState<boolean>(false);

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

    return (
        <div className="min-h-[700px] w-[100%] flex justify-center items-center">
                    {/* show when no order are there */}
                {/* <div className="h-[400px] w-[1100px] bg-[white] mt-[85px] sm1:mt-[0px] flex flex-col justify-center items-center sm1:w-[340px]">
                <div className="h-[250px] w-[250px] ">
                    <img src="/images/box.png" className="h-[100%] w-[100%]" alt="" />
                </div>
                <h1 className="text-[18px]">Haven't received any order yet!</h1>
                <button className="h-[35px] w-[180px] bg-[#4fb0d6] text-[white] mt-5 cursor-pointer">Shop Now</button>
            </div> */}


                <div className=" min-h-[300px] mt-[70px] sm1:mt-[70px] mb-[50px] w-[1000px] sm1:w-[340px] select-none flex flex-col justify-start items-center">

                    {/* order component */}
                          <div className="min-h-[120px] border w-[980px] sm1:w-[330px]   sm1:flex-col bg-[white] mt-[15px] shadow-lg flex flex-row justify-evenly items-center sm1:items-start sm1:justify-start sm1:h-[400px]"  >
                          <div className="h-[80px] w-[80px] sm1:h-[140px] sm1:w-[160px] sm1:ml-2">
                           <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
                             </div>

                             <div className="flex flex-col justify-center items-start  h-[110px] sm1:ml-2">
                             <h2 className=" mt-3 text-[black] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
                              <h4 className="text-[13px] text-[#808080] font-[400] ml-1">Gray,256gb</h4>
                             </div>

                             <div className="flex flex-row justify-center sm1:justify-start items-center h-[110px] sm1:ml-2">
                             <h2>&#8377; 98,000</h2>
                             <h2 className="ml-2">&#183; Paid</h2>
                             </div>

                              {/* show when order is cancelled    */}

                             {/* <div className="flex flex-row justify-center items-center h-[100px] ">
                             <div className="h-[12px] w-[12px] bg-[#f53d3d] rounded-[50%]">
                             </div>
                                <h2 className="ml-2">Order Cancelled </h2>
                             
                             </div> */}

                             <div className="flex flex-row justify-center items-center sm1:justify-start sm1:ml-2">
                             <div className="h-[12px] w-[12px] bg-[#45ec45] rounded-[50%]">
                             </div>
                                <h2 className="ml-2">Order Placed </h2>
                             
                             </div>

                             <div onClick={openmodal} className="flex flex-row justify-center items-center h-[110px] sm1:justify-start sm1:ml-2">
                             {/* <h2 className="text-[#0066ff]">Cancel Order</h2> */}
                             <h2 className="text-[#0066ff]"> &#9733;Rate and Review</h2>
                             
                             </div>

                          </div>


                         
                </div>  

                {/* rate and review */}

                <div className={box? "fixed top-0 flex justify-center items-center left-0 right-0 bottom-0 bg-[#3b3b3b7a]":"hidden"}>
                    <div className="h-[530px] w-[400px]  sm1:w-[340px] flex flex-col justify-start items-start shadow-xl rounded-[8px] bg-[white] ">
                    <div onClick={closemodal} className="relative left-[350px] sm1:left-[290px] top-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="grey" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                </div>
                                <h1 className="text-[18px] text-[black] font-[500] mt-5 ml-4">Rate This Product</h1>
                                <div className="text-[40px] h-[45px] w-[380px] sm1:w-[320px] mt-3 flex flex-row justify-evenly items-center text-[#bbbbbb] select-none cursor-pointer">
                                        <div className={star1 === true ? "text-[#f3f351]":""} onClick={handlestar1}>&#9733;</div>
                                        <div className={star2 === true ? "text-[#f3f351]":""} onClick={handlestar2}>&#9733;</div>
                                        <div className={star3 === true ? "text-[#f3f351]":""} onClick={handlestar3}>&#9733;</div>
                                        <div className={star4 === true ? "text-[#f3f351]":""} onClick={handlestar4}>&#9733;</div>
                                        <div className={star5 === true ? "text-[#f3f351]":""} onClick={handlestar5}>&#9733;</div>
                                </div>
                                <h1 className="text-[18px] text-[black] font-[500] mt-5 ml-4">Review This Product</h1>
                                <textarea className=" sm1:w-[320px] mt-5 ml-5 sm1:ml-2 resize-none border border-[#a8a8a8] rounded-[8px]" placeholder="&nbsp; &nbsp; Description"  cols={33} rows={10}></textarea>
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


                {/* */}
        </div>
    )
}