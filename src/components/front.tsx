
import Corousel from "./corousel"
import Container from "./container"
import Recently from "./recently"
import { useEffect,useState } from "react"
import { gqclient } from "@/app/sign/page"
import { gql} from '@apollo/client';
import Cookies from 'js-cookie'
import { reload } from "firebase/auth"

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
        console.log("inside func")
        const cook = Cookies.get('RF_TOKEN')
        const accook = Cookies.get('AC_TOKEN')
        if(cook && accook){
          Cookies.remove('AC_TOKEN')
          window.location.reload()

        }
      }
    
      useEffect(()=>{
      
  
          validateuser()
          
        
        
      },[])
    return(
        <div className="flex items-center justify-start flex-col">
           
            <Corousel></Corousel>
           
            <Container></Container>

            <h1 className="text-[19px] font-[500] relative right-[700px] sm1:right-[80px]">Recently Viewed</h1>
            <Recently></Recently>
        </div>
    )
}