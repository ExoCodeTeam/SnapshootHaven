import GalleryItem from "../Components/GalleryItem";
import BlogImg3 from "../assets/BlogImg3.png";
import BlogImg2 from "../assets/BlogImg2.png";
import BlogImg1 from "../assets/BlogImg1.png";
import Article1 from "../assets/Blog2.png";
import Article2 from "../assets/girl.png";
import Article3 from "../assets/article3.png";
import RecentBlog from "../Components/RecentBlog";

function Blog() {
  const articles = [
    {
      title: "How to Use and Incorporate Symbolism in Photography",
      date: "August 04, 2024",
      img: Article1,
      desc: "Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth.",
    },
    {
      title: "Understanding the Rule of Thirds",
      date: "August 05, 2024",
      img: Article2,
      desc: "Are you thinking about becoming a portrait photographer? Well, you might like to read about these 16 types of portrait photography.",
    },
    {
      title: "The Art of Black and White Photography",
      date: "August 06, 2024",
      img: Article3,
      desc: "A comprehensive look at the rules of photography composition with photo examples and how to apply these rules.",
    },
    {
      title: "Exploring Landscape Photography Techniques",
      date: "August 07, 2024",
      img: Article1,
      desc: "Symbolism in photography utilizes visual elements to convey abstract emotions or concepts, adding new levels of meaning and depth.",
    },
    {
      title: "Mastering Portrait Photography",
      date: "August 08, 2024",
      img: Article2,
      desc: "Are you thinking about becoming a portrait photographer? Well, you might like to read about these 16 types of portrait photography.",
    },
    {
      title: "Capturing Motion in Photography",
      date: "August 09, 2024",
      img: Article3,
      desc: "A comprehensive look at the rules of photography composition with photo examples and how to apply these rules.",
    },
  ];

  return (
    <div className="mx-[150px] py-10">
      {/* Gallery Articles */}
      <div className="gallery h-[550px] py-[10px] flex w-full gap-5">
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
      {/* Latest Article */}
      <div className="pt-[110px]">
        <h3 className="font-medium text-[32px] text-black text-center mb-[110px]">
          Latest Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 round">
          {articles.map((article, index) => (
            <RecentBlog
              key={index}
              title={article.title}
              date={article.date}
              img={article.img}
              desc={article.desc}
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
