"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA
interface LotteryResultType {
    lotteryName: string;
    date: string;
    drawTime: string;
    firstPrize: string;
    secondPrize: string;
    thirdPrize: string;
    logoSrc: string;
}

const lotteryResults: LotteryResultType[] = [
    {
        lotteryName: "Lotería Nacional",
        date: "05 de Abril, 2025",
        drawTime: "20:00 PM",
        firstPrize: "123456",
        secondPrize: "789012",
        thirdPrize: "345678",
        logoSrc: "https://betsol-web.s3.us-east-2.amazonaws.com/nacional.avif"
    },
    {
        lotteryName: "Florida Lottery",
        date: "04 de Abril, 2025",
        drawTime: "19:30 PM",
        firstPrize: "567890",
        secondPrize: "234567",
        thirdPrize: "901234",
        logoSrc: "https://betsol-web.s3.us-east-2.amazonaws.com/florida-lottery.avif"
    },
    {
        lotteryName: "Tres Monazos",
        date: "03 de Abril, 2025",
        drawTime: "21:00 PM",
        firstPrize: "246810",
        secondPrize: "135790",
        thirdPrize: "987654",
        logoSrc: "https://betsol-web.s3.us-east-2.amazonaws.com/tresMonazos.avif"
    }
]

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div id="lottery-results-section" className='bg-bgpink'>
                <div className="mx-auto max-w-2xl px-4 pt-16 pb-64 sm:pt-32 lg:max-w-7xl lg:px-8">
                    <div className='sm:flex justify-between items-center pb-6'>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
                            Últimos Resultados de Lotería
                        </h2>
                        <div>
                            <button className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                                Ver Todos los Resultados
                            </button>
                        </div>
                    </div>

                    <Slider {...settings}>
                        {lotteryResults.map((result, i) => (
                            <div key={i} className="p-2">
                                <div className='bg-white m-4 pt-8 px-6 pb-10 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                                    <div className='relative mb-4'>
                                        <Image 
                                            src={result.logoSrc} 
                                            alt={`${result.lotteryName} Logo`} 
                                            width={100} 
                                            height={100} 
                                            className="mx-auto rounded-full"
                                        />
                                    </div>
                                    <h3 className='text-xl font-bold text-purple mb-2'>{result.lotteryName}</h3>
                                    <p className='text-sm text-gray-600 mb-4'>
                                        {result.date} - {result.drawTime}
                                    </p>
                                    <div className='grid grid-cols-3 gap-2 mb-4'>
                                        <div>
                                            <span className='text-sm text-gray-500'>1er Premio</span>
                                            <p className='text-lg font-semibold text-green-600'>{result.firstPrize}</p>
                                        </div>
                                        <div>
                                            <span className='text-sm text-gray-500'>2do Premio</span>
                                            <p className='text-lg font-semibold text-blue-600'>{result.secondPrize}</p>
                                        </div>
                                        <div>
                                            <span className='text-sm text-gray-500'>3er Premio</span>
                                            <p className='text-lg font-semibold text-red-600'>{result.thirdPrize}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
