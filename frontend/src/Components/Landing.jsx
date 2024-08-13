import snaplogo from "../assets/snaplogo.svg";
import image from "../assets/image.png";
import image1 from "../assets/image1.jpg";
import blog1 from "../assets/Blog1.png";
import blog2 from "../assets/Blog2.png";

import features from "../assets/features.svg";
import search from "../assets/searche.png";
import Gallery from "./Gallery";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Ads from "./Ads";
import RecentBlog from "./RecentBlog";

export default function Landing() {
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "About us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <div style={{ fontFamily: "Rubik" }}>
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
            <a href="">
              <img src={search} alt="" />
            </a>
          </div>
        </nav>
      </header>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="w-full my-[50px] ">
        <img src={features} className="mx-auto mt-10 w-auto" />
      </div>
      <div className=" my-[100px]">
        <h1 className="mx-auto mt-10 w-fit text-3xl font-medium">
          Featured Products
        </h1>
      </div>

      <div className="gallery my-[100px]  mx-[150px] flex flex-col justify-center items-center">
        <Gallery />
      </div>
      <Ads />
      {/* Read Blog Articles Section */}
      <div className=" my-[100px]">
        <h1 className="mx-auto mt-10 w-fit text-3xl font-medium">
          Recent Blog Articles
        </h1>
      </div>
      <div className="mx-[150px] my-[100px] grid grid-cols-3 gap-10">
        <RecentBlog
          img={blog1}
          title="How to Use and Incorporate Symbolism in Photography"
          desc="Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth."
          date="August 04,2024"
        />
        <RecentBlog
          img={blog2}
          title="How to Use and Incorporate Symbolism in Photography"
          desc="Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth."
          date="August 04,2024"
        />
        <RecentBlog
          img={blog1}
          title="How to Use and Incorporate Symbolism in Photography"
          desc="Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth."
          date="August 04,2024"
        />
      </div>
      {/* Stay Update Section */}
      <div className="px-[150px] py-[100px] bg-[#3A4750] flex justify-center items-center gap-8">
        <div>
          <h2 className="text-[#F6C90E] text-4xl font-[500] mb-4">
            Stay Updated
          </h2>
          <p className="text-white max-w-[520px]">
            Join our newsletter for updates on new arrivals, exclusive deals,
            and expert tips. Sign up today and stay connected with Snapshot
            Haven!
          </p>
        </div>
        <div className="relative w-fit ">
          <input
            type="search"
            placeholder="Enter your email address"
            className="w-[520px] h-[60px] ps-4 pe-2 rounded-md placeholder:text-sm outline-none"
          />
          <button className="absolute top-1/2 -translate-y-1/2 bg-[#F6C90E] text-[#303841] right-2 py-2 px-3 font-medium">
            Get Started
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
