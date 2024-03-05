import {useRouter} from 'next/navigation'

export default function Card () {
    const router = useRouter();

    const handleclick = () => {
        router.push('/search')
    }

    return(
        <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-center justify-start cursor-pointer sm1:h-[220px] sm1:w-[150px] sm1:ml-2" >
            <div className="h-[180px] w-[220px] sm1:h-[140px] sm1:w-[140px] mt-3">
                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
            </div>
            <h2 className=" mt-3 text-[#777777]" >Macbook</h2>
            <h3>from &#8377; 92,000 </h3>
        </div>
    )
}