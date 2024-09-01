import logo from "../../assets/snaplogo.svg"
import dash from "../../assets/Admin/dashboard.svg"
import box from "../../assets/Admin/box.svg"
import write from "../../assets/Admin/write.svg"
import web from "../../assets/Admin/web.svg"
import settings from "../../assets/Admin/settings.svg"

import { useState } from "react"
import { Link } from "react-router-dom"


export default function AdminSidebar() {

    const [activePage, setActivePage] = useState("Dashboard");

    const pages = [
        { img: dash, title: "Dashboard", path: "/admin/" },
        { img: box, title: "Products Management", path: "/admin/product-management" },
        { img: write, title: "Blog Management", path: "/admin/blog-management" },
        { img: web, title: "Content Management", path: "/admin/content-management" },
        { img: settings, title: "Settings", path: "/admin/settings" },
    ]

    return (
        <div className="w-[16%] bg-[#EEE] ">
            <div className="h-20 flex justify-center items-center px-[20px]">
                <img src={logo} alt="" className="h-7 w-auto
                 sm:h-10"/>
            </div>
            <div className="flex h-[calc(100%-160px)] flex-col my-[80px] justify-start items-center">
                <div className="flex flex-col justify-between items-start h-[70%] ">
                    {pages.map((page) => (
                        <Link
                            to={page.path}
                            key={page.title}
                            onClick={() => setActivePage(page.title)}
                            className={`flex justify-start gap-5 w-full h-[100px] px-[50px] items-center cursor-pointer
                            ${activePage === page.title ? "border-r-[6px] border-[#F6C90E]" : ""}
                            hover:bg-[#FFFFFF]`}
                        >
                            <img src={page.img} alt={page.title} />
                            <h1>{page.title}</h1>
                        </Link>

                    ))}

                </div></div>


        </div>
    )
}