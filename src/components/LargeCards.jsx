import React from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
function horizontalCards({ cardData, getData, title }) {
  const check = () => {
    setTimeout(() => getData(), 3000);
  };
  return (
    <div className=" w-full bg-zinc-800 p-5 z-0 relative ">
      {cardData && (
        <InfiniteScroll
          dataLength={cardData.length}
          next={check}
          hasMore={true}
          loader={
            <div className="w-full flex justify-center items-center">
              <img
                src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
                className="w-[45px] h-[45px] bg-black text-white text-center"
                alt="img"
              />
            </div>
          }
          className="flex flex-wrap border-none gap-5  bg-zinc-800 pl-7 "
        >
          {cardData?.map((s, i) => {
            return (
              <div className="w-[23%] h-[35vh] ml-1 relative hover:scale-110 hover:z-30 transition-transform duration-1000">
                <Link
                  to={`/${s.media_type || title}/detail/${s.id}`}
                  className="text-white bg-zinc-700 h-full bottom-2 rounded-xl flex flex-col rounded hover:bg-zinc-900 p-1 duration-300 hover:text-zinc-600"
                >
                  <img
                    className="object-cover rounded w-[100%] h-[70%]"
                    src={`https://image.tmdb.org/t/p/w500/${
                      s.backdrop_path ||
                      s.profile_path ||
                      "/d0DE3AgXsN6amSk89VC4TSUdDe.jpg"
                    }`}
                    alt="img"
                  />
                  <span className="text-center text-xl font-bold mt-2  ">
                    {s.name || s.title || s.original_title}
                  </span>
                </Link>
                {!(title === "person") && (
                  <div className="bg-yellow-300 h-[50px] rounded-full w-[50px] absolute p-2 flex justify-center items-center top-[10%] right-[-5%] flex flex-col">
                    <h1>IMDB</h1>
                    {Math.round(s.vote_average * 10) / 10}
                  </div>
                )}
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
}

export default horizontalCards;
