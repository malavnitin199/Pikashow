import React, { useEffect, useState } from "react";
import axios from "./utils/axios";
import { Link } from "react-router-dom";
import Input from "./partials/Input";
function Cards({ title, hideoption, data }) {
  const [cardsDeatils, setCardsDeatils] = useState(null);
  const [catagory, setCatagory] = useState("all");
  const options = ["all", "tv", "movie", "person"];
  const getRandomHeaderImage = async () => {
    try {
      const { data } = await axios.get(`/trending/${catagory}/week`);
      //   console.log(
      //     data.results[Math.floor(Math.random() * data.results.length)],
      //     "ss"
      //   );
      setCardsDeatils(data.results);
      //   setInterval(() => {}, 2500);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRandomHeaderImage();
  }, [catagory]);
  return (
    <div className="h-[50%] w-full mt-2 flex flex-col justify-between">
      {!hideoption && (
        <div className="flex justify-between h-[20%%]">
          <h1 className="text-2xl font-semibold m-2 bg-slate-600 p-2 rounded-xl  hover:text-yellow-300">
            <i class="ri-fire-fill mr-2"></i>
            Trending
          </h1>
          <Input options={options} setCatagory={setCatagory} />
        </div>
      )}
      <div className="h-[70%] w-[100%] flex overflow-x-auto  ">
        {data
          ? data.similar?.map((s) => (
              <div className="  min-w-[250px]  mx-2 ">
                <Link
                  to={`/${s.media_type || title}/detail/${s.id}`}
                  className="text-white bg-zinc-700 h-full bottom-2 border border-solid flex flex-col rounded hover:bg-zinc-900 p-1 duration-300 hover:text-zinc-600"
                >
                  <img
                    className="object-cover rounded w-[100%] h-[70%]"
                    src={`https://image.tmdb.org/t/p/w500/${
                      s.backdrop_path ||
                      s.profile_path ||
                      "/d0DE3AgXsN6amSk89VC4TSUdDe.jpg"
                    }`}
                  />
                  <span className="text-center text-xl font-bold mt-2  ">
                    {s.name || s.title || s.original_title}
                  </span>
                </Link>
              </div>
            ))
          : catagory &&
            cardsDeatils?.map((s) => (
              <div className="  min-w-[250px]  mx-2 ">
                <Link
                  to={`/${s.media_type || title}/detail/${s.id}`}
                  className="text-white bg-zinc-700 h-full bottom-2 border border-solid flex flex-col rounded hover:bg-zinc-900 p-1 duration-300 hover:text-zinc-600"
                >
                  <img
                    className="object-cover rounded w-[100%] h-[70%]"
                    src={`https://image.tmdb.org/t/p/w500/${
                      s.backdrop_path ||
                      s.profile_path ||
                      "/d0DE3AgXsN6amSk89VC4TSUdDe.jpg"
                    }`}
                  />
                  <span className="text-center text-xl font-bold mt-2  ">
                    {s.name || s.title || s.original_title}
                  </span>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Cards;
