import { set } from "firebase/database";
import { EventHandler, useState } from "react"

export default function Filter () {

    const [range, setrange] = useState(0)
    const [price, setprice] = useState(500)
    const [filter, openfilter] = useState(false)
    const [check1, setcheck1] = useState(false);
    const [check2, setcheck2] = useState(false);
    const [check3, setcheck3] = useState(false);
    const [check4, setcheck4] = useState(false);
    const [check5, setcheck5] = useState(false);
    const [check6, setcheck6] = useState(false);
    const [check7, setcheck7] = useState(false);
    const [check8, setcheck8] = useState(false);
    const [check9, setcheck9] = useState(false);
    const [check10, setcheck10] = useState(false);

    const handlerange = (e: any) =>{
        //@ts-ignore
        let a = 500 ;
        const result = a + ((e.target.value)*10)
        // console.log("value" ,result)
        setprice(result)
        setrange(e.target.value)
        
        setTimeout(()=>{addfilters(`min - ${price + 10}`)}, 1500)
    }


    const handlefilter = () =>  {
        openfilter(!filter)
    }

   const [filters ,setfilters] = useState([])

    const addfilters = (x: string) =>{
        //@ts-ignore
        const index = filters.indexOf(x)
        if(index === -1){
            //@ts-ignore
            setfilters(filters.concat(x))
        }
    }

    const removefilter = (x: number, y:string)=> {
   
          filters.splice(x,1);
           setfilters(filters)
       

      if(y === '4★ & above'){
            setcheck1(false)
      }
      else if (y === '3★ & above'){
            setcheck2(false)
      }
      else if (y === '2★ & above'){
            setcheck3(false)
      }

      else if(y === '1★ & above'){
            setcheck4(false)
      }
      else if(y === 'Apple'){
            setcheck5(false)
      }
      else if(y === 'Asus'){
            setcheck6(false)
      }
      else if(y === 'Hp'){
            setcheck7(false)
      }
      else if(y === 'Lenevo'){
            setcheck8(false)
      }

      else if(y === 'No Cost EMI'){
            setcheck9(false)
      }

      else if (y === 'Special Price'){

          setcheck10(false)
      }

      else{
        setrange(0)
        setprice(500)
      }
    }

    const clearallfilters = () => {
        setfilters([])
        setcheck1(false)
        setcheck2(false)
        setcheck3(false)
        setcheck4(false)
        setcheck5(false)
        setcheck6(false)
        setcheck7(false)
        setcheck8(false)
        setcheck9(false)
        setcheck10(false)
    }

    const onmouse = () =>{
        console.log("left")
    }

  return(
      <>
        <div onClick={handlefilter} className="hidden sm1:cursor-point sm1:select-none sm1:flex sm1:items-center sm1:justify-center sm1:h-[45px] sm1:z-20 sm1:w-[100%] sm1:bg-[white] sm1:fixed sm1:top-[50px] sm1:z-29">
            Add Filters
        </div>


          <div className={filter?"sm1:fixed sm1:z-6  sm1:top-0 sm1:right-0 sm1:left-0 sm1:bottom-0 sm1:bg-[#3b3b3b9d] sm1:mt-[96px]  sm1:overflow-y-scroll sm1:z-19":"sm1:fixed sm1:top-0 sm1:right-0 sm1:left-0 sm1:bottom-0 sm1:bg-[#3b3b3b9d] sm1:mt-[96px] sm1:hidden sm1:z-19"}>
              <div  className="min-h-[500px] w-[280px] bg-[white] absolute left-[30px] cursor-pointer select-none flex flex-col items-start justify-center sm1:left-0 sm1:mb-3 sm1:z-25 sm1:absolute sm1:min-h-[500px] sm1:overflow-y-scroll" >
                <div onClick={handlefilter}  className="hidden sm1:flex sm1:relative sm1:left-[240px] sm1:top-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black"  viewBox="0 0 16 16">
                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                </div>
        <h1 className="ml-4 text-[18px] font-[500] mt-2">Filters</h1>
        <div className="ml-4 min-h-[50px] w-[270px] flex flex-row flex-wrap mt-2">
           {filters.map((item,index)=>(
             <div key={index} className="h-[35px] min-w-[90px] max-w-[200px] text-[black] text-[13px] p-2 bg-[#a3a3a3d5] rounded-[4px] flex justify-center items-center mt-2 ml-1">
             <div onClick={()=>{removefilter(index,item)}}>
                 x
             </div>
             <div className="ml-3">
               {item}
             </div>
           </div>
           ))}

        </div>

        <h1 className="ml-4 mt-2">Price</h1>
        <input type="range" onChange={ handlerange}  className="ml-4" value={range} />

        <div className="h-[35] border ml-4 mt-2 border-[#9b9a9a] w-[90] flex items-center justify-center">
            {price}
        </div>

        <h1 className="mt-2 ml-4">Customer Ratings</h1>
        <div className="h-[200px]  w-[270px] flex flex-col justify-center items-center">
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start items-center">
                    <input type="checkbox" onClick={()=>{!check1?addfilters('4★ & above'):""; setcheck1(true);}} checked={check1}/>
                    <h3 className="ml-2">4&#9733; & above</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" onClick={()=>{!check2?addfilters('3★ & above'):""; setcheck2(true);}} checked={check2}/>
                    <h3 className="ml-2">3&#9733; & above</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" onClick={()=>{!check3?addfilters('2★ & above'):""; setcheck3(true);}} checked={check3}/>
                    <h3 className="ml-2">2&#9733; & above</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" onClick={()=>{!check4?addfilters('1★ & above'):""; setcheck4(true);}} checked={check4}/>
                    <h3 className="ml-2">1&#9733; & above</h3>
                </div>
        </div>


        <h1 className="mt-2 ml-4">Brands</h1>
        <div className="min-h-[50px]  w-[270px] flex flex-col justify-center items-center">
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start items-center">
                    <input type="checkbox" onClick={()=>{!check5?addfilters('Apple'):""; setcheck5(true);}}  checked={check5}/>
                    <h3 className="ml-2">Apple</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" onClick={()=>{!check6?addfilters('Asus'):""; setcheck6(true);}} checked={check6}/>
                    <h3 className="ml-2">Asus</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" onClick={()=>{!check7?addfilters('Hp'):""; setcheck7(true);}} checked={check7}/>
                    <h3 className="ml-2">Hp</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" onClick={()=>{!check8?addfilters('Lenevo'):""; setcheck8(true);}} checked={check8}/>
                    <h3 className="ml-2">Lenovo</h3>
                </div>
        </div>

        <h1 className="mt-2 ml-4">Offers</h1>
        <div className="min-h-[50px] w-[270px] flex flex-col justify-center items-center">
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start items-center">
                    <input type="checkbox" onClick={()=>{!check9?addfilters('No Cost EMI'):""; setcheck9(true);}} checked={check9}/>
                    <h3 className="ml-2">No Cost EMI</h3>
                </div>
                <div className="h-[40px] ml-4 w-[250px] flex flex-row justify-start  items-center">
                    <input type="checkbox" onClick={()=>{!check10?addfilters('Special Price'):""; setcheck10(true);}} checked={check10}/>
                    <h3 className="ml-2">Special Price</h3>
                </div>
            
        </div>

        <button className="h-[35px] w-[120px] mt-2 ml-2 mb-3 border border-[gray]" onClick={clearallfilters}>CLear All</button>

    </div>
        </div>
      
      </>
  )
}


