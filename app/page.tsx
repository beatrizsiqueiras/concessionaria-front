import CarouselCars from './_components/carousel'
import Cards from './_components/cards-home'
import ListCarsBrands from './_components/list-cars-brands'
import CarsSearchForm from './_components/cars-search-form'

export default function Home() {
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
                <CarouselCars />
            </div>
            <div className="col-start-1 col-span-6">
                <Cards />
            </div>
            <div className="col-start-1 col-span-6">
                <ListCarsBrands />
            </div>
            <div className="col-start-1 col-span-6">
                <CarsSearchForm />
            </div>
        </div>
    )
}
