import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  //Movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response);
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="home container page-mt-p">
      <div className="header">
        <Input setMovie={setMovie} />
        <div className="control-wrapper">
          <div className="control-buttons">
            <button>All</button>
            <button>Movies</button>
            <button>TV Shows</button>
          </div>
        </div>
      </div>
      <div className="category-title">
        <h2>
          All
          <span>(34)</span>
        </h2>
      </div>
      <div className="lists-container">
        <Card movie={movie} />
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
