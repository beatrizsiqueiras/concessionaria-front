'use client'

import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const CarouselCars = () => {
    const carsImages = [
        {
            url: 'https://www.hojeemdia.com.br/image/policy:1.48542.1628387191:1628387191/image.jpg?f=2x1&w=1000&',
        },
        {
            url: 'https://www.tribunapr.com.br/wp-content/uploads/2020/10/09225054/seminovos-toyota-sulpar_Rodolfo-Buhrer-PRINCIPAL-970x550.jpg',
        },
        {
            url: 'https://dinamicarpneus.com.br/wp-content/uploads/2023/03/carros-enfileirados.jpg',
        },
        {
            url: 'https://www.autoindustria.com.br/wp-content/uploads/2020/07/concessionarias-VW-1280x640.jpeg',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const previousSlide = () => {
        const isFisrtSlide = currentIndex === 0
        const newIndex = isFisrtSlide ? carsImages.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === carsImages.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
            <div
                style={{
                    backgroundImage: `url(${carsImages[currentIndex].url})`,
                }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={previousSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {carsImages.map((image, imageIndex) => (
                    <div
                        className="text-2xl cursor-pointer"
                        onClick={() => setCurrentIndex(imageIndex)}
                        key={imageIndex}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarouselCars
