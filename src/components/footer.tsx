"use client"

export default function Footer () {

    const func = ()=>{
        window.location.href = "https://www.linkedin.com/in/vidit-tamrakar-877a58249/" 
    }

    return (
        <footer className="bg-[#4C3F91] h-[280px] w-[100%] flex flex-col justify-center items-center z-30 ">
            <h1 className="text-[95px] font-sans font-[900] text-[#aaaaaabd] sm1:text-[55px]">Electricart</h1>
            <h4 className="text-[#f1f1f183]">&copy; Electricart 2024 | All Rights Reserved.</h4>
            <h4 onClick={func} className="text-[#f1f1f183] cursor-pointer">Made with ❤️ by <span className=" underline">Vidit Tamrakar</span></h4>
        </footer>
    )
}