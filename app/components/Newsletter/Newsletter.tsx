const Newsletter = () => {
    return (
        <div id="join-section" className='-mt-32 relative'>
            <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-newsletter rounded-lg relative overflow-hidden">
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8 relative ">
                    {/* COLUMN-1 */}
                    <div>
                        <h3 className="text-5xl font-bold mb-3 text-white drop-shadow-lg font-medium">
                            Únete a Nuestro Newsletter
                        </h3>
                        <h4 className="text-xl font-medium mb-7 text-white drop-shadow-lg font-medium">
                            Recibe los resultados de lotería del día directamente en tu correo
                        </h4>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                name="email" 
                                className="py-4 text-sm w-full text-black bg-white rounded-md pl-4 placeholder:text-gray-500 shadow-lg" 
                                placeholder="Ingresa tu correo electrónico" 
                                autoComplete="off" 
                            />
                            <button className="bg-purple hover:bg-purple-700 text-white font-medium py-2 px-6 rounded shadow-lg transition-colors font-medium">
                                Suscribirme
                            </button>
                        </div>
                        <p className="text-sm text-white mt-3 drop-shadow-lg font-medium">
                            * Recibirás resultados diarios de las principales loterías
                        </p>
                    </div>

                    {/* COLUMN-2 */}
                    <div className='hidden sm:block'>
                        <div className='float-right -mt-32'>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;