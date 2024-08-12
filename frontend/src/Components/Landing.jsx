import snaplogo from "../assets/snaplogo.svg";
import image from "../assets/image.png";
import image1 from "../assets/image1.jpg";

import features from "../assets/features.svg";
import search from "../assets/searche.png"
import Gallery from "./Gallery";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'
import Ads from "./Ads";


export default function Landing() {
    const navigation = [
        { name: "Home", href: "#" },
        { name: "Shop", href: "#" },
        { name: "About us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
    ];


    return (
        <div style={{ fontFamily: 'Rubik' }}>
            <header className=" inset-x-0 top-0 z-50 ">
                <nav
                    aria-label="Global"
                    className="flex w-full items-center justify-between  px-[150px] py-[20px]"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img alt="" src={snaplogo} className="h-10 w-auto" />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-m font-medium leading-6 text-gray-900"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href=""><img src={search} alt="" /></a>
                    </div>

                </nav>
            </header>






            <Swiper
                spaceBetween={50}
                slidesPerView={1}

                pagination={{ clickable: true }}

            >
                <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
            </Swiper>

            <div className="w-full my-[50px] ">
                <img src={features} className="mx-auto mt-10 w-auto" />
            </div>
            <div className=" my-[100px]">
                <h1 className="mx-auto mt-10 w-fit text-3xl font-medium">Featured Products</h1>
            </div>

            <div className="gallery my-[100px]  mx-[150px] flex flex-col justify-center items-center">
                <Gallery />
            </div>
            <Ads />
            <div className="mx-[150px] my-[100px]">

            </div>



        </div>
    );
}

