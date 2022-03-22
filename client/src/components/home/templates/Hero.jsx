import React from "react";

export default function Hero() {
  return (
    <div className="my-12 h-[40rem] px-36 w-full flex flex-row relative z-0">
      <div className="h-full w-1/2 flex flex-col text-left font-open-sans text-slate-900">
        <p className="mt-24 text-6xl">The best classic car</p>
        <p className="text-6xl font-bold">All in one place</p>
        <div className="w-full z-50 mt-12 h-16 rounded-xl ml-36 drop-shadow-2xl">
          <form className="w-full h-full flex flex-row rounded-xl">
            <input
              type="text"
              className="w-9/12 h-full text-xl pl-6 bg-white rounded-l-xl"
              placeholder="Search by brand/model"
            />
            <button className="w-3/12 h-full bg-orange-600 hover:bg-orange-500 rounded-r-xl text-xl text-white font-open-sans font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center">
        <img
          src="https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x1600/landscape-1459816624-1954-mercedes-300sl-gullwing-a.jpg?resize=980:*"
          alt="homeScreen"
          className="object-cover h-full"
        />
      </div>
    </div>
  );
}
