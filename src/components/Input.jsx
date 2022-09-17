import axios from "axios";
import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";

const Input = ({ setMovie }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`
      )
      .then((response) => {
        console.log(response);
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <RiIcons.RiSearch2Line />
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          id="search"
          type="text"
          placeholder="eg. Harry Potter"
          value={input}
          onChange={handleChange}
        />
        <label htmlFor="search">Search movies or tv shows</label>
      </form>
    </div>
  );
};

export default Input;
