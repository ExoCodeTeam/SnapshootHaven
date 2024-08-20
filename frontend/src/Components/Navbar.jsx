import snaplogo from "../assets/snaplogo.svg";
import search from "../assets/searche.png";

function Navbar() {
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "About us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ];
  return (
    <header className=" inset-x-0 top-0 z-50 ">
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between  px-[150px] py-[20px]"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="" src={snaplogo} className="h-10 w-auto" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-m font-medium leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
          <a href="">
            <img src={search} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
