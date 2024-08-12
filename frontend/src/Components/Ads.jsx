import React, { useState, useEffect } from 'react';
import ad1 from '../assets/ad.jpg';
import ad2 from '../assets/ad2.jpg';
import ad3 from '../assets/ad3.jpg';
import ad4 from '../assets/ad4.jfif';

const ads = [ad1, ad2, ad3, ad4]; // Array of ad images

export default function Ads() {
    const [ad1Index, setAd1Index] = useState(0);
    const [ad2Index, setAd2Index] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAd1Index(prevIndex => (prevIndex + 1) % ads.length);
            setAd2Index(prevIndex => (prevIndex + 2) % ads.length); // Offset for different image
        }, 5000); // 5000 ms = 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="mx-[150px] grid grid-cols-2 gap-[20px]">
            <img src={ads[ad1Index]} alt="Advertisement 1" className="w-full h-auto rounded-md" />
            <img src={ads[ad2Index]} alt="Advertisement 2" className="w-full h-auto  rounded-md" />
        </div>
    );
}