

import Navbar from "./nav"
import Corousel from "./corousel"
import Container from "./container"
import Footer from "./footer"
import Signpage from "./sign/sign"

export default function Front (){
    return(
        <div className="flex items-center justify-start flex-col">
            {/* <Signpage></Signpage> */}
            <Corousel></Corousel>
            <Container></Container>
            {/* <Footer></Footer> */}
        </div>
    )
}