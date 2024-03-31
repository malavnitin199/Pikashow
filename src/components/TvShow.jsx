import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Input from "./partials/Input";
import axios from "./utils/axios";
import { useNavigate } from "react-router-dom";
import LargeCards from "./LargeCards";
function TvShow() {
  const [catagory1, setCatagory1] = useState("top_rated");
  const options1 = ["airing_today", "on_the_air", "popular", "top_rated"];
  //   const [catagory2, setCatagory2] = useState("day");
  const options2 = ["day", "week"];
  const navigate = useNavigate();
  const [cardData, setCarsData] = useState([]);
  const [page, SetPage] = useState(1);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `/tv/${catagory1}?language=en-US&page=${page}`
      );
      SetPage((prev) => prev + 1);
      setCarsData((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCarsData([]);
    SetPage(1);
    getData();
  }, [catagory1]);
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-[10%] flex justify-between item bg-zinc-800 sticky top-0">
        <div className="flex items-center gap-11 text-3xl">
          <i
            class=" border border-zinc-400 text-4xl  p-2 ri-arrow-left-circle-fill flex items-center justify-center ml-4"
            onClick={() => navigate(-1)}
          ></i>
          <h1 className="text-blue-400">Tv Show</h1>
        </div>
        <div className="max-h-[50%] w-[60%]">
          <TopNav />
        </div>
        <div className="flex">
          <Input options={options1} setCatagory={setCatagory1} />
          {/* <Input options={options2} setCatagory={setCatagory2} /> */}
        </div>
      </div>
      <div className="h-[90%] w-full">
        <LargeCards cardData={cardData} getData={getData} title="tv" />
      </div>
    </div>
  );
}

export default TvShow;
