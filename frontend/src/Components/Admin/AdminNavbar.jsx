import search from "../../assets/Admin/searche.png";
import notif from "../../assets/Admin/bell.png";
import user from "../../assets/Admin/user.png";


export default function AdminNavbar() {

    return (
        <div className="h-[80px] flex items-center justify-end border-b-2 border-b-[#eee] border-b-solid px-[30px]">
            <div className="flex gap-[50px]">
                <img src={search} className="h-[25px]" alt="" />
                <img src={notif} className="h-[25px]" alt="" />
                <img src={user} className="h-[25px]" alt="" />

            </div>

        </div>
    )
}