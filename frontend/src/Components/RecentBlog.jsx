function RecentBlog({ title, date, desc, img }) {
  return (
    <div className="recentBlog border-b-4 hover:border-[#F6C90E] border-b-transparent transition-all ease-linear">
      <img src={img} className="rounded-t-md h-[255px] w-full" />
      <div className="px-5 py-3 flex flex-col justify-between h-[280px] border border-[#3a475029] rounded-b-md">
        <h4 className="font-[500] text-lg text-[#303841]">{title}</h4>
        <p className="">{desc}</p>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default RecentBlog;
