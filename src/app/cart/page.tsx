"use client"

import { useState } from "react"

export default function Cart() {


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

            {/* <div className="h-[400px] w-[1100px] bg-[white] mt-[85px] flex flex-col justify-center items-center sm1:w-[340px]">
                <div className="h-[250px] w-[250px] ">
                    <img src="/images/cart.png" className="h-[100%] w-[100%]" alt="" />
                </div>
                <h1 className="text-[18px]">Your cart is empty!</h1>
                <button className="h-[35px] w-[180px] bg-[#4fb0d6] text-[white] mt-5 cursor-pointer">Shop Now</button>
            </div> */}

            <div className="min-h-[700px] w-[1300px] mt-[80px] flex flex-row justify-evenly items-start mb-[50px] select-none sm1:flex-col sm1:w-[350px] sm1:justify-center sm1:items-center sm1:mt-[25px]">
                <div className="w-[800px] min-h-[270px] flex flex-col justify-center items-start bg-[white] mr-[350px] sm1:w-[340px] sm1:mr-[0px]">

                    {/* cart item */}

                    <div className="h-[220px] w-[780px] mt-[34px] bg-[white] flex flex-row justify-center items-center border sm1:w-[340px]">
                            <div className="h-[150px] w-[150px] sm1:h-[100px] sm1:w-[100px]">
                                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
                            </div>
                            <div className="h-[150px] w-[600px] flex flex-col justify-center items-start ml-4 sm1:w-[200px] sm1:h-[100]">
                               <div className="flex flex-row justify-center items-center"> 
                                <h2 className="sm1:text-[13px]">Macbook 15.5inch 16gb 512ssd</h2>
                               <h2 className="text-[14px] ml-5 sm1:text-[12px]">Delivery by Monday Feb 19</h2>
                               </div>

                               <h3 className="text-[14px] text-[gray] sm1:text-[12px]">Seller: Apple</h3>

                               <div className="flex flex-row justify-center items-center">
                                        <h5 className=" line-through text-[14px] text-[gray]">&#8377; 1,06,580</h5>
                                        <h2 className="text-[17px] font-[600] ml-2">&#8377; 98,000</h2>
                                        <h2 className="  text-[14px] ml-2 text-[green] sm1:text-[13px]">17% Off 1 coupon & 1 offer applied</h2>
                               </div>

                               <div className="flex flex-row justify-center items-center mt-5">
                                        <div className="flex flex-row justify-evenly w-[120px] items-center">
                                            <div className="h-[23px] w-[23px] border border-[#6d6c6c] rounded-[50%] flex flex-row justify-center items-center" onClick={decrementcount}>-</div>
                                            <div className="h-[25px] w-[40px]   border border-[#6d6c6c] flex flex-row justify-center items-center">{itemcount}</div>
                                            <div className="h-[23px] w-[23px] border border-[#6d6c6c] rounded-[50%] flex flex-row justify-center items-center" onClick={incrementcount}>+</div>
                                        </div>

                                        <h1 className="text-[18px] text-[500] ml-2 cursor-pointer">Remove</h1>
                               </div>

                            </div>

                    </div>


                  

                </div>

                {/* price detail part */}


                <div className="w-[400px] min-h-[340px] bg-[white]  fixed top-[80px] right-[300px] flex flex-col justify-start items-center sm1:relative sm1:w-[340px] sm1:right-[0px] sm1:top-[20px]">

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


                        <button className="h-[40px] w-[180px] bg-[#eb6a2e] text-[white] relative top-[10px] cursor-pointer left-[0px]" >Place Order</button>
                </div>
            </div>
        </div>
    )
}