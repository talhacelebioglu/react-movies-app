import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination/Pagination";
import "./Movies.css";

const Movies = () => {
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
    <div className="movies container page-mt-p">
      <h1>Movies</h1>
      <div className="header">
        <Input />
      </div>
      <div className="category-title">
        <h2>
          İtems
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

export default Movies;
