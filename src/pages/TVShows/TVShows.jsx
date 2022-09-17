import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import "./TVShows.css";

const TVShows = () => {
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);

  //TV Shows
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response);
        setTv(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="tv-shows container page-mt-p">
      <h1>TV Shows</h1>
      <div className="header"></div>
      <div className="category-title">
        <h2>
          TV Shows
          <span>(34)</span>
        </h2>
      </div>
      <div className="lists-container">
        <Card tv={tv} />
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default TVShows;
