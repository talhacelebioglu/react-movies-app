import React from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";

const Home = ({ data, setData }) => {
  return (
    <div className="home container">
      <div className="header">
        <Input setData={setData} />
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
        <Card data={data} />
      </div>
    </div>
  );
};

export default Home;
