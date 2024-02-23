import {useRouter} from 'next/navigation'


export  default function Itemcard () {

    const router = useRouter()

    const handleroute = () =>{
            router.push('/product')
    }

    return(
        <div onClick={handleroute} className=" h-[440px] w-[320px] bg-[white] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[300px] sm1:w-[160px] sm1:ml-2" >
        <div className="h-[250] w-[320px] sm1:h-[140px] sm1:w-[160px]">
            <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
        </div>
        <h2 className=" mt-3 text-[black] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
        <h4 className="text-[13px] text-[#808080] font-[400] ml-1">Gray,256gb</h4>
        <div className="w-[40px] h-[20px] bg-[green] text-[white] mt-2 ml-1 text-[13px] flex items-center justify-center rounded-[5px]">
            4.1 &#9733;
        </div>
        <h3 className="font-[600] ml-1 mt-1"> &#8377; 92,000 </h3>
    </div>
    )
}