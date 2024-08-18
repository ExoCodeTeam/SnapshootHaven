import React from "react";

function GalleryItem({ image, title, width, height }) {
  let classNameGm = "text-[32px] max-w-96";
  let classNamePm = "text-[21px] max-w-80";

  return (
    <div
      className={`rounded-xl ${width} ${height} flex items-end`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: width === "w-full" ? "5px" : "10px",
      }}
    >
      <h5
        className={`text-white ps-5 pb-5 font-medium ${
          width === "w-full" ? classNamePm : classNameGm
        }`}
      >
        {title}
      </h5>
    </div>
  );
}

export default GalleryItem;
