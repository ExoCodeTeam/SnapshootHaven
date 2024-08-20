function Footer() {
  return (
    <>
      <footer class="flex flex-col bg-[#303841] text-white">
        <div class="pt-[50px] pb-[20px] mx-[150px] flex flex-col gap-[50px]">
          <div className="grid grid-cols-12 gap-[50px] w-full">
            <div class="col-span-5 flex flex-col items-start w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9df66c6fc3d8d29a183fb4744afdd2b59b64f8330a06c6856b887a1a54b360?placeholderIfAbsent=true&apiKey=403df433ee25481d95bb99bca99ab430"
                alt="Snapshot Haven Logo"
                class="object-contain max-w-full aspect-[3.23] w-[200px]"
              />
              <p class="mt-4 text-xs font-medium text-yellow-400">
                Your Ultimate Destination for Cameras and Accessories
              </p>
              <p class="self-stretch mt-11 text-base max-md:mt-10">
                Discover a curated selection of high-quality cameras
                and accessories at Snapshot Haven. Enjoy extended
                warranties, expert support, and competitive prices.
                Capture life's moments with the latest in photography
                technology. Your passion is our priority.
              </p>
            </div>
            <div className="col-span-1"></div>
            <div class="col-span-3 flex flex-col text-xl font-medium ">
              <div class="flex flex-col ">
                <a href="#">Home</a>
                <a href="#" class="mt-5">
                  Shop
                </a>
                <ul class="flex flex-col font-normal  items-start mt-5 w-full text-xs whitespace-nowrap rounded-none">
                  <li>
                    <a href="#">Cameras</a>
                  </li>
                  <li class="mt-4">
                    <a href="#">Lenses</a>
                  </li>
                  <li class="self-stretch mt-4">
                    <a href="#">Accessories</a>
                  </li>
                </ul>
                <a href="#" class="mt-5">
                  New Arrivals
                </a>
                <a href="#" class="mt-5">
                  Bundles and Deals
                </a>
              </div>

            </div>

            <div class="col-span-3 flex flex-col text-xl font-medium ">
              <nav class="flex flex-col ">
                <a href="#">Blog</a>
                <a href="#" class="mt-5">
                  About Us
                </a>
                <a href="#" class="mt-5">
                  Support
                </a>
                <a href="#" class="mt-5">
                  Contact us
                </a>
              </nav>
              <address class="flex flex-col font-normal items-start pr-6 mt-5 w-full text-xs rounded-none max-md:pr-5 not-italic">
                <p>
                  Email:{" "}
                  <a href="mailto:support@snapshothaven.com">
                    support@snapshothaven.com
                  </a>
                </p>
                <p class="mt-4">
                  Phone: <a href="tel:+1234567890">+123-456-7890</a>
                </p>
                <p class="mt-4">
                  Address: 123 Photography Lane, City, Country
                </p>
              </address>

            </div>
          </div>
          <div className="flex justify-between items-center">
            <div class="flex gap-8 ">
              <a href="#" aria-label="Facebook">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08829ba58dbe7efa112efe8583c06178e63cc0ee0641f0cb429f447fc2e13d98?placeholderIfAbsent=true&apiKey=403df433ee25481d95bb99bca99ab430"
                  alt=""
                  class="object-contain shrink-0 aspect-square w-[30px]"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e12154361cd9bcdc5400f51d3a1e2f474e329212bc578aa55d89838f21a2912?placeholderIfAbsent=true&apiKey=403df433ee25481d95bb99bca99ab430"
                  alt=""
                  class="object-contain shrink-0 aspect-square w-[30px]"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a30072badfd6216ebe249be4805d7a6191c114331fbdd6978f28906a9a3b62d5?placeholderIfAbsent=true&apiKey=403df433ee25481d95bb99bca99ab430"
                  alt=""
                  class="object-contain shrink-0 aspect-square w-[30px]"
                />
              </a>
            </div>

            <h1 className="text-sm"> Privacy Policy | Terms of Service</h1>

            <h1 className="text-sm">
              © 2024 Snapshot Haven . All rights reserved.
            </h1>
          </div>









        </div >


        <div class="px-16 py-2 mt-5 w-full text-md font-medium bg-yellow-400 text-[#303841] flex justify-center items-center ">
          Made with ❤️ by ExoCode.
        </div>
      </footer >
    </>
  );
}

export default Footer;
