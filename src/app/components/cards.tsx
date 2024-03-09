import {useRouter} from 'next/navigation'

type productype = {
    item : string
    price: string
    image: string
}


export default function Card (props: productype ) {
    const router = useRouter();

    const handleclick = () => {
        router.push(`/search?param=${props.item}`)
    }

    
    return(
        <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 flex flex-col items-center justify-start cursor-pointer sm1:h-[220px] sm1:w-[150px] sm1:ml-2" >
            <div className="h-[180px] w-[220px] sm1:h-[140px] sm1:w-[140px] mt-3">
                <img className="h-[100%] w-[100%]" src={props.image} alt="" />
            </div>
            <h2 className=" mt-3 text-[#777777]" >{props.item}</h2>
            <h3>from &#8377; {props.price} </h3>
        </div>
    )
}