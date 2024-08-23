import snaplogo from "../assets/snaplogo.svg";
import search from "../assets/searche.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "#" },
    { name: "About us", href: "/aboutus" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ];
  return (
    <header className=" inset-x-0 top-0 z-50  border-b-2 border-b-[#eee] border-b-solid">
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between  px-[150px] py-[20px] "
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img alt="" src={snaplogo} className="h-10 w-auto" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-m font-medium leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <Link to="">
            <img src={search} alt="" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
