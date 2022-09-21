import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const [page, setPage] = useState(1);

  //Movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
      .then((response) => {
        console.log(response);
        setTrending(response.data.results);
        setTotalResults(response.data.total_results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="home container page-mt-p">
      <h1>Trending</h1>
      <div className="header">
        <Input setTrending={setTrending} />
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
          <span>({totalResults})</span>
        </h2>
      </div>
      <div className="lists-container">
        <Card trending={trending} />
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
