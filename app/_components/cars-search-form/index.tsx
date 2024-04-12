import React from 'react'

import { CiSearch } from 'react-icons/ci'

const CarsSearchForm = () => {
    return (
        <div className="py-24 bg-gray-200 text-gray-800">
            <h2 className="text-center font-semibold text-2xl">
                Encontre seu veículo
            </h2>
            <div className="grid grid-cols-4 gap-5 mt-10 m-5">
                <select className="h-10 border border-[#006494] rounded text-center">
                    <option value="">Marca</option>
                    <option value="audi">AUDI (10)</option>
                    <option value="bmw">BMW (9)</option>
                    <option value="chery">CHERY (12)</option>
                    <option value="chevrolet">CHEVROLET (55)</option>
                    <option value="citroen">CITROËN (35)</option>
                    <option value="dodge">DODGE (1)</option>
                    <option value="fiat">FIAT (120)</option>
                    <option value="ford">FORD (75)</option>
                    <option value="honda">Honda (30)</option>
                    <option value="hyundai">HYUNDAI (67)</option>
                    <option value="jac">JAC (5)</option>
                    <option value="jaguar">JAGUAR (3)</option>
                    <option value="jeep">JEEP (330)</option>
                    <option value="kia">KIA (21)</option>
                    <option value="land-rover">LAND ROVER (8)</option>
                    <option value="lexus">LEXUS (1)</option>
                    <option value="mercedes-benz">MERCEDES-BENZ (7)</option>
                    <option value="mini">MINI (8)</option>
                    <option value="mitsubishi">MITSUBISHI (14)</option>
                    <option value="nissan">NISSAN (41)</option>
                    <option value="peugeot">PEUGEOT (28)</option>
                    <option value="ram">RAM (16)</option>
                    <option value="renault">RENAULT (95)</option>
                    <option value="subaru">SUBARU (1)</option>
                    <option value="suzuki">SUZUKI (1)</option>
                    <option value="toyota">TOYOTA (18)</option>
                    <option value="volkswagen">VOLKSWAGEN (126)</option>
                    <option value="volvo">VOLVO (3)</option>
                </select>
                <select className="h-10 border border-[#006494] rounded text-center">
                    <option value="">Modelo</option>
                    <option value="cobalt">COBALT (3)</option>
                    <option value="cruze">CRUZE (8)</option>
                    <option value="equinox">EQUINOX (1)</option>
                    <option value="joy">JOY (1)</option>
                    <option value="montana">MONTANA (1)</option>
                    <option value="onix">ONIX (13)</option>
                    <option value="prisma">PRISMA (1)</option>
                    <option value="s10">S10 (12)</option>
                    <option value="spin">SPIN (1)</option>
                    <option value="tracker">TRACKER (14)</option>
                </select>
                <select className="h-10 border border-[#006494] rounded text-center">
                    <option value="">Versão</option>
                    <option value="14-mpfi-ltz-8v-1632">
                        1.4 MPFI LTZ 8V (1)
                    </option>
                    <option value="18-mpfi-ltz-8v-1640">
                        1.8 MPFI LTZ 8V (2)
                    </option>
                </select>
                <button
                    type="submit"
                    className="bg-[#006494] rounded text-white text-center"
                >
                    Pesquisar
                </button>
            </div>
        </div>
    )
}

export default CarsSearchForm
