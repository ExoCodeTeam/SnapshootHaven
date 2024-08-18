
import image from "../assets/image.png";
import image1 from "../assets/image1.jpg";
import blog1 from "../assets/Blog1.png";
import blog2 from "../assets/Blog2.png";

import features from "../assets/features.svg";
import Gallery from "./Gallery";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Ads from "./Ads";
import RecentBlog from "./RecentBlog";

export default function Landing() {
  return (
    <div style={{ fontFamily: "Rubik" }}>
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
