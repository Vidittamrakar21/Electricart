export default function Cart() {
    return (
        <div className="min-h-[650px] flex flex-col justify-start items-center select-none">
            <div className="h-[400px] w-[1100px] bg-[white] mt-[85px] flex flex-col justify-center items-center sm1:w-[340px]">
                <div className="h-[250px] w-[250px] ">
                    <img src="/images/cart.png" className="h-[100%] w-[100%]" alt="" />
                </div>
                <h1 className="text-[18px]">Your cart is empty!</h1>
                <button className="h-[35px] w-[180px] bg-[#4fb0d6] text-[white] mt-5 cursor-pointer">Shop Now</button>
            </div>
        </div>
    )
}