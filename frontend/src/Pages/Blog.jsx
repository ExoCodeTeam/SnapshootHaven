import GalleryItem from "../Components/GalleryItem";
import BlogImg3 from "../assets/BlogImg3.png";
import BlogImg2 from "../assets/BlogImg2.png";
import BlogImg1 from "../assets/BlogImg1.png";

function Blog() {
  return (
    <div className="mx-[150px] py-10">
      {/* Gallery Articles */}
      <div className="gallery h-[550px] flex w-full gap-5">
        <GalleryItem
          image={BlogImg1}
          title="How to Become a Wildlife Photographer"
          width="w-[58%]"
          height="h-full"
        />
        <div className="overflow-hidden flex-1 gap-5 flex-col flex">
          <GalleryItem
            image={BlogImg2}
            title="Interview with Scott Smorra on Photography Trends"
            width="w-full"
            height="h-full"
          />
          <GalleryItem
            image={BlogImg3}
            title="Black and White Photography: A Beginner’s Guide"
            width="w-full"
            height="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
