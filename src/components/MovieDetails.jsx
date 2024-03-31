import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncLoadmovies } from "./store/action/movieAction";
import { removeMovie } from "./store/reducer/MovieSlice";
import Cards from "./Cards";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncLoadmovies(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);
  // console.log(info);
  return (
    info.detail &&
    info.videos && (
      <div
        className="w-screen h-screen relative overflow-hidden"
        style={{
          backgroundRepeat: "no-repeat",
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),   url(https://image.tmdb.org/t/p/w500/${
            info.detail.backdrop_path ||
            info.detail.profile_path ||
            "/d0DE3AgXsN6amSk89VC4TSUdDe.jpg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <nav className="flex justify-between">
          <span
            class="ri-arrow-left-line text-white text-4xl cursor-pointer"
            onClick={() => navigate(-1)}
          ></span>

          <div className=" flex  gap-2 text-2xl">
            <NavLink
              to={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
              className=" text-white "
              target="_blank"
            >
              IMDB
            </NavLink>
            <NavLink
              to={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              className=" text-white "
              target="_blank"
            >
              <i class="ri-pages-fill"></i>
            </NavLink>
            <NavLink
              to={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
              className=" text-white "
              target="_blank"
            >
              Imdb
            </NavLink>
          </div>
        </nav>

        <div className="w-[100%]h-[40%] flex mt-16 flex-nowrap mb-6">
          <div className="w-[50%] flex items-center justify-center shadow-2xl ">
            <img
              className="object-cover rounded-xl  shadow-2xl"
              src={`https://image.tmdb.org/t/p/w500/${
                info.detail.backdrop_path ||
                info.detail.profile_path ||
                "/d0DE3AgXsN6amSk89VC4TSUdDe.jpg"
              }`}
              alt="img"
            />
          </div>
          <div className="w-[60%] h-[100%] text-white">
            <h1 className="text-white font-bold text-4xl">{`${
              info.detail.name ||
              info.detail.title ||
              info.detail.original_title
            }`}</h1>
            <div className="flex gap-3 text-sm my-2">
              {info.detail.genres
                .map((a) => a.name)
                .map((name) => (
                  <h1> {name}</h1>
                ))}
            </div>
            <h2 className="text-lg mb-2">
              {"Released Date : "}
              {info.detail.release_date.split("-").reverse().join("-")}
            </h2>
            <p className="font-bold">{`${info.detail.overview}`}</p>
            <button
              className="bg-blue-400 mt-2 rounded-md text-2xl p-2"
              onClick={() => {
                navigate(`/movie/detail/:id/trailer`);
              }}
            >
              <i class="ri-play-fill"></i>watch Trailer
            </button>
          </div>
        </div>
        <hr className="border-none h-[1px] w-[100%] bg-zinc-400" />
        <div className=" w-[100%] h-[39vh] flex">
          <div className=" w-[25%] h-full flex flex-col justify-center text-white text-xl gap-6 ">
            <div className="flex  items-center'">
              <h1 className="w-[6vw]"> Streaming</h1>
              <div className="flex gap-2">
                {info.watchproviders?.rent ? (
                  info.watchproviders.rent?.map((a) => (
                    <img
                      className="w-[3vw] h-[4vh] object-contain"
                      src={`https://image.tmdb.org/t/p/original/${a.logo_path}`}
                    />
                  ))
                ) : (
                  <h1> No Options</h1>
                )}
              </div>
            </div>
            <div className="flex">
              <h1 className="w-[6vw]">Buy option</h1>
              <div className="flex gap-2">
                {info.watchproviders?.buy ? (
                  info.watchproviders.buy.map((a) => (
                    <img
                      className="w-[3vw] h-[4vh] object-contain"
                      src={`https://image.tmdb.org/t/p/original/${a.logo_path}`}
                    />
                  ))
                ) : (
                  <h1> No options</h1>
                )}
              </div>
            </div>
            <div className="flex">
              {" "}
              <h1 className="w-[6vw]">Rent Option</h1>
              <div className="flex gap-2">
                {info.watchproviders?.flatrate.length > 0 ? (
                  info.watchproviders.flatrate.map((a) => (
                    <img
                      className="w-[3vw] h-[4vh] object-contain"
                      src={`https://image.tmdb.org/t/p/original/${a.logo_path}`}
                    />
                  ))
                ) : (
                  <h1>No Option</h1>
                )}
              </div>
            </div>
          </div>
          <div className="w-[75%] h-full">
            <h1 className="text-white text-2xl font-bold">More Like This</h1>
            <div>
              <Cards hideoption={true} />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    )
  );
}

export default MovieDetails;
