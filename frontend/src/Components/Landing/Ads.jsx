import React, { useState, useEffect } from "react";

export default function Ads({ data }) {
  const ads = data.filter((el) => el.type === "secondary");
  const [ad1Index, setAd1Index] = useState(0);
  const [ad2Index, setAd2Index] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (ads.length > 0) {
      const intervalId = setInterval(() => {
        setAd1Index((prevIndex) => (prevIndex + 1) % ads.length);
        setAd2Index((prevIndex) => (prevIndex + 2) % ads.length); // Offset for different image
      }, 5000); // 5000 ms = 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [ads]); // Add ads as a dependency to update when the data changes

  // If no ads are available, show a placeholder or nothing
  if (ads.length === 0) {
    return <div>No ads available</div>;
  }

  return (
    <>
      {isSmallScreen ? (
        <div
          className="mx-[25px] grid grid-cols-1 gap-[20px]
            xl:mx-[150px]
            lg:mx-[100px]
            sm:mx-[50px]"
        >
          <img
            src={ads[ad1Index].img_url} // Assuming ads contain img_url
            alt={ads[ad1Index].title} // Use the ad's title as the alt text
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ) : (
        <div
          className="mx-[25px] grid grid-cols-2 gap-[20px]
                xl:mx-[150px]
                lg:mx-[100px]
                sm:mx-[50px]"
        >
          <img
            src={ads[ad1Index].img_url}
            alt={ads[ad1Index].title}
            className="w-full h-full object-cover rounded-md"
          />
          <img
            src={ads[ad2Index].img_url}
            alt={ads[ad2Index].title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )}
    </>
  );
}
