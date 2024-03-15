


export  default function Itemcardskeleton () {

    return(
        <div  className=" animate-pulse h-[440px] w-[320px] bg-[white] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[300px] sm1:w-[160px] sm1:ml-2" >
        <div className="h-[250px] w-[320px] bg-slate-400 sm1:h-[140px] sm1:w-[160px] rounded-[8px]">
           
        </div>
        <div className="  bg-slate-400 mt-5 h-[10px] w-[160px] rounded-[8px] sm1:w-[100px]"></div>

        <div className="  bg-slate-400 mt-5 h-[10px] w-[60px] rounded-[8px] sm1:w-[100px]"></div>

        <div className="w-[40px] h-[20px]  bg-slate-400 text-[white] mt-2 ml-1 text-[13px] flex items-center justify-center rounded-[5px]">
       
        </div>
        <div className="  bg-slate-400 mt-5 h-[10px] w-[160px] rounded-[8px] sm1:w-[100px]"></div>

    </div>
    )
}