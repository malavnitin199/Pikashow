import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../components/utils/axios";
function Header() {
  const [headerData, setHeaderData] = useState(null);
  const getRandomHeaderImage = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      console.log(
        data.results[Math.floor(Math.random() * data.results.length)],
        "ss"
      );
      setHeaderData(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
      //   setInterval(() => {}, 2500);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRandomHeaderImage();
  }, []);
  return headerData ? (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),   url(https://image.tmdb.org/t/p/w500/${
          headerData.backdrop_path ||
          headerData.profile_path ||
          "/d0DE3AgXsN6amSk89VC4TSUdDe.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" w-full h-[55vh] flex flex-col justify-end p-[7%] items-start "
    >
      <h1 className="w-[70%] text-5xl font-bold text-blue-400 mb-6">
        {headerData.name || headerData.title || headerData.original_title}
      </h1>
      <h2 className="w-[70%] text-xl my-3 font-semibold text-white  ">
        {headerData.overview.slice(0, 200)}...
        <Link
          to={`/${headerData.media_type}/detail/${headerData.id}`}
          className="text-blue-500 text-2xl hover:text-red-400 duration-200"
        >
          More
        </Link>
      </h2>
      <Link className="text-blue-200 text-2xl  bg-blue-500 p-2 rounded-md hover:text-black hover:bg-zinc-600 duration-300 ">
        Watch Talier
      </Link>
    </div>
  ) : (
    ""
  );
}

export default Header;
