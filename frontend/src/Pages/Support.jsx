import supportimg from "../assets/supportimg.png";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";

export default function Support() {
  return (
    <>
      <div className="relative inline-block">
        <img src={supportimg} className=" block w-full h-full" />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-70 flex flex-col justify-center items-center">
          <p className="text-white text-xl w-[50%] text-center mt-36">
            If you need assistance, our support team is here to help. You can
            reach us through the following channels:
          </p>
          <div className="flex flex-wrap justify-center w-[50%] gap-10 mt-10">
            <div className="flex gap-5 items-center ">
              <img src={phone} alt="phone:" />
              <p className="text-white text-xl"> +123-456-7890</p>
            </div>
            <div className="flex gap-5 items-center">
              <img src={mail} alt="mail:" />
              <p className="text-white text-xl">support@snapshothaven.com</p>
            </div>
            <div className="flex gap-5 items-center">
              <img src={location} alt="locaion:" />
              <p className="text-white text-xl">
                123 Photography Lane, City, Country
              </p>
            </div>
          </div>
          <div className="bg-yellow-400 h-3 w-[55%] absolute left-0 bottom-0 z-10"></div>
        </div>
      </div>
      <div className="flex flex-col mx-auto w-[50%] my-16 ">
        <div className="border-yellow-400 border-b-4 ">
          <p className="text-center text-xl text-[#303841]">
            How can I get more information about a product?
          </p>
        </div>
        <div className="border-yellow-400 border-b-4">
          <p className="text-center text-xl text-[#303841]">
            Do you provide product recommendations?
          </p>
        </div>
        <div className="border-yellow-400 border-b-4">
          <p className="text-center text-xl text-[#303841]">
            Can I visit a physical store?
          </p>
        </div>
        <div className="border-yellow-400 border-b-4">
          <p className="text-center text-xl text-[#303841]">
            Are the products on your website certified?
          </p>
        </div>
        <div className="border-yellow-400 border-b-4">
          <p className="text-center text-xl text-[#303841]">
            How can I stay updated on new arrivals and exclusive deals?
          </p>
        </div>
        <div className="border-yellow-400 border-b-4">
          <p className="text-center text-xl text-[#303841]">
            Do you offer after-sales service?
          </p>
        </div>
      </div>
    </>
  );
}
