import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
function TopNav({ title }) {
  const [text, setText] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${text}`);
      //   console.log(data.results);
      setSearchResult(data.results);
    } catch (error) {}
  };
  useEffect(() => {
    getSearch();
  }, [text]);
  return (
    <div className="h-[10vh] w-full flex justify-center items-center gap-1 text-2xl relative z-20">
      <i class="ri-search-line text-1xl"></i>
      <input
        className="p-6 border-none bg-transparent text-zinc-200 w-[50%]  outline-none"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Anything"
      />
      {text.length > 0 ? (
        <i
          class="ri-close-fill"
          onClick={() => {
            setText("");
          }}
        ></i>
      ) : (
        ""
      )}

      {text.length > 0 ? (
        <div className="w-[50%] bg-zinc-800 hover:translate-x-0 opacity-95 border-none rounded-xl rounded-t-none duration-300 max-h-[60vh] absolute top-[90%] flex flex-col overflow-hidden overflow-y-auto">
          {searchResult?.map((s) => {
            return (
              <Link
                to={`/${s.media_type || title}/detail/${s.id}`}
                className="hover:bg-blue-400 h-[5%] duration-300 hover:text-zinc-900 duration-300 p-6 font-bold   border-b-2 border-zinc-500 flex gap-9"
              >
                <img
                  className="w-[20vh]  h-[10vh] object-cover rounded"
                  src={`https://image.tmdb.org/t/p/w500/${
                    s.backdrop_path ||
                    s.profile_path ||
                    "/d0DE3AgXsN6amSk89VC4TSUdDe.jpg"
                  }`}
                />
                {s.name || s.title || s.original_title}
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TopNav;
