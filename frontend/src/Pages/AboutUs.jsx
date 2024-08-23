import aboutus from "../assets/aboutus.png";
import ourmission from "../assets/ourmission.png";
import ourproducts from "../assets/ourproducts.png";
import ourstory from "../assets/ourstory.png";

export default function AboutUs() {
  return (
    <>
      <div className="relative inline-block">
        <img src={aboutus} className=" block w-full h-full" />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-70 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl m-10 font-medium">
            Welcome to Snapshot Haven
          </h1>
          <p className="text-white text-xl w-[50%] text-center">
            Snapshot Haven is your go-to destination for all things photography.
            We specialize in providing a curated selection of high-quality
            cameras and accessories to help you capture life’s most precious
            moments.
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto w-[78%] my-16">
        <div className="relative h-[325px] flex ">
          <div className="absolute top-0 left-0 bg-gray-200 w-[70%] h-[85%] rounded-sm">
            <h1 className="text-4xl font-medium text-[#303841] mb-5 ml-7 mt-10">
              Our mission
            </h1>
            <p className="text-left text-xl mx-16">
              Our Snapshot Haven is your go-to destination for all things
              photography. We specialize in providing a curated selection of
              high-quality cameras and accessories to help you capture life’s
              most precious moments.
            </p>
          </div>
          <div className="bg-yellow-400 h-3 w-[60%] absolute right-0 top-5 z-10"></div>
          <img
            src={ourmission}
            className="h-[90%] absolute bottom-0 right-0 w-[30%]"
          />
        </div>
        <div className="relative h-[325px] flex mb-5 ">
          <div className="absolute bottom-0 right-0 bg-gray-200 w-[76.5%] h-full rounded-sm z-10 ">
            <h1 className="text-4xl font-medium text-[#303841] mb-5 ml-7 mt-10">
              Our Story
            </h1>
            <p className="text-left text-xl mx-16">
              Our journey began with a group of passionate photographers who
              wanted to create a one-stop shop for all photography needs. With a
              goal to make high-quality photography equipment accessible to
              everyone, we have grown and expanded our product range over the
              years. We constantly update our inventory with the latest
              technologies and innovations in the photography world.
            </p>
          </div>
          <div className="bg-yellow-400 h-3 w-[60%] absolute left-0 top-5 "></div>
          <img src={ourstory} className="h-[90%] absolute bottom-0 left-0 " />
        </div>
        <div className="relative h-[325px] flex mb-5">
          <div className="absolute bottom-0 left-0 bg-gray-200 w-[71.5%] h-full rounded-sm">
            <h1 className="text-4xl font-medium text-[#303841] mb-5 ml-7 mt-10">
              Our Products
            </h1>
            <p className="text-left text-xl mx-16">
              We offer a wide range of cameras, from high-resolution DSLRs to
              compact point-and-shoots, catering to every photographer’s needs.
              Our versatile accessories, including lenses, tripods, and camera
              bags, enhance your photography experience and help you achieve the
              perfect shot.
            </p>
          </div>
          <div className="bg-yellow-400 h-3 w-[60%] absolute right-0 top-5 z-10 "></div>
          <img
            src={ourproducts}
            className="h-[91%] absolute bottom-0 right-0 "
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-10">
        <h1 className=" text-4xl m-10 font-medium">Contact Us</h1>
        <p className=" text-xl w-[50%] text-center">
          We love hearing from our customers! Whether you have a question,
          feedback, or just want to share your latest photos, feel free to get
          in touch with us. At Snapshot Haven, your passion for photography is
          our priority.
        </p>
        <button className=" bg-[#F6C90E] text-[#303841] font-xl rounded-md py-2 px-5 my-10 font-medium">
          Contact us
        </button>
      </div>
    </>
  );
}
