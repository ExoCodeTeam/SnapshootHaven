import React, { useState, useEffect } from 'react';
import ad1 from '../../assets/Ad.jpg';
import ad2 from '../../assets/Ad2.jpg';
import ad3 from '../../assets/Ad3.jpg';
import ad4 from '../../assets/Ad4.jfif';

const ads = [ad1, ad2, ad3, ad4]; // Array of ad images

export default function Ads() {
    const [ad1Index, setAd1Index] = useState(0);
    const [ad2Index, setAd2Index] = useState(1);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        // Initial check
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAd1Index(prevIndex => (prevIndex + 1) % ads.length);
            setAd2Index(prevIndex => (prevIndex + 2) % ads.length); // Offset for different image
        }, 5000); // 5000 ms = 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {isSmallScreen ? (
                <div className="mx-[25px] grid grid-cols-1 gap-[20px]
            xl:mx-[150px]
            lg:mx-[100px]
            sm:mx-[50px]">
                    <img src={ads[ad1Index]} alt="Advertisement 1" className="w-full  h-full object-cover rounded-md" />
                </div>
            ) : (
                <div className="mx-[25px] grid grid-cols-2 gap-[20px]
                xl:mx-[150px]
                lg:mx-[100px]
                sm:mx-[50px]">
                    <img src={ads[ad1Index]} alt="Advertisement 1" className="w-full  h-full object-cover rounded-md" />
                    <img src={ads[ad2Index]} alt="Advertisement 2" className="w-full  h-full object-cover  rounded-md" />
                </div>
            )}</>



    );
}
