import Navbar from "./nav"
import Corousel from "./corousel"
import Container from "./container"
import Footer from "./footer"

export default function Front (){
    return(
        <div className="flex items-center justify-start flex-col">
            <Navbar></Navbar>
            <Corousel></Corousel>
            <Container></Container>
            <Footer></Footer>
        </div>
    )
}