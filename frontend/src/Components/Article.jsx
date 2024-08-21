import MainImg from "../assets/girl.png";
import Facebook from "../assets/facebook.svg";
import X from "../assets/x.svg";
import Linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

// Fetch Data

let data = {
  title: "The 16 Different Types of Portrait Photography",
  date: "08/08/2024",
  img: MainImg,
};
function Article() {
  return (
    <div className=" my-[100px]">
      <div className="mx-[150px]">
        <h1 className="text-[36px] font-medium">
          The 16 Different Types of Portrait Photography
        </h1>
        <div className="mt-8 text-[#3A4750] flex justify-between">
          <p>Last Update : {data.date}</p>
          <div className="flex items-center gap-12">
            <span>Share</span>
            <div className="flex gap-5">
              <Link to={""}>
                <img src={Facebook} />
              </Link>
              <Link to={""}>
                <img src={Linkedin} />
              </Link>
              <Link to={""}>
                <img src={X} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img className="mt-8 w-screen" src={data.img} />
      <div className="mx-[150px] leading-[26px]">
        <div className="w-full h-[10px] bg-[#F6C90E] my-8"></div>
        <p className="text-[#3A4750]">
          Portrait photography is a lucrative and one of the most popular
          photography genres, but did you know there are many different types of
          portrait photography? First, let’s define our terms. When we talk
          about portraiture in photography, we’re talking about capturing images
          of people.  You might be thinking about the portraiture photographers
          of your childhood when you think about this genre; those are the ones
          who would take the family picture once a year when your mother made
          everyone get dressed up and pose in front of the fireplace. And,
          you’re not wrong–that is one type of portrait, but there are many
          other types as well.  We’ve put together a list of 16 of the most
          important types of portrait photography to better understand this
          interesting genre.
        </p>
        <div>
          <h2 className="text-[24px] font-[500] my-8">
            1. Traditional Portraits
          </h2>
          <div className="flex items-center gap-4">
            <p className="w-1/2 text-[#3A4750] pr-5 leading-[30px]">
              The traditional portrait is typically where the subject is looking
              at the camera and posing for the photograph. These are usually
              shot in the studio with a formal photography backdrop. Frequently,
              these portraits are cropped to show the head and shoulders of the
              subject rather than the full body. A typical example would be a
              senior yearbook portrait. This is one of the types of portrait
              photography that endures precisely because the mix of posing and
              studio lighting results in flattering images. Family and Group
              Portraits This is that family picture you took every year where
              your mother made you wear your formal, Sunday ‘go to church’
              clothes. Nowadays, you might prefer a portrait with your
              significant other or perhaps a close group of friends, and maybe
              you choose to keep it casual instead of formal. Whatever the case,
              these portraits are often shot on location in the subject’s home
              or some other location where the group gathers. The nice thing
              about these types of portraits is that you can often capture
              genuine interaction between the subjects, and that can make for
              compelling images.
            </p>
            <img className="w-[46%] rounded-md " src={MainImg} alt="Portrait" />
          </div>
        </div>
        <div>
          <h2 className="text-[24px] font-[500] my-8">2. Formal Portraits</h2>
          <div className="flex flex-col gap-4">
            <p className="text-[#3A4750] leading-[30px]">
              This is a category that pairs well with the traditional and group
              types of portrait photography. It simply means that it is a
              carefully arranged pose under optimal lighting conditions that
              captures the person or people looking their best. They are often
              wearing more formal attire, just like when you were a kid! 
            </p>
            <p className="text-[#3A4750] leading-[30px]">
              This kind of portrait is also often used to take serious types of
              photographs, such as those used by businesses for advertising
              purposes or to highlight some of their best employees.
            </p>
            <div className="w-full h-[10px] bg-[#F6C90E] my-[30px]"></div>
            <div className="flex items-center justify-end gap-12 text-[#3A4750]">
              <span>Share</span>
              <div className="flex gap-5">
                <Link to={""}>
                  <img src={Facebook} />
                </Link>
                <Link to={""}>
                  <img src={Linkedin} />
                </Link>
                <Link to={""}>
                  <img src={X} />
                </Link>
              </div>
            </div>
            {/* Comment */}
            <div>
              <h3>Comments</h3>
              <div className="w-full bg-[#EEEEEE] px-20 py-5">
                <p className="text-[#303841] mb-4">
                  Your email address will remain confidential. Only your name
                  will be displayed !
                </p>
                <form>
                  <div className="flex gap-6 mb-6">
                    <div className="flex-1">
                      <label className="text-black block mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="p-3 w-full rounded-[5px]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-black block mb-2">Email *</label>
                      <input
                        type="email"
                        name="name"
                        className="p-3 w-full rounded-[5px] border-[F6C90E]"
                      />
                    </div>
                  </div>
                  <textarea
                    placeholder="Type Your Comment here"
                    type="text"
                    className="w-full rounded-[5px] py-4 px-6 min-h-[200px]"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
