import Card from "./cards"
import Cardskeleton from "./cardskeleton"

export default function Container () {
    return(
        <div className=" min-h-[400px] w-[1600px] bg-[white] mt-8 flex flex-row flex-wrap justify-center items-center mb-8 select-none sm1:w-[340px]">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            {/* <Cardskeleton></Cardskeleton>
            <Cardskeleton></Cardskeleton>
            <Cardskeleton></Cardskeleton>
            <Cardskeleton></Cardskeleton>
            <Cardskeleton></Cardskeleton>
            <Cardskeleton></Cardskeleton> */}

        </div>
    )
}