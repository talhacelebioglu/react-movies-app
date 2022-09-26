import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Details.css";
import { AiOutlineStar } from "react-icons/ai";

const Details = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const location = useLocation();
  const thisTv = location.pathname.startsWith("/tv");

  //Movies
  useEffect(() => {
    if (!thisTv) {
      console.log("movie");
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((response) => {
          console.log(response);
          setDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id, thisTv]);

  //TV Shows
  useEffect(() => {
    if (thisTv) {
      console.log("tv");
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((response) => {
          console.log(response);
          setDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id, thisTv]);

  return (
    <>
      {detail && (
        <div className="details-page container page-mt-p">
          <div className="background-top">
            {detail.backdrop_path && (
              <img
                src={"https://image.tmdb.org/t/p/w1280" + detail.backdrop_path}
                alt={detail.original_title}
              />
            )}
          </div>
          <div className="details">
            <div className="detail-header">
              <div className="detail-title">
                <h1>{detail.title || detail.name}</h1>
              </div>
              <div className="detail-rating">
                <AiOutlineStar />
                {detail.vote_average && (
                  <span>{detail.vote_average.toFixed(1)}</span>
                )}
              </div>
            </div>
            <div className="detail-content">
              <div className="detail-img">
                {detail.poster_path && (
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + detail.poster_path}
                    alt={detail.original_title || detail.original_name}
                  />
                )}
              </div>
              <div className="detail-info">
                <div className="info-header">
                  <h2>{detail.tagline}</h2>
                  <p>{detail.overview}</p>
                </div>
                <div className="info-country">
                  <h3>Country</h3>
                  {detail.production_countries &&
                  detail.production_countries.length > 0 ? (
                    detail.production_countries.map((country, index) => (
                      <span key={index}>{country.iso_3166_1}</span>
                    ))
                  ) : (
                    <span>Unknown</span>
                  )}
                </div>
                <div className="info-genres">
                  <h3>Genres</h3>
                  {detail.genres &&
                    detail.genres.map((genre, id) => (
                      <span key={id}>{genre.name}</span>
                    ))}
                </div>
                <div className="info-run-time">
                  <h3>Run Time</h3>
                  <p> {detail.runtime || detail.episode_run_time} minutes</p>
                </div>
                <div className="info-release-date">
                  <h3>Release Date</h3>
                  <p>{detail.release_date || detail.first_air_date}</p>
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
