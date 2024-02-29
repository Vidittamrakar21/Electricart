export default function Cardskeleton () {
    return(
        <div className=" animate-pulse h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-center justify-start cursor-pointer sm1:h-[220px] sm1:w-[150px] sm1:ml-2" >
            <div className="h-[200px] mt-2  w-[200px] rounded-[8px] bg-slate-400 sm1:h-[140px] sm1:w-[140px]">
            
            </div>
            <div className=" h-[10px] mt-5 w-[180px] bg-slate-400 rounded-[8px] sm1:w-[120px]" ></div>
            <div className="  bg-slate-400 mt-5 h-[10px] w-[160px] rounded-[8px] sm1:w-[100px]"></div>
        </div>
    )
}