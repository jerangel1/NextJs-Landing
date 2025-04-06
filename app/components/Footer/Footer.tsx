import Link from "next/link";
import Image from "next/image";

// NAVIGATION LINKS DATA
interface NavigationType {
    name: string;
    href: string;
}

const navigation: NavigationType[] = [
    { name: 'Inicio', href: '/' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Sorteos', href: '/sorteos' },
]

const Footer = () => {
    return (
        <div className="bg-bgpurple -mt-64" id="first-section">
            <div className="mx-auto max-w-7xl pt-64 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                    {/* COLUMN-1: LOGO AND DESCRIPTION */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Image 
                                src={'/assets/logo/Logo2.svg'} 
                                alt="Pronosticon Logo" 
                                width={120} 
                                height={40} 
                            />
                        </div>
                        <p className='text-white text-sm leading-6 mb-6'>
                            Tus resultados de lotería al instante, con Pronosticon
                        </p>
                        <div className='flex gap-4 mb-6'>
                            <Link href="https://twitter.com/pronosticon" target="_blank" className="hover:opacity-80 transition-opacity">
                                <Image 
                                    src={'/assets/footer/twitter.svg'} 
                                    alt="Twitter" 
                                    width={24} 
                                    height={24} 
                                    className='footer-icons' 
                                />
                            </Link>
                            <Link href="https://instagram.com/pronosticon" target="_blank" className="hover:opacity-80 transition-opacity">
                                <Image 
                                    src={'/assets/footer/insta.svg'} 
                                    alt="Instagram" 
                                    width={24} 
                                    height={24} 
                                    className='footer-icons' 
                                />
                            </Link>
                        </div>
                    </div>

                    {/* COLUMN-2: NAVIGATION */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-6">Navegación</h3>
                        <ul className="space-y-3">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href} 
                                        className="text-offwhite text-sm hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN-3: CONTACT INFO */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-6">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="text-offwhite text-sm">
                                <span className="block">Email:</span>
                                <a href="mailto:info@pronosticon.com" className="hover:text-white transition-colors">
                                    info@pronosticon.com
                                </a>
                            </li>
                            <li className="text-offwhite text-sm">
                                <span className="block">Teléfono:</span>
                                <a href="tel:+123456789" className="hover:text-white transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-gray-700 pt-8 mt-8">
                    <p className="text-center text-sm text-offwhite">
                        {new Date().getFullYear()} - Todos los Derechos Reservados por 
                        <Link href="https://pronosticon.com" target="_blank" className="ml-1 hover:text-white transition-colors">Pronosticon</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
