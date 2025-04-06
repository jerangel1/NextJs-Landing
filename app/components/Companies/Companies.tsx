"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
    name: string;
}

const data: Data[] = [
    {
        imgSrc: "https://betsol-web.s3.us-east-2.amazonaws.com/florida-lottery.avif",
        name: "Florida Lottery"
    },
    {
        imgSrc: "https://betsol-web.s3.us-east-2.amazonaws.com/LoteriaNacionalGORDITO.svg",
        name: "Lotería Nacional Gordito"
    },
    {
        imgSrc: "https://betsol-web.s3.us-east-2.amazonaws.com/nacional.avif",
        name: "Lotería Nacional"
    },
    {
        imgSrc: "https://betsol-web.s3.us-east-2.amazonaws.com/tresMonazos.avif",
        name: "Tres Monazos"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg my-10 text-lightgrey">Nuestras Loterías</h2>
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="px-4">
                                    <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center h-32 hover:scale-105 transition-transform duration-300">
                                        <img 
                                            src={item.imgSrc} 
                                            alt={item.name} 
                                            className="max-h-24 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
