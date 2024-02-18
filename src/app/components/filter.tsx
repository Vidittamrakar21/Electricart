import { EventHandler, useState } from "react"

export default function Filter () {

    const [range, setrange] = useState(400)
    const [filter, openfilter] = useState(false)

    const handlerange = (e: any) =>{
        //@ts-ignore
        let a = 500 ;
        const result = a + ((e.target.value)*10)
        // console.log("value" ,result)
        setrange(result)
    }

    const handlefilter = () =>  {
        openfilter(!filter)
    }


  return(
      <>
        <div onClick={handlefilter} className="hidden sm1:cursor-point sm1:select-none sm1:flex sm1:items-center sm1:justify-center sm1:h-[45px] sm1:z-20 sm1:w-[100%] sm1:bg-[white] sm1:fixed sm1:top-[50px] sm1:z-29">
            Add Filters
        </div>


          <div onClick={handlefilter} className={filter?"sm1:fixed sm1:z-6  sm1:top-0 sm1:right-0 sm1:left-0 sm1:bottom-0 sm1:bg-[#3b3b3b9d] sm1:mt-[96px] ":"sm1:fixed sm1:top-0 sm1:right-0 sm1:left-0 sm1:bottom-0 sm1:bg-[#3b3b3b9d] sm1:mt-[96px] sm1:hidden "}>
              <div  className="min-h-[500px] w-[280px] bg-[white] absolute left-[30px] cursor-pointer select-none flex flex-col items-start justify-center sm1:left-0 sm1:mb-3 sm1:z-19 sm1:fixed" >
        <h1 className="ml-4 text-[18px] font-[500] mt-2">Filters</h1>
        <div className="ml-4 min-h-[50px] w-[270px] flex flex-row flex-wrap mt-2">
            <div className="h-[35px] min-w-[90px] max-w-[200px] text-[black] text-[13px] p-2 bg-[#a3a3a3d5] rounded-[4px] flex justify-center items-center ">
                    <div>
                        x
                    </div>
                    <div className="ml-3">
                      min-&#8377;98,000

                    </div>
            </div>

        </div>

        <h1 className="ml-4">Price</h1>
        <input type="range" onChange={handlerange} className="ml-4"  />

        <div className="h-[35] border ml-4 mt-2 border-[#9b9a9a] w-[90] flex items-center justify-center">
            {range}
        </div>

        <h1 className="mt-2 ml-4">Customer Ratings</h1>
        <div className="h-[200px]  w-[270px] flex flex-col justify-center items-center">
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">4&#9733; & above</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">3&#9733; & above</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">2&#9733; & above</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">1&#9733; & above</h3>
                </div>
        </div>


        <h1 className="mt-2 ml-4">Brands</h1>
        <div className="min-h-[50px]  w-[270px] flex flex-col justify-center items-center">
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">Apple</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">Asus</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">Hp</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">Lenovo</h3>
                </div>
        </div>

        <h1 className="mt-2 ml-4">Offers</h1>
        <div className="min-h-[50px] ml-4 w-[270px] flex flex-col justify-center items-center">
                <div className="h-[40px] w-[250px] flex flex-row justify-start items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">No Cost EMI</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" />
                    <h3 className="ml-2">Special Price</h3>
                </div>
            
        </div>

        <button className="h-[35px] w-[120px] mt-2 ml-2 mb-3 border border-[gray]">CLear All</button>

    </div>
        </div>
      
      </>
  )
}


