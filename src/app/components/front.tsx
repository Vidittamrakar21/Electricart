
import Corousel from "./corousel"
import Container from "./container"
import Recently from "./recently"


export default function Front (){
    return(
        <div className="flex items-center justify-start flex-col">
           
            <Corousel></Corousel>
            <Container></Container>
            <h1 className="text-[19px] font-[500] relative right-[700px] sm1:right-[80px]">Recently Viewed</h1>
            <Recently></Recently>
        </div>
    )
}