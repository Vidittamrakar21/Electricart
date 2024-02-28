
import Corousel from "./corousel"
import Container from "./container"



export default function Front (){
    return(
        <div className="flex items-center justify-start flex-col">
           
            <Corousel></Corousel>
            <Container></Container>
     
        </div>
    )
}