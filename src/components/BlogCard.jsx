import React from "react";

const BlogCard = ({ img, title, dateTime }) => {
  return (
    <div className="flex flex-col">
      <div className="w-[24.56rem] h-[24.56rem]">
        <img className="object-cover" src={`/${img}.png`} alt="blog-img" />
      </div>
      <div className="text-wrapper flex flex-col items-center">
        <span className="mt-[2.06rem] text-black font-normal text-xl  ">
          {title}
        </span>
        <span className="mt-[0.625rem] mb-[1.19rem] pb-[0.625rem] border-2 border-transparent border-b-black text-medium24">
          Read more
        </span>
        <div className="flex items-center gap-[1.19rem]">
          <div className="time-wrapper text-base  flex items-center gap-[0.625rem]">
            <img src="/vectors/time.svg" alt="time-icon" />
            <span>{dateTime.time}</span>
          </div>
          <div className="date-wrapper text-base  flex items-center gap-[0.625rem]">
            <img src="/vectors/calendar.svg" alt="calendar-icon" />
            <span>{dateTime.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
