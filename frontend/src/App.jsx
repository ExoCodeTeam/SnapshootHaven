import snaplogo from "./assets/snaplogo.svg";
import image from "./assets/image.png";
import features from "./assets/features.svg";
function App() {
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "About us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <>
      <header className=" inset-x-0 top-0 z-50 ">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={snaplogo} className="h-10 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-m font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>
      <div className="w-full h-full">
        <img src={image} className=" w-auto" />
      </div>
      <div className="w-full ">
        <img src={features} className="mx-auto mt-10 w-auto" />
      </div>
      <div className="">
        <h1 className="mx-auto mt-10 w-fit text-3xl font-medium">Featured Products</h1>
      </div>
    </>
  );
}

export default App;