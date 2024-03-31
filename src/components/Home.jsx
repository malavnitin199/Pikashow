import React from "react";
import SideNav from "./SideNav";
import TopNav from "./partials/TopNav";
import Header from "./Header";
import Cards from "./Cards";
function Home() {
  document.title = "Pikashow-home";
  return (
    <div className="w-full h-full flex">
      <div className="w-[20%] h-[100%]">
        <SideNav />
      </div>
      <div className="w-[80%] h-[100%]">
        <TopNav />
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default Home;
