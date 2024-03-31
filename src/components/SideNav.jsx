import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-full h-full border-r-2 border-zinc-50 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i class=" text-[#6556CD] ri-tv-fill mr-3"></i>
        <span className="">Pikashow</span>
      </h1>
      <nav className="flex flex-col text-zinc-100 gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-blue-400 duration-300 hover:text-zinc-900 duration-300 p-3  rounded-xl text-center font-bold"
        >
          <i class="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-blue-400 duration-300 hover:text-zinc-900 duration-300 p-3  rounded-xl text-center font-bold"
        >
          <i class="ri-bard-line mr-2"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-blue-400 duration-300 hover:text-zinc-900 duration-300 p-3  rounded-xl text-center font-bold"
        >
          <i class="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-blue-400 duration-300 hover:text-zinc-900 duration-300 p-3  rounded-xl text-center font-bold"
        >
          <i class="ri-tv-2-fill mr-2"></i>
          Tv Show
        </Link>
        <Link
          to="/people"
          className="hover:bg-blue-400 duration-300 hover:text-zinc-900 duration-300 p-3  rounded-xl text-center font-bold"
        >
          <i class="ri-team-line mr-2"></i>
          People
        </Link>
        <hr className="border-none h-[2px] hover:bg-blue-400 bg-zinc-400" />
        <h1 className="text-white font-semibold text-xl mt-5 mb-5 ">
          WebSite Information
        </h1>
        <Link className="hover:bg-blue-400 duration-300 hover:text-zinc-900 duration-300 p-3  rounded-xl text-center font-bold">
          <i class="ri-info-i mr-2"></i>About
        </Link>
        <Link className="hover:bg-blue-400 duration-300 hover:text-zinc-900 duration-300 p-3  rounded-xl text-center font-bold">
          <i class="ri-phone-line mr-2"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
