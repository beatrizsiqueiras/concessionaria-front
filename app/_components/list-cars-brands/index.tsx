'use client'


const ListCarsBrands = () => {
    return (
        <div className="py-18 bg-gray-200">
            <div className=" bg-[#006494] py-5 text-white">
                <h2 className="text-center font-semibold text-2xl">
                    Navegue por nossas marcas
                </h2>
            </div>
            <div className="grid grid-cols-8 gap-5 m-5">
                <div className=" size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/2020/12/b78a935f-9390-4211-a5a5-108a8d421756-novo_logo_fiat.svg" />
                </div>
                <div className="size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/makes/honda.svg" />
                </div>
                <div className="size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/2023/07/3a2a0e59-a13a-4d98-8e7e-909734522353-logo_ford.svg" />
                </div>
                <div className="size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/2020/11/3a672178-56f0-482e-9e71-e4791783d531-logo_2020_nissan_sinal.svg" />
                </div>
                <div className="size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/2020/08/1268e83b-f86a-4302-af0c-cb7bf5cc9abe-hyundai.svg" />
                </div>
                <div className="size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/makes/jeep.svg" />
                </div>
                <div className="size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/2022/11/3e2fd3e5-94d1-432a-9390-69914381e08c-logo_citroen.svg" />
                </div>
                <div className="size-16">
                    <img src="https://gruposinal-prod.imgix.net/upload/2023/07/d165bd1a-7a09-435b-9e9a-fe4e7b8f83a1-logo_ram.svg" />
                </div>
            </div>
        </div>
    )
}

export default ListCarsBrands
