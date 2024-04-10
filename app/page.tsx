import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CarouselCars from './_components/carousel'
import Cards from './_components/cards'

export default function Home() {
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
                <CarouselCars />
            </div>
            <div className="col-start-1 col-span-6">
                <Cards/>
            </div>
            <div className="col-end-7 col-span-2">03</div>
            <div className="col-start-1 col-end-7">04</div>
        </div>
    )
}
