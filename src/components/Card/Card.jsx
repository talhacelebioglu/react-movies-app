import React from "react";
import "./Card.css";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ tv, movie }) => {
  return (
    <>
      {movie
        ? movie.map((item) => (
            <Link to={`/movie/${item.id}`} key={item.id}>
              <div className="card-wrapper">
                <div className="card">
                  <div className="card-rating">
                    <AiOutlineStar />
                    <p>{item.vote_average}</p>
                  </div>
                  <div className="card-image">
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                      alt={item.original_title}
                    />
                  </div>
                  <div className="card-info">{item.title}</div>
                </div>
              </div>
            </Link>
          ))
        : tv.map((item) => (
            <Link to={`/tv/${item.id}`} key={item.id}>
              <div className="card-wrapper">
                <div className="card">
                  <div className="card-rating">
                    <AiOutlineStar />
                    <p>{item.vote_average}</p>
                  </div>
                  <div className="card-image">
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                      alt={item.original_name}
                    />
                  </div>
                  <div className="card-info">{item.name}</div>
                </div>
              </div>
            </Link>
          ))}
    </>
  );
};

export default Card;
