import { useState } from "react";
import camera from '../assets/camera.png'
import camera2 from '../assets/Camera2.png'

import Product from "./Product";

export default function Gallery() {
    const [activeLink, setActiveLink] = useState('Best Selling');

    // Function to handle setting active link

    const bestSellingProducts = [
        { id: "1", img: camera, name: "Canon EOS R5 Mirrorless Camera", price: "2999" },
        { id: "2", img: camera, name: "Nikon Z6 II", price: "2499" },
        { id: "3", img: camera, name: "Sony A7R IV", price: "3499" },
        { id: "4", img: camera, name: "Fujifilm X-T4", price: "1799" }
    ];

    const newArrivalsProducts = [
        { id: "5", img: camera2, name: "Olympus OM-D E-M10 Mark III", price: "799" },
        { id: "6", img: camera2, name: "Panasonic Lumix GH5", price: "1299" },
        { id: "7", img: camera2, name: "Leica SL2", price: "4999" },
        { id: "8", img: camera2, name: "Pentax K-1 Mark II", price: "1899" }
    ];

    const topRatedProducts = [
        { id: "9", img: camera, name: "Hasselblad X1D II 50C", price: "5999" },
        { id: "10", img: camera2, name: "Canon EOS R6", price: "2499" },
        { id: "11", img: camera, name: "Sony A6600", price: "1399" },
        { id: "12", img: camera2, name: "Nikon D850", price: "2999" }
    ];


    const getProductsList = () => {
        switch (activeLink) {
            case 'Best Selling':
                return bestSellingProducts;
            case 'New Arrivals':
                return newArrivalsProducts;
            case 'Top Rated':
                return topRatedProducts;
            default:
                return [];
        }
    };

    const Products = getProductsList();

    // Function to handle setting active link
    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="flex flex-col gap-[50px] justify-center items-center w-full">
            <div className="links flex gap-[200px]">
                <h1
                    className={`cursor-pointer text-[22px] ${activeLink === 'Best Selling' ? 'border-b-4 border-yellow-500' : ''
                        }`}
                    onClick={() => handleSetActive('Best Selling')}
                >
                    Best Selling
                </h1>
                <h1
                    className={`cursor-pointer text-[22px] ${activeLink === 'New Arrivals' ? 'border-b-4 border-yellow-500' : ''
                        }`}
                    onClick={() => handleSetActive('New Arrivals')}
                >
                    New Arrivals
                </h1>
                <h1
                    className={`cursor-pointer text-[22px] ${activeLink === 'Top Rated' ? 'border-b-4 border-yellow-500' : ''
                        }`}
                    onClick={() => handleSetActive('Top Rated')}
                >
                    Top Rated
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-[20px] w-full">
                {Products.map((product) => (
                    <Product id={product.id} img={product.img} name={product.name} price={product.price} />
                ))}
            </div>
        </div>
    );
}
