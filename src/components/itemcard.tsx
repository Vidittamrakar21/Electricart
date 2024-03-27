import {useRouter} from 'next/navigation'
import { gql } from '@apollo/client'
import { gqclient } from '@/app/sign/page'
import Cookies from 'js-cookie'
const updaterecentview = gql`
mutation Mutation($uid: String, $pid: String) {
    recentpost(uid: $uid, pid: $pid)
  }
`

type itemtype = {
    id: string
    title: string
    spec: string
    rating: number
    price: number
    image: string

}

export  default function Itemcard (props: itemtype) {

    const router = useRouter()

    const handleroute = async () =>{
          const iid = Cookies.get('uid')
          if(iid){

            await gqclient.mutate({
              mutation: updaterecentview,
              variables: {
                uid: iid,
                pid: props.id
              }
            }).then(()=>{
              router.push(`/products/product?id=${props.id}`)
              
            })
          }
          
          else{
            router.push(`/products/product?id=${props.id}`)

          }
            
    }

    const truncateTitle = (title:string, maxLength:number) => {
        if (title.length <= maxLength) {
          return title;
        } else {
          const words = title.split(' ');
          const truncatedTitle = words.slice(0, maxLength).join(' ');
          return truncatedTitle + '...';
        }
      };
    
    

    return(
        <div onClick={handleroute} className=" h-[440px] w-[320px] bg-[white] mt-4 ml-4 flex flex-col items-start justify-start cursor-pointer sm1:h-[300px] sm1:w-[160px] sm1:ml-2" >
        <div className="h-[250px] w-[320px] sm1:h-[140px] sm1:w-[160px] flex items-center justify-center bg-[white]">
            <img className="min-h-[50%] max-h-[100%] min-w-[50%] max-w-[100%]" src={props.image} alt="" />
        </div> 
        <h2 className=" mt-3 text-[black] ml-1" >{truncateTitle(props.title,6)}</h2>
        <h4 className="text-[13px] text-[#808080] font-[400] ml-1">{props.spec}</h4>
        <div className="w-[40px] h-[20px] bg-[green] text-[white] mt-2 ml-1 text-[13px] flex items-center justify-center rounded-[5px]">
         {props.rating} &#9733;
        </div>
        <h3 className="font-[600] ml-1 mt-1"> &#8377; {props.price} </h3>
    </div>
    )
}