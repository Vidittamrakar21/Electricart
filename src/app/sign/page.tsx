
"use client"

import './sign.css'
import React from 'react';
import { useState,useContext,useRef, CSSProperties} from 'react';
import { EcoContext } from '@/context/contextapi';
import {auth} from "../../app/firebase"
import {signInWithPopup , GoogleAuthProvider} from "firebase/auth"
import {useRouter} from 'next/navigation'
import ClipLoader from "react-spinners/ClipLoader";

import { gql} from '@apollo/client';
// import { cookies } from 'next/headers'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie'

export const gqclient = new ApolloClient({
  uri: 'https://electricart-order-server.vercel.app/graphql',
  cache: new InMemoryCache(),
});


const CREATE_USER = gql`
mutation Mutation($name: String, $email: String) {
    createuser(name: $name, email: $email)

    
  }
`

 




function Signpage (){
    const data = useContext(EcoContext)
    const router = useRouter()
   
    const [but , show] = useState(false)
    const [sign , showsign] = useState(true)
    const [load , makeload] = useState(false)

    const override: CSSProperties = {
        position: "absolute",
        top: "490px"
      };
      

    const googleAuth = new GoogleAuthProvider();


    const handleclick = () =>{
        show(true);
    }

    const openemail = ()=>{
        showsign(false)
    }

    const closemail = ()=>{
        showsign(true)
    }

    const closesign = ()=>{
        router.push('/')
    }

    const opencard = ()=>{
       data?.openopt(true)
       data?.openlog(false)
    }

  
    const signwithgoogle= async ()=>{
        makeload(true)
       const result  =  await signInWithPopup(auth, googleAuth);
       

       if(result.user.emailVerified === true && result.user.refreshToken){

      await  gqclient.mutate({
            mutation: CREATE_USER,
            variables: {
                name: result.user.displayName,
                email: result.user.email
            }
            
        }).then((apiresult:any)=>{
            if(apiresult.data.createuser){
                makeload(false);
                Cookies.set('RF_TOKEN', apiresult.data.createuser)
                
                router.push('/')
                
            }
            else{
                alert("Unable to login.")
            }
            
          
        })

        

     
       }
       
       
    }

    const mail = useRef();
    const pass = useRef();

    // const signinwithemail = async () =>{
    //    a.opencom();
    //    a.closelog()

    // }
    
    
    return(
       <div id='base'>
         <div className={true?"outer ":"gayab"}>
            <div className={sign?"sign": "gayab"}>
                <div id="cross" onClick={closesign}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="grey" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                </div>
                <h3 id='getstart'>Get Started</h3>

             
                <h1 id='headpro'>Electricart</h1>
                <div className="coon" onClick={signwithgoogle} >
                    <div id='gog'>
                        <img src="/images/Google Icon.png" alt="" />
                    </div>
                    <h4>Continue with Google</h4>
                </div>

               

                {/* <div className="coon" onClick={openemail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="grey" viewBox="0 0 16 16">
                 <path d="M0 4a2 2 0 0true 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                 </svg>

                 <h4>Continue with Email</h4>
                </div> */}
                
                <h5 id='terms'>I agree to the <span>Terms & Conditions</span> & <span>Privacy Policy</span></h5>

                <ClipLoader color="#36d7b7" loading={load} cssOverride={override}/>

                <div id='sgbox'>

                </div>
               
            </div>

            <div className={!sign?"signmail":"gayab"}>
                <div id="caret" onClick={closemail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black"  viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                 </svg>

                </div>
                    <h2>Login with Email</h2>
                    <h5>Email</h5>
                    <input type="email" className='ee' />
                    <h5>Password</h5> 
                    <input type="password" className='ee'/>
                    <button className='econt' >Continue</button>
            </div>
        </div>
       </div>
    )
}   

export default Signpage;