import {useRouter} from 'next/navigation'

type productype = {
    item : string
    price: string
    image: string
}


export default function Card (props: productype ) {
    const router = useRouter();

    const handleclick = () => {
        if(props.item === 'Air Conditioner')
        {
            router.push(`/mysearch/search?param=AC`)
        }
        else if(props.item === 'Smartphone'){
            router.push(`/mysearch/search?param=Mobile`)
        }

        else if(props.item === 'TV'){
            router.push(`/mysearch/search?param=Tv`)
        }
        else{
            
            router.push(`/mysearch/search?param=${props.item}`)
        }
    }

    
    return(
        <div onClick={handleclick} className=" h-[320px] w-[230px] border border-[#6668] mt-4 ml-4 mb-3 flex flex-col items-center justify-start cursor-pointer sm1:h-[220px] sm1:w-[150px] sm1:ml-2" >
            <div className="h-[180px] w-[220px] sm1:h-[140px] sm1:w-[140px] mt-3 flex items-center justify-center bg-[white]">
                <img className="min-h-[50%] max-h-[100%] min-w-[50%] max-w-[100%]" src={props.image} alt="" />
            </div>
            <h2 className=" mt-3 text-[#777777]" >{props.item}</h2>
            <h3>from &#8377; {props.price} </h3>
        </div>
    )
}