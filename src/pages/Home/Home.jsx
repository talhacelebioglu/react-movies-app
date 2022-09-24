import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const [page, setPage] = useState(1);

  //Trending
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
      .then((response) => {
        console.log(response);
        setTrending(response.data.results);
        setFiltered(response.data.results);
        setTotalResults(response.data.total_results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const filterMedia = (media_type) => {
    if (media_type === "All") {
      setFiltered(trending);
      return;
    }
    const newMedia = trending.filter((i) => i.media_type === media_type);
    setFiltered(newMedia);
  };

  const filteredTitle = (media_type) => {
    if (media_type === "All") {
      return "All";
    } else if (media_type === "movie") {
      return "Movies";
    } else if (media_type === "tv") {
      return "Tv";
    }
  };

  return (
    <div className="home container page-mt-p">
      <h1>Trending</h1>
      <div className="header">
        <Input setTrending={setTrending} />
        <div className="control-wrapper">
          <div className="control-buttons">
            <button
              className={filteredTitle === "All" ? "active" : ""}
              onClick={() => filterMedia("All")}
            >
              All
            </button>
            <button onClick={() => filterMedia("movie")}>Movies</button>
            <button onClick={() => filterMedia("tv")}>TV Shows</button>
          </div>
        </div>
      </div>
      <div className="category-title">
        <h2>
          {filteredTitle}
          <span>({totalResults})</span>
        </h2>
      </div>
      <div className="lists-container">
        <Card filtered={filtered} />
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
