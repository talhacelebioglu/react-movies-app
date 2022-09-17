import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVShows from "./pages/TVShows/TVShows";
import Suggest from "./pages/Suggest/Suggest";
import Navbar from "./components/Navbar";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className="movies-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/tv/:id" element={<Details />} />
        <Route path="/suggest" element={<Suggest />} />
      </Routes>
    </div>
  );
}

export default App;
