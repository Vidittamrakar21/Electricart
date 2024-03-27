import {useRouter} from 'next/navigation'
import { gql } from '@apollo/client';
import { gqclient } from '@/app/sign/page';
import { useEffect,useState } from 'react';
import Cookies from 'js-cookie';
import Recentcard from './recentcard';

const finduser = gql`
mutation Mutation($uid: String) {
    findoneuser(uid: $uid) {
      
      recently
      
    }
  }

`

type propstype = {
    data: Array<string>
}


export default function Recently (props: propstype) {
//     const [arr,setarr] = useState([])

// const findone = async ()=>{
//     const id  = Cookies.get('uid');
//     if(id){
//         gqclient.mutate({
//             mutation: finduser,
//             variables: {
//                 uid: id
//             }
//         }).then((res)=> {setarr(res.data.findoneuser.recently)})
//     }
// }

// useEffect(()=>{

//     findone();

// },[])

    const router = useRouter();

    const handleclick = () => {
        router.push('/product')
    }

    return(
     <div className=" h-[370px] w-[1600px] bg-[white] mt-8 flex flex-row flex-wrap justify-start items-center mb-8 select-none sm1:w-[340px] sm1:overflow-x-scroll sm1:flex-nowrap sm1:justify-start sm1:h-[280px] sm1:mt-2">
       
        {(props.data).map((item, index)=>(
            <Recentcard id={item} key={index}></Recentcard>
        ))}         
       
    </div>
    )
}