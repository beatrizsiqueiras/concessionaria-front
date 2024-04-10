'use client'

import Image from 'next/image'
import { BsPersonPlus } from 'react-icons/bs'
import background from './img/background.png'
import car1 from './img/car1.png'
import car2 from './img/car2.png'
import car3 from './img/car3.png'
import car4 from './img/car4.png'

const Cards = () => {
    return (
        <div className="py-24 bg-gray-200">
            <h4 className="uppercase font-semibold text-center mb-1 text-red-500 text-xl">
                LET'S GO
            </h4>
            <h2 className="text-center font-semibold text-3xl">
                Ja conhece as nossas orfetas?
            </h2>
            <div className="grid grid-cols-4 gap-5 mt-10">
                <div className="bg-[#f4f5f8] shadow-md">
                    <div className="relative">
                        <Image
                            src={background}
                            alt="background"
                            className="fleet--clip"
                        />
                        <div className="absolute right-0 -bottom-10">
                            <Image src={car1} alt="car" className="w-72" />
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="mb-1 mt-1 text-xl">24 x R$ 1.200,00</h3>
                        <p>Chevrolet</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                <BsPersonPlus className='text-white' size={25}/>
                            </div>
                            <p>4 passageiros</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f5f8] shadow-md">
                    <div className="relative">
                        <Image
                            src={background}
                            alt="background"
                            className="fleet--clip"
                        />
                        <div className="absolute right-0 -bottom-10">
                            <Image src={car2} alt="car" className="w-72" />
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="mb-1 mt-1 text-xl">36 x R$ 850,50</h3>
                        <p>Chevrolet</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                <BsPersonPlus className='text-white' size={25}/>
                            </div>
                            <p>4 passageiros</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f5f8] shadow-md">
                    <div className="relative">
                        <Image
                            src={background}
                            alt="background"
                            className="fleet--clip"
                        />
                        <div className="absolute right-0 -bottom-10">
                            <Image src={car3} alt="car" className="w-72" />
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="mb-1 mt-1 text-xl">48 x R$ 650,75</h3>
                        <p>Nova Saveiro</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                <BsPersonPlus className='text-white' size={25}/>
                            </div>
                            <p>2 passageiros</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f5f8] shadow-md">
                    <div className="relative">
                        <Image
                            src={background}
                            alt="background"
                            className="fleet--clip"
                        />
                        <div className="absolute right-0 -bottom-10">
                            <Image src={car4} alt="car" className="w-72" />
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="mb-1 mt-1 text-xl">60 x R$ 530,25</h3>
                        <p>Kwid</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                <BsPersonPlus className='text-white' size={25}/>
                            </div>
                            <p>4 passageiros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
