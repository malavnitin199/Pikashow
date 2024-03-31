import React from "react";

import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Trailer({ link }) {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);

  return (
    info && (
      <div className="w-screen h-screen absolute top-20 left-60 ">
        <div className="w-[60%] h-[70%] flex justify-center items-center bg-zinc-700 rounded-lg opacity-100 relative">
          <div
            className="absolute top-0 right-0 p-1 border border-white m-2 text-2xl font-bold rounded-lg hover:cursor-pointer"
            onClick={(a) => {
              navigate(-1);
            }}
          >
            X
          </div>
          <div className="absolute top-0 left-0 p-2 w-[150px] flex justify-center items-center border border-white m-2 text-2xl font-bold rounded-lg  ">
            Trailer
          </div>
          <div className="opacity-1">
            <ReactPlayer
              url={`{https://www.youtube.com/watch?v=${info.videos.key}}`}
              className="w-[100%] h-[100%] opacity-100  "
              controls={true}
            />
          </div>
          ;
        </div>
      </div>
    )
  );
}

export default Trailer;
