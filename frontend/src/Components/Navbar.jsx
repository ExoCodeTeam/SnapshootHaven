import snaplogo from "../assets/snaplogo.svg";
import search from "../assets/searche.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "#" },
    { name: "About us", href: "#" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "#" },
  ];
  return (
    <header className=" inset-x-0 top-0 z-50  border-b-2 border-b-[#eee] border-b-solid

    ">
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between px-[25px] py-[20px] 
        lg:px-[100px]
        xl:px-[150px] 
        sm:px-[50px] 
        "
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img alt="Snaplogo" src={snaplogo} className="h-7 w-auto
            sm:h-10" />
          </Link>
        </div>

        {/* Navigation Links for Large Screens */}
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
            <img src={search} alt="Search Icon" />
          </Link>
        </div>

        {/* Bars Icon for Small Screens */}
        <div className="lg:hidden">
          <FontAwesomeIcon icon={faBars} className="text-gray-900 text-lg
          sm:text-xl " />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
