
import Corousel from "./corousel"
import Container from "./container"
import Recently from "./recently"
import { useEffect,useState } from "react"
import { gqclient } from "@/app/sign/page"
import { gql} from '@apollo/client';
import Cookies from 'js-cookie'
import Recentskeleton from "./recentskeleton"

const finduser = gql`
mutation Mutation($uid: String) {
    findoneuser(uid: $uid) {
      
      recently
      
    }
  }

`


const CREATE_USER = gql`
mutation Mutation($token: String) {
    checkuser(token: $token){
      name
    }

    
  }
`

export default function Front (){
    type usertok = {
        name : string
        email: string
        id: string
        iat: number
        exp: number
      }
    
    const [udata, setudata] = useState<usertok>()
      const validateuser = async ()=> {
        
        const cook = Cookies.get('RF_TOKEN')
        const accook = Cookies.get('AC_TOKEN')
        if(cook && accook){
          Cookies.remove('AC_TOKEN')
          window.location.reload()

        }
      }

      const [arr,setarr] = useState([])

const findone = async ()=>{
    const id  = Cookies.get('uid');
    if(id){
        gqclient.mutate({
            mutation: finduser,
            variables: {
                uid: id
            }
        }).then((res)=> {
          let arra: Array<string> = []
          let count = 0;
          for (let index = (res.data.findoneuser.recently).length - 1; index >=0; index--) {
            arra[count] = (res.data.findoneuser.recently)[index]
            count ++
          }
          //@ts-ignore
          setarr(arra)
        
        })
    }
}


    
      useEffect(()=>{
      
  
          validateuser()
          findone();
        
        
      },[])
    return(
        <div className="flex items-center justify-start flex-col">
           
            <Corousel></Corousel>
           
            <Container></Container>

            {arr.length> 0 ? <><h1 className="text-[19px] font-[500] relative right-[700px] sm1:right-[80px]">Recently Viewed</h1>
            <Recently data = {arr}></Recently></>: <></>}
        </div>
    )
}