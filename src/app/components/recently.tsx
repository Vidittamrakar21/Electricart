import {useRouter} from 'next/navigation'

export default function Recently () {
    const router = useRouter();

    const handleclick = () => {
        router.push('/product')
    }

    return(
     <div className=" h-[370px] w-[1600px] bg-[white] mt-8 flex flex-row flex-wrap justify-center items-center mb-8 select-none sm1:w-[340px] sm1:overflow-x-scroll sm1:flex-nowrap sm1:justify-start sm1:h-[280px] sm1:mt-2">
       
         <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[250px] sm1:w-[150px]  sm1:ml-3 sm1:mt-0">
            <div className="h-[200] w-[220px] sm1:h-[140px] sm1:w-[140px]">
                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
            </div>
            <h2 className=" mt-3 text-[#070707] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
            <h3 className="mt-2 ml-1">&#8377; 92,000 </h3>
        </div>
        
         <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[250px] sm1:w-[150px]  sm1:ml-3 sm1:mt-0">
            <div className="h-[200] w-[220px] sm1:h-[140px] sm1:w-[140px]">
                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
            </div>
            <h2 className=" mt-3 text-[#070707] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
            <h3 className="mt-2 ml-1">&#8377; 92,000 </h3>
        </div>

         <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[250px] sm1:w-[150px]  sm1:ml-3 sm1:mt-0">
            <div className="h-[200] w-[220px] sm1:h-[140px] sm1:w-[140px]">
                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
            </div>
            <h2 className=" mt-3 text-[#070707] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
            <h3 className="mt-2 ml-1">&#8377; 92,000 </h3>
        </div>

         <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[250px] sm1:w-[150px]  sm1:ml-3 sm1:mt-0">
            <div className="h-[200] w-[220px] sm1:h-[140px] sm1:w-[140px]">
                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
            </div>
            <h2 className=" mt-3 text-[#070707] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
            <h3 className="mt-2 ml-1">&#8377; 92,000 </h3>
        </div>

         <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[250px] sm1:w-[150px]  sm1:ml-3 sm1:mt-0">
            <div className="h-[200] w-[220px] sm1:h-[140px] sm1:w-[140px]">
                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
            </div>
            <h2 className=" mt-3 text-[#070707] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
            <h3 className="mt-2 ml-1">&#8377; 92,000 </h3>
        </div>

         <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[250px] sm1:w-[150px]  sm1:ml-3 sm1:mt-0">
            <div className="h-[200] w-[220px] sm1:h-[140px] sm1:w-[140px]">
                <img className="h-[100%] w-[100%]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575280000" alt="" />
            </div>
            <h2 className=" mt-3 text-[#070707] ml-1" >Macbook 15.3 inch 256gb slim..</h2>
            <h3 className="mt-2 ml-1">&#8377; 92,000 </h3>
        </div>
         
       
    </div>
    )
}