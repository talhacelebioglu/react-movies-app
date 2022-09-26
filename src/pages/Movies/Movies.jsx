import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination/Pagination";
import "./Movies.css";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const [page, setPage] = useState(1);
  const [inputMovies, setInputMovies] = useState(false);

  useEffect(() => {
    setInputMovies(true);
  }, [setInputMovies]);

  //Movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response);
        setMovie(response.data.results);
        setTotalResults(response.data.total_results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="movies container page-mt-p">
      <h1>Movies</h1>
      <div className="header">
        <Input inputMovies={inputMovies} setMovie={setMovie} />
      </div>
      <div className="category-title">
        <h2>
          İtems
          <span>({totalResults})</span>
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
