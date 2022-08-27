import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { AiOutlineStar } from "react-icons/ai";

const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {data && (
        <div className="details-page container">
          <div className="background-top">
            {data.backdrop_path && (
              <img
                src={"https://image.tmdb.org/t/p/w1280" + data.backdrop_path}
                alt={data.original_title}
              />
            )}
          </div>
          <div className="details">
            <div className="detail-header">
              <div className="detail-title">
                <h1>{data.title}</h1>
              </div>
              <div className="detail-rating">
                <AiOutlineStar />
                {data.vote_average && (
                  <span>{data.vote_average.toFixed(1)}</span>
                )}
              </div>
            </div>
            <div className="detail-content">
              <div className="detail-img">
                {data.poster_path && (
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                    alt={data.original_title}
                  />
                )}
              </div>
              <div className="detail-info">
                <div className="info-header">
                  <h2>{data.tagline}</h2>
                  <p>{data.overview}</p>
                </div>
                <div className="info-country">
                  <h3>Country</h3>
                  {data.production_countries && (
                    <p>{data.production_countries[0].iso_3166_1}</p>
                  )}
                </div>
                <div className="info-genres">
                  <h3>Genres</h3>
                  {data.genres &&
                    data.genres.map((genre, id) => (
                      <span key={id}>{genre.name}</span>
                    ))}
                </div>
                <div className="info-run-time">
                  <h3>Run Time</h3>
                  <p> {data.runtime} minutes</p>
                </div>
                <div className="info-release-date">
                  <h3>Release Date</h3>
                  <p>{data.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
