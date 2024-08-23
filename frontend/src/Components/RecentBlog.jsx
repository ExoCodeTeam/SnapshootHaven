import { Link } from "react-router-dom";

function RecentBlog({ title, date, desc, img, id }) {
  return (
    <Link
      to={"/blog/" + id}
      className="recentBlog border-b-4 hover:border-[#F6C90E] border-b-transparent transition-all ease-linear"
    >
      <div className="rounded-t-md  w-full">
        <img src={img} className="rounded-t-md" />
      </div>
      <div className="px-5 py-3 flex flex-col justify-between  border border-[#3a475029] rounded-b-md">
        <h4 className="font-[500] text-lg text-[#303841]">{title}</h4>
        <p className="">{desc}</p>
        <span>{date}</span>
      </div>
    </Link>
  );
}

export default RecentBlog;
