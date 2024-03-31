import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Input from "./partials/Input";
import axios from "./utils/axios";
import { useNavigate } from "react-router-dom";
import LargeCards from "./LargeCards";
function Trending() {
  const [catagory1, setCatagory1] = useState("all");
  const options1 = ["all", "tv", "movie", "person"];
  const [catagory2, setCatagory2] = useState("day");
  const options2 = ["day", "week"];
  const navigate = useNavigate();
  const [cardData, setCarsData] = useState([]);
  const [page, SetPage] = useState(1);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${catagory1}/${catagory2}?page=${page}`
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
  }, [catagory1, catagory2]);
  return (
    <div className="w-screen h-screen relative ">
      <div className="w-full h-[10vh] flex justify-between item  z-10 fixed top-0 bg-[#1F1E24]">
        <div className="flex items-center gap-11 text-3xl">
          <div
            class=" border border-zinc-400 text-4xl w-12 p-2 ri-arrow-left-circle-fill flex items-center justify-center ml-4"
            onClick={() => navigate(-1)}
          ></div>
          <h1 className="text-blue-400">Trending</h1>
        </div>
        <div className="max-h-[50%] w-[60%]  ">
          <TopNav />
        </div>
        <div className="flex">
          <Input options={options1} setCatagory={setCatagory1} />
          <Input options={options2} setCatagory={setCatagory2} />
        </div>
      </div>
      <div className="h-[90%] w-full mt-16 ">
        <LargeCards cardData={cardData} getData={getData} title={catagory1} />
      </div>
    </div>
  );
}

export default Trending;
