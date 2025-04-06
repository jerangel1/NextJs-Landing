"use client"
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';
import LotteryBalls from './LotteryBalls';
import HeroSection from './HeroSection';
import { useState } from 'react';
import { LotteryProductType, LotteryProducts } from './Dropdownone';

const Banner = () => {
    const [selectedProduct, setSelectedProduct] = useState<LotteryProductType>(LotteryProducts[0])
    
    const handleProductChange = (product: LotteryProductType) => {
        setSelectedProduct(product);
    }
    
    return (
        <main className='overflow-hidden min-h-screen pt-20'>
            <LotteryBalls />
            <div className="relative">
                <div className="mx-auto">
                    <HeroSection 
                        badge="Pronosticon"
                        title1="Descubre tus"
                        title2="Resultados de Lotería"
                    />

                    {/* DROPDOWN BUTTONS */}
                    <div className="mx-auto max-w-4xl mt-2 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow relative ">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
                            <div className="w-full sm:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Seleccionar Lotería
                                </label>
                                <Dropdownone selectedProduct={selectedProduct} onProductChange={handleProductChange} />
                            </div>
                            <div className="w-full sm:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Fecha del Sorteo
                                </label>
                                <Dropdowntwo selectedProduct={selectedProduct.id} />
                            </div>
                            <div className="w-full sm:w-auto mt-4 sm:mt-0">
                                <button className="bg-purple w-full sm:w-auto hover:bg-purple-700 text-white font-bold py-4 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
