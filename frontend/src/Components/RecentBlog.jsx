import { Link } from "react-router-dom";

function RecentBlog({ title, date, desc, img, id }) {
  return (
    <Link to={"/blog/" + id} className="recentBlog border-b-4 hover:border-[#F6C90E] border-b-transparent transition-all ease-linear">
      <img src={img} className="rounded-t-m  aspect-[1/0.75]  " />
      <div className="p-[30px] flex flex-col justify-between h-[150px] border border-[#3a475029] rounded-b-md
      xl:h-[280px] xl:p-[30px]
      lg:h-[250px] lg:p-[20px]
      sm:p-[10px]
      md:h-[200px] ">
        <h4 className="font-[500] text-[10px] text-[#303841]
        xl:text-[18px]
        lg:text-[16px]
        md:text-[14px]">{title}</h4>
        <p className="text-[9px]
        xl:text-[16px]
        lg:text-[14px]
        md:text-[11px]">{desc}</p>
        <span className="text-[9px]
        xl:text-[16px]
        lg:text-[14px]
        md:text-[11px]">{date}</span>
      </div>
    </Link>
  );
}

export default RecentBlog;
