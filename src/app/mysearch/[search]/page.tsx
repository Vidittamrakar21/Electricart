"use client"

import Footer from "../../../components/footer"
import {useRouter,useSearchParams} from 'next/navigation'

import { useParams } from "next/navigation"
import Itemcard from "../../../components/itemcard"
import Filter from "../../../components/filter"
import { client } from "../../client"
import Itemcardskeleton from "../../../components/itemcardskeleton"
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState ,useRef, MutableRefObject} from "react"

type itemtype = {
    _id: string
    title: string
    spec: string
    rating: number
    price: number
    image: string

}

export default function Search (){

    const input = useRef<HTMLInputElement>(null);

    
    const router = useRouter()
    const searchParams = useSearchParams()

    let param = searchParams.get('param')
    const key = param?.toString()

    const gohome = () =>{
        router.push('/')
    }


    const [data, setdata] = useState([])
    const [arr2, setarr2] = useState([])
    const [arr3, setarr3] = useState([])
    const [len, setlen] = useState(0)
    const [len1, setlen1] = useState(0)
    const [box, openbox] = useState(false)
    const [focus, setfocus] = useState(true)
    const [opt, setopt] = useState([""])
    const [inp, setinp] = useState("")
//@ts-ignore
    const searchbox = (e)=> {
        if(e.target.value === ""){
            openbox(false)
            setinp("")

        }
        else{
            openbox(true)
            setinp(e.target.value)
            if(e.target.value === "s" || e.target.value === "S" ){
                setopt(["Smartphone", "smartwatch", "Speaker" ])
                
            }
            else if(e.target.value === "smart" || e.target.value === "Smart" ){
                setopt(["Smartphone", "Smartwatch" ])
            }

            else if(e.target.value === "spe" || e.target.value === "Spe" ){
                setopt(["Speaker"])
            }

            else if(e.target.value === "speaker" || e.target.value === "Speaker" ){
                setopt(["Speaker"])
            }

            else if(e.target.value === "mo" || e.target.value === "Mo" || e.target.value === "m" ){
                setopt(["Mobile","Mouse"])
            }

            else if(e.target.value === "mobile" || e.target.value === "mob" ){
                setopt(["Mobile"])
            }

            else if(e.target.value === "mouse" || e.target.value === "mou" ){
                setopt(["Mouse"])
            }

            else if( e.target.value === "w" || e.target.value === "W" ){
                setopt(["Watch", "washing machine"])
            }
            else if(e.target.value === "wat" || e.target.value === "watch" ){
                setopt(["watch"])
            }
            else if(e.target.value === "wash" || e.target.value === "washing machine"  ){
                setopt(["Washing Machine"])
            }

            else if(e.target.value === "h" || e.target.value === "head" || e.target.value === "headphone" || e.target.value === "H" ){
                setopt(["Headphone"])
            }

            else if(e.target.value === "l" || e.target.value === "lap" || e.target.value === "laptop" || e.target.value === "L" ){
                setopt(["Laptop"])
            }

            else if(e.target.value === "t" || e.target.value === "T"  ){
                setopt(["TV","Trimmer"])
            }
            else if(e.target.value === "tv" || e.target.value === "TV" || e.target.value === "screen" || e.target.value === "television" ){
                setopt(["TV"])
            }

            else if(e.target.value === "f" || e.target.value === "F" || e.target.value === "fri" || e.target.value === "fridge" || e.target.value === "Fridge" ){
                setopt(["Fridge"])
            }

            else if(e.target.value === "a" || e.target.value === "air" || e.target.value === "ac" || e.target.value === "AC" || e.target.value === "Air Conditioner" ){
                setopt(["Air Conditioner"])
            }

            else if(e.target.value === "k" || e.target.value === "K" || e.target.value === "key" || e.target.value === "keyboard" || e.target.value === "Keyboard" ){
                setopt(["Keyboard"])
            }

            else if( e.target.value === "tri" || e.target.value === "trimmer" || e.target.value === "Trimmer" ){
                setopt(["Trimmer"])
            }
            else{
                setopt([])
            }
        }



    }

    const handlesearchbox = (x:string) => {
        setopt([])
        openbox(false)
        setinp("")
        // setdata([])
        if(x === 'Air Conditioner')
        {
            router.push(`/mysearch/search?param=AC`)
        }
        else if(x === 'Smartphone'){
            router.push(`/mysearch/search?param=Mobile`)
        }

        else if(x === 'TV'){
            router.push(`/mysearch/search?param=Tv`)
        }

        else if(x === 'Watch'|| x === 'watch'){
            router.push(`/mysearch/search?param=Smart Watch`)
        }
        else{
            
            router.push(`/mysearch/search?param=${x}`)
        }
    }

    const [comp, setcomp] = useState([""])
    const [min, setmin] = useState(0)

    const checkfilter =()=>{
        if(param === "Laptop"){
            setcomp(["Hp","Lenovo","Asus", "Apple" ])
            setmin(23700)
        }
        else if(param === "Mobile"){
            setcomp(["Redmi","OnePlus","OPPO", "Apple" ])
            setmin(5299)
        }

        else if(param === "Headphone"){
            setcomp(["Zebronics","Mi","Boat"])
            setmin(499)
        }

        else if(param === "Tv"){
            setcomp(["Redmi","Samsung","Sony", "Mi" ])
            setmin(13499)
        }
        else if(param === "Speaker"){
            setcomp(["Boat","JBL","Zebronics", "Mivi" ])
            setmin(499)
        }
        else if(param === "Smart Watch"){
            setcomp(["Fastrack","Fire-Boltt ","Noise", "Boat" ,"Samsung" ])
            setmin(1299)

        }

        else if(param === "Fridge"){
            setcomp(["Samsung","Godrej","Whirlpool", "Haier" ])
            setmin(15990)
        }

        else if(param === "Washing Machine"){
            setcomp(["Samsung","LG" ])
            setmin(11000)
        }

        else if(param === "AC"){
            setcomp(["Voltas","Godrej","Whirlpool" ])
            setmin(23000)
        }
        else if(param === "Keyboard"){
            setcomp(["Hp","Cosmic Byte","Zebronics", "Keychron" ])
            setmin(299)
        }
        else if(param === "Mouse"){
            setcomp(["Hp","Portronics","ZEBRONICS", "Wings" ])
            setmin(299)
        }
        else if(param === "Trimmer"){
            setcomp(["PHILIPS","HAVELLS","NOVA" ])
            setmin(649)
        }


    }

    const [isproduct, setproduct] = useState(true)
 

    const searchresult = ()=>{
     
        let str = (input?.current?.value)
       
            
        str = str?.toLowerCase();
        
        setdata([])
       
        if(str === ""){

            return
        }

       else if(str === "laptop"){
            router.push(`/mysearch/search?param=Laptop`)
            openbox(false);
            setinp("")
            setdata([])
        }
        else if(str === "mobile"){
            router.push(`/mysearch/search?param=Mobile`)
            openbox(false);
            setinp("")
            setdata([])
        }

        else if(str === "headphone"){
            router.push(`/mysearch/search?param=Headphone`)
            openbox(false);
            setinp("")
            setdata([])
        }

        else if(str === "tv"){
            router.push(`/mysearch/search?param=Tv`)
            openbox(false);
            setinp("")
            setdata([])
        }

        else if(str === "speaker"){
            router.push(`/mysearch/search?param=Speaker`)
            openbox(false);
            setinp("")
            checkfilter()
            setdata([])
        }

        else if(str === "smart watch"){
            router.push(`/mysearch/search?param=Smart Watch`)
            openbox(false);
            setinp("")
            checkfilter()
            setdata([])

        }

        else if(str === "fridge"){
            router.push(`/mysearch/search?param=Fridge`)
            openbox(false);
            setinp("")
            setdata([])

        }

        else if(str === "washing machine"){
            router.push(`/mysearch/search?param=Washing Machine`)
            openbox(false);
            setinp("")
            setdata([])

        }

        else if(str === "ac"){
            router.push(`/mysearch/search?param=AC`)
            openbox(false);
            setinp("")
            setdata([])
        }
        else if(str === "keyboard"){
            router.push(`/mysearch/search?param=Keyboard`)
            openbox(false);
            setinp("")
            setdata([])
            
        }
        else if(str === "mouse"){
            router.push(`/mysearch/search?param=Mouse`)
            openbox(false);
            setinp("")
            setdata([])
        }
        else if(str === "trimmer"){
            router.push(`/mysearch/search?param=Trimmer`)
            openbox(false);
            setinp("")
            setdata([])
           
        }

        else{
            setproduct(false);
            openbox(false);
            setdata([]);
            router.push(`/mysearch/search`)
            
        }
    

    }

    


    useEffect(()=>{
        checkfilter()
        document.addEventListener("keydown",(e)=>{
            if(e.key === 'Enter'){
             
                searchresult()
            }
        })
        
    },[])

    const [prevparam, setprev]  = useState<string | null>("")

client.query({
    query: gql`
{
    getbycategory(category:"${param}"){
    _id    
    title
    spec
    rating
    brand
    price
    image
    }
}
`
}).then(async (result)=>{
    if(prevparam !== param ){
        setdata(result.data.getbycategory)
        setarr2(result.data.getbycategory)
        setlen((result.data.getbycategory).length)
        checkfilter()
        setprev(param)
    }
});

const [used , setuse] = useState(false);


function getselected (x:string){
    type arrt = Array<any>
    let arr: arrt
   

    // if(data.length !== 0){

    if(used){
        
         //@ts-ignore
         arr = arr3.filter(product=>product.brand === x)
         if(arr.length > 0 && data.length === arr3.length){
            //@ts-ignore
            setdata(arr)
            
          }

          else if(arr.length > 0 ){
            //@ts-ignore
            setdata(data.concat(arr))
          }


    }

    else{

        
        //@ts-ignore
        arr = arr2.filter(product=>product.brand === x)
          
          if(arr.length > 0 && data.length === len){
              //@ts-ignore
              setdata(arr)
              
            }
            else if(arr.length > 0){
                //@ts-ignore
                setdata(data.concat(arr))
            }
            
            else if(arr.length === 0){
                setdata(arr2)
            }
            
            else{
                setdata(arr2)
            }
            
            
            
            
            
        }
            
            
            
            console.log("func is working", len)
            // }
}


function removeselected (x:string){

    type arrt = Array<any>
    let arr: arrt

    //@ts-ignore
    arr = data.filter(product=>product.brand !== x)
   
    if(arr.length > 0){
        //@ts-ignore
    setdata(arr)
    }
    else{
        setdata(arr2)
    }


}

function handlerange (x:number, y: number){
    setuse(true)
    type arrt = Array<any>
    let arr: arrt

    //@ts-ignore
    arr = data.filter(product=>product.price >=x && product.price<= y)

    if(arr.length>0){
        //@ts-ignore
        setdata(arr)
         //@ts-ignore
        setarr3(arr)

        setlen1(arr.length)
    }

    else{
        setdata(arr2)
        setuse(false)
    }
    
}




    if(!param){
        return(

            <div className=" min-h-[800px] flex flex-col justify-center items-center sm1:min-h-[670px]"> 
             <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-30 border-b sm1:fixed sm1:z-30">
               <h1 className=" font-sans text-[27px] cursor-pointer sm1:hidden relative right-[100px]" onClick={gohome}>Electricart</h1>
            <div className=" flex flex-row items-start justify-center cursor-pointer  relative right-6 sm1:right-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </div>
             <input value={inp} ref={input} onChange={searchbox} type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:w-80 " autoFocus={true} />

    
            </nav>
            {/* searchbox */}

            <div className={box?"min-h-[100px] shadow-lg w-[384px] bg-[white] flex flex-col justify-start items-start fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
            {opt.map((item:string, index:number)=>(
                 <li onClick={()=>{handlesearchbox(item)}} key={index} className="text-[black] text-[18px] list-none select-none cursor-pointer ml-2 mt-2">{item}</li>
            ))}

            </div>

             <h1 className={isproduct?"text-[19px]":"hidden"}>Search Results will appear here.</h1> 
             <h1 className={!isproduct?"text-[19px]":"hidden"}>No Product Found !</h1> 

            </div>
        )
    }


    if(data.length === 0){
        
        return(
            <div className=" min-h-[900px] flex flex-col justify-center items-center"> 
            <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-30 border-b sm1:fixed sm1:z-30">
               <h1 className=" font-sans text-[27px] cursor-pointer sm1:hidden relative right-[100px]" onClick={gohome}>Electricart</h1>
            <div className=" flex flex-row items-start justify-center cursor-pointer  relative right-6 sm1:right-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </div>
             <input value={inp} ref={input} onChange={searchbox} type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:w-80 " />
    
            </nav>
    
             {/* searchbox */}

             <div className={box?"min-h-[100px] w-[384px] shadow-lg bg-[white] flex flex-col justify-start items-center fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
             
             {opt.map((item:string, index:number)=>(
                 <li onClick={()=>{handlesearchbox(item)}} key={index} className="text-[black] text-[18px] list-none select-none cursor-pointer ml-2 mt-2">{item}</li>
            ))}
               
                
            </div>
            
    
            
    
            
    
            <div className="flex flex-row justify-center items-start min-h-[900px] w-[100%] relative top-[100px] ">
                <Filter company={comp} getdata={getselected} removedata={removeselected} minimum ={min} setrange={handlerange}></Filter>
                <div className=" flex flex-row justify-start items-center min-h-[400px] mb-[130px] w-[1350px] bg-[white] flex-wrap ml-[150px] sm1:ml-[0px] sm1:w-[350px]">

              <Itemcardskeleton></Itemcardskeleton>
              <Itemcardskeleton></Itemcardskeleton>
              <Itemcardskeleton></Itemcardskeleton>
              <Itemcardskeleton></Itemcardskeleton>
           
               
                </div>
            </div>
    
            </div>

        )
    }

  

    return(

        <div className=" min-h-[900px] flex flex-col justify-center items-center"> 
        <nav className=" w-full h-14 bg-white flex flex-row  top-0 items-center justify-center select-none fixed z-30 border-b sm1:fixed sm1:z-30">
           <h1 className=" font-sans text-[27px] cursor-pointer sm1:hidden relative right-[100px]" onClick={gohome}>Electricart</h1>
        <div className=" flex flex-row items-start justify-center cursor-pointer  relative right-6 sm1:right-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </div>
         <input value={inp} ref={input} onChange={searchbox} type="search" placeholder="&nbsp; Search for products brand and more" className=" h-9 w-96 bg-[#CDF5FD] placeholder:text-grey rounded-lg sm1:w-80 "  />

        </nav>

         {/* searchbox */}

         <div className={box?"min-h-[100px] shadow-lg w-[384px] bg-[white] fixed z-40 top-[56px] left-[830px] sm1:left-[30px] sm1:w-[300px]":"hidden"}>
         {opt.map((item:string, index:number)=>(
                 <li onClick={()=>{handlesearchbox(item)}} key={index} className="text-[black] text-[18px] list-none select-none cursor-pointer ml-2 mt-2">{item}</li>
            ))}
            </div>
        

        {/* <h1 className="text-[19px]">Search Results will appear here.</h1> */}

        

        <div className="flex flex-row justify-center items-start min-h-[900px] w-[100%] relative top-[100px] ">
            <Filter company={comp} getdata={getselected} removedata={removeselected}  minimum ={min} setrange={handlerange}></Filter>
            <div className=" flex flex-row justify-start items-center min-h-[400px] mb-[130px] w-[1350px] bg-[white] flex-wrap ml-[150px] sm1:ml-[0px] sm1:w-[350px]">
            {data.map((item: itemtype, index:number)=>(
                <Itemcard key={index} id={item._id} title={item.title} spec={item.spec} rating={item.rating} price={item.price} image={item.image}></Itemcard>
            ))} 
          
          {/* <Itemcardskeleton></Itemcardskeleton>
          <Itemcardskeleton></Itemcardskeleton>
          <Itemcardskeleton></Itemcardskeleton>
          <Itemcardskeleton></Itemcardskeleton> */}
       
           
            </div>

           
        </div>

        </div>
    )
}