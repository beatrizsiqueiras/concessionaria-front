import React from 'react'
import { BsPersonPlus } from 'react-icons/bs'

const Deals = () => {
    return (
        <div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 col-span-6">
                    <div className="py-24 bg-gray-200">
                        <h2 className="text-center font-semibold text-3xl">
                            Novos
                        </h2>
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <div className="bg-[#f4f5f8] shadow-md">
                                <div className="relative">
									<img src="https://dsae.s3.amazonaws.com/00434116002697/Fotos/CUQ-3J38_01.jpg?u=20240410165618&auto=format&ixlib=react-9.5.1-beta.1&w=291&h=207&dpr=1&q=75" alt="" />
								</div>
                                <div className="p-5">
                                    <h3 className="mb-1 mt-1 text-xl">
                                        24 x R$ 1.200,00
                                    </h3>
                                    <p>Chevrolet</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                            <BsPersonPlus
                                                className="text-white"
                                                size={25}
                                            />
                                        </div>
                                        <p>4 passageiros</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#f4f5f8] shadow-md">
                                <div className="relative">
									<img src="" alt="" />
								</div>
                                <div className="p-5">
                                    <h3 className="mb-1 mt-1 text-xl">
                                        36 x R$ 850,50
                                    </h3>
                                    <p>Chevrolet</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                            <BsPersonPlus
                                                className="text-white"
                                                size={25}
                                            />
                                        </div>
                                        <p>4 passageiros</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#f4f5f8] shadow-md">
                                <div className="relative"></div>
                                <div className="p-5">
                                    <h3 className="mb-1 mt-1 text-xl">
                                        48 x R$ 650,75
                                    </h3>
                                    <p>Nova Saveiro</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                            <BsPersonPlus
                                                className="text-white"
                                                size={25}
                                            />
                                        </div>
                                        <p>2 passageiros</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#f4f5f8] shadow-md">
                                <div className="relative"></div>
                                <div className="p-5">
                                    <h3 className="mb-1 mt-1 text-xl">
                                        60 x R$ 530,25
                                    </h3>
                                    <p>Kwid</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                                            <BsPersonPlus
                                                className="text-white"
                                                size={25}
                                            />
                                        </div>
                                        <p>4 passageiros</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals
