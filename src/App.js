import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Movies from "./components/Movies";
import TvShow from "./components/TvShow";
import Popular from "./components/Popular";
import People from "./components/People";
import TvDetails from "./components/TvDetails";
import PeopleDeatils from "./components/PeopleDeatils";
import MovieDetails from "./components/MovieDetails";
import Trailer from "./components/Trailer";

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/tv" element={<TvShow />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/person/detail/:id" element={<PeopleDeatils />} />
        <Route path="/movie/detail/:id" element={<MovieDetails />}>
          <Route path="/movie/detail/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv/detail/:id" element={<TvDetails />} />
      </Routes>
    </div>
  );
}

export default App;
