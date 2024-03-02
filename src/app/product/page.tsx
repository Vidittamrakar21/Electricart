"use client"
import {useRouter} from 'next/navigation'


export default function Product () {

    const router = useRouter()

    const movepayment = () => {
        router.push('/checkout')
    }
 
    return (
        <div className="min-h-[900px] flex justify-center items-start mt-[100px] select-none sm1:flex-col sm1:items-center sm1:mt-[70px]">
                <div className="h-[500px] w-[500px]  bg-[white] flex justify-center items-center flex-col fixed left-[280px] sm1:relative sm1:left-[0px] sm1:w-[340px] sm1:h-[400px]">
                    <div className="h-[400px] w-[400px] border mt-2  sm1:w-[300px] sm1:h-[300px]">
                        <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
                    </div>

                    <div className="h-[100px] w-[500px] flex justify-evenly items-center sm1:fixed sm1:bottom-0 sm1:w-[100%] sm1:left-0 sm1:right-0 sm1:z-10 sm1:h-[50px]">
                            <button className="h-[50px] w-[190px] bg-[#f0a822] text-[white] sm1:w-[100%]">Add To Cart</button>
                            <button onClick={movepayment} className="h-[50px] w-[190px] bg-[#EB6A2E] text-[white] sm1:w-[100%]"> Buy Now</button>
                    </div>

                </div>

                <div className=" min-h-[600px] w-[900px] mb-[50px]  bg-[white] flex flex-col justify-start ml-[550px] sm1:w-[340px] sm1:ml-0">
                <h1 className=" mt-3 text-[black] ml-1 text-[19px]" >Apple 2022 Macbook Air Apple M2 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)</h1>
               <h4 className="text-[15px] text-[#808080] font-[400] ml-1">Gray,256gb</h4>
               <div className="w-[50px] h-[25px] bg-[green] text-[white] mt-2 ml-1 text-[15px] flex items-center justify-center rounded-[5px]">
                    4.1 &#9733;
                </div>
                <h3 className="font-[600] ml-1  text-[22px] mt-4"> &#8377; 92,000 </h3>
                <h5 className=" line-through text-[14px] text-[gray] ml-2">&#8377; 1,06,580</h5>
                <h2 className="mt-2 ml-2">Available Offers</h2>

                <div className="flex flex-col h-[180px] w-[850px] border items-start justify-start  sm1:w-[340px] sm1:h-[280px]" >
                    <div className="flex flex-row w-[800px] items-start justify-start mt-4 sm1:w-[320px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px] sm1:w-[290px]">Bank Offer10% off on BOBCARD EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</h3>

                    </div>

                    <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px]  sm1:w-[290px]">Bank Offer10% off on Citi-branded Credit and Debit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C</h3>

                    </div>


                    <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px]  sm1:w-[290px]">Bank Offer10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</h3>

                    </div>


                    <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green"  viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                   </svg>  

                   <h3 className="ml-2 text-[13px]  sm1:w-[290px]">Special PriceGet extra 14% off (price inclusive of cashback/coupon)T&C</h3>

                    </div>


                </div>

                <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] mt-4 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray"  viewBox="0 0 16 16">
               <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                 </svg>

                 <div className="flex flex-row justify-center items-center ml-2">
                    <h2 className="text-[green] sm1:text-[13px]">Free Delivery</h2>
                    <h2 className="line-through sm1:text-[13px] text-[gray]">&#8377;120</h2>
                    <h2 className="font-[500] ml-2 sm1:text-[13px]">Delivered by 1 March ,Friday</h2>
                    </div>

                </div>

                <div className="flex flex-row items-center justify-start w-[800px] sm1:w-[320px] h-[30px] mt-4 ml-2">
                        <h2 className="text-[gray]">Seller</h2>
                        <h1 className="text-[blue] ml-3">TREASURE HAUL ONLINE</h1>

                </div>
                
                <div className="flex flex-row items-start justify-start w-[800px] sm1:w-[320px] min-h-[30px] mt-4 ml-2">
                        <h2 className="text-[gray]">Description</h2>
                        <h1 className=" ml-3 text-[14px]">This Apple Macbook is powered by the Apple M1 chip and is easily portable so that you can carry it with you anywhere you want. This thin and light notebook is equipped with an 8-core CPU to handle all your tasks more efficiently. The 8-core GPU of this notebook takes graphic-intensive games and apps to a whole new level. It also comes with a 16-core Neural Engine to do machine learning tasks more effectively. Its fan-less design offers silent operations and has a long-lasting battery life which can last up to 18 hours on a single charge.</h1>

                </div>

                <h1 className="text-[22px] font-[500] mt-4 ml-4">Rating And Reviews</h1>

                <div className="flex flex-col items-start justify-start w-[800px] sm1:w-[320px] min-h-[90px] mt-4 ml-2">
                        <div className="flex flex-col items-start justify-start w-[800px] sm1:w-[340px] min-h-[50px] mt-4" >
                        <div className="w-[40px] h-[20px] bg-[green] text-[white] mt-2 ml-1 text-[12px] flex items-center justify-center rounded-[5px]">
                              4.1 &#9733;
                         </div>
                            <h1 className=" ml-2 text-[14px] sm1:mt-2">
                            Value for money product...But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn&apos; t care about this issue.
                            </h1>
                        </div>


                        <div className="flex flex-col items-start justify-start w-[800px] sm1:w-[320px] min-h-[50px] mt-4" >
                        <div className="w-[40px] h-[20px] bg-[green] text-[white] mt-2 ml-1 text-[12px] flex items-center justify-center rounded-[5px]">
                              4.1 &#9733;
                         </div>
                            <h1 className=" ml-2 text-[14px] sm1:mt-2">
                            Value for money product...But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn&apos;t care about this issue.
                            </h1>
                        </div>


                        <div className="flex flex-col items-start justify-start w-[800px] sm1:w-[320px] min-h-[50px] mt-4" >
                        <div className="w-[40px] h-[20px] bg-[green] text-[white] mt-2 ml-1 text-[12px] flex items-center justify-center rounded-[5px]">
                              4.1 &#9733;
                         </div>
                            <h1 className=" ml-2 text-[14px] sm1:mt-2">
                            Value for money product...But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn&apos;t care about this issue.
                            </h1>
                        </div>
                </div>



                </div>
        </div>
    )
}