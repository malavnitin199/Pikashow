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

function TvDetail() {
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
  return <h1>helllllllllllooooooooooooooo</h1>;
}

export default TvDetail;
