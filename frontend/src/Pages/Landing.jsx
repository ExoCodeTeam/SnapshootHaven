import Ad from "../assets/Ad7.jpg";
import Ad1 from "../assets/Ad6.jpg";
import Ad2 from "../assets/Ad5.jpg";
import blog1 from "../assets/Blog1.png";
import blog2 from "../assets/Blog2.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

import features from "../assets/features.svg";
import Gallery from "../Components/Landing/Gallery";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import Ads from "../Components/Landing/Ads";
import RecentBlog from "../Components/RecentBlog";
import AdsApi from "../api/AdsApi";

export default function Landing() {
  const [ads, setAds] = useState([]);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    const fetchAds = async () => {
      const res = await AdsApi.fetchAds();
      setAds(res);
    };
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();
    fetchAds();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const blogPosts = [
    {
      img: blog1,
      title: "How to Use and Incorporate Symbolism in Photography",
      desc: "Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth.",
      date: "August 04, 2024",
    },
    {
      img: blog2,
      title: "How to Use and Incorporate Symbolism in Photography",
      desc: "Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth.",
      date: "August 04, 2024",
    },
    {
      img: blog1,
      title: "How to Use and Incorporate Symbolism in Photography",
      desc: "Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth.",
      date: "August 04, 2024",
    },
  ];

  return (
    <div style={{ fontFamily: "Rubik" }}>
      <div
        className="mx-[25px]
      xl:mx-[150px]
      lg:mx-[100px]
      sm:mx-[50px]
       "
      >
        {ads.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ reverseDirection: true, delay: 3000 }}
            loop={true}
          >
            {ads
              .filter((ad) => ad.type == "main")
              .map((ad, id) => (
                <SwiperSlide key={id}>
                  <img
                    src={ad.img_url}
                    className="h-[175px] w-[100%] object-cover rounded-md
      xl:h-[600px]
      lg:h-[400px]
      sm:h-[300px]"
                    alt={`Ad ${ad.title}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>

      <div
        className="w-full my-[25px]
      md:my-[100px]
      sm:my-[50px] "
      >
        <img
          src={features}
          className="mx-auto mt-10 w-[80%]
        xl:w-[50%]
        sm:w-[60%]"
        />
      </div>
      <div
        className=" my-[50px]
      md:my-[100px]
      "
      >
        <h1
          className="mx-auto mt-10 w-fit text-[20px] font-medium
        xl:text-[30px]
        lg:text-[28px]
        md:text-[24px]
        sm:text-[22px]"
        >
          Featured Products
        </h1>
      </div>

      <div
        className="gallery my-[50px]  mx-[25px] flex flex-col justify-center items-center
      xl:mx-[150px]
      lg:mx-[50px] 
      md:my-[100px]
      sm:mx-[50px] 
      "
      >
        <Gallery />
      </div>
      <Ads data={ads} />
      {/* Read Blog Articles Section */}
      <div
        className=" my-[50px]
      md:my-[100px]
   "
      >
        <h1
          className="mx-auto mt-10 w-fit text-[20px]  font-medium
        xl:text-[30px]
        md:text-[28px]
         sm:text-[22px]"
        >
          Recent Blog Articles
        </h1>
      </div>
      <div
        className="mx-[25px] my-[50px] grid grid-row-3 gap-[20px]
      xl:mx-[150px]
      lg:mx-[100px]
      md:my-[100px]
      sm:mx-[50px] sm:grid sm:grid-cols-3 "
      >
        {blogPosts.map((post, index) => (
          <RecentBlog
            key={index}
            img={post.img}
            title={post.title}
            desc={post.desc}
            date={post.date}
          />
        ))}
      </div>
      {/* Stay Update Section */}
      <div
        className="px-[50px] py-[50px] bg-[#3A4750] flex flex-col gap-[30px] w-full
      xl:px-[150px]
      lg:px-[100px]
      md:py-[100px] md:grid grid-cols-2 
      sm:gap-[50px]"
      >
        <div>
          <h2
            className="text-[#F6C90E] text-[22px] font-[500] mb-4
          xl:text-[32px]
          md:text-[30px]
          sm:text-[28px]"
          >
            Stay Updated
          </h2>
          <p
            className="text-white text-[12px] 
          xl:text-[16px]
          md:text-[14px] "
          >
            Join our newsletter for updates on new arrivals, exclusive deals,
            and expert tips. Sign up today and stay connected with Snapshot
            Haven!
          </p>
        </div>
        <div className="relative  flex items-center w-full">
          <input
            type="search"
            placeholder="Enter your email address"
            className="w-full h-[60px] ps-4 pe-2 rounded-md placeholder:text-[12px] outline-none
            xl:placeholder:text-[14px]
            lg:placeholder:text-[12px]
            "
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 bg-[#F6C90E] text-[#303841] right-2 py-2 px-3 font-medium text-[12px] rounded-md
          xl:text-[14px]
          lg:text-[12px]"
          >
            {isSmallScreen ? (
              <FontAwesomeIcon
                icon={faSortUp}
                className="relative top-[6px] text-lg"
              />
            ) : (
              "Get Started"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
