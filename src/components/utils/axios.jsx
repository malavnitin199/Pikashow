import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDY1NjM4Y2FjYTJjMjUzYjlmMjZlMTU5ZWNjYTY2NSIsInN1YiI6IjY2MDIxNjhlN2Y2YzhkMDE3Yzc0MDg1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pnk-eIHsFNmJtSY64ah0MbolOKn1qDELCEvsg8xt-Y4",
  },
});

export default instance;
