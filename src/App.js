import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVShows from "./pages/TVShows/TVShows";
import Suggest from "./pages/Suggest/Suggest";
import Navbar from "./components/Navbar";
import Details from "./pages/Details/Details";
import Pagination from "./components/Pagination/Pagination";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then(function (response) {
        console.log(response);
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="movies-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/suggest" element={<Suggest />} />
      </Routes>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default App;
