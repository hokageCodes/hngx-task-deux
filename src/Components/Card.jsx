/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Card() {
  const [movieData, setMovieData] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzcyZWUwZDRlYzAyZWVmNDNkY2UzNjBmN2I4NDllYyIsInN1YiI6IjY0ZmVmYmVkNmEyMjI3MDBjM2I1NTA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IX4vZfe67rCcFewb07NpXRc7CVIE8o56Oj8xnQAm1nA",
    },
  };

  const getMovie = async () => {
    await axios
        .request(options)
        .then(function (res) {
           
        setMovieData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

//     const handleClick = (e) => {
//         e.preventDefault()
//         getMovie()
//   } 
    
    
    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 pt-10 mt-10 px-3">
          {movieData.map((movie, index) => (
            <div key={index}>
              <div className="card " data-testid="movie-card">
                <img
                  src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Movie Poster"
                  className="w-full"
                  data-testid="movie-poster"
                />
                <h1 className="" data-testid="movie-title">
                  {movie.title}
                </h1>
                <h4 className="" data-testid="movie-release-date">
                  USA, {movie.release_date}
                </h4>
                <div className="flex justify-between items-center">
                  <p>{movie.vote_average * 10}%</p>
                  <p>{movie.vote_average * 10}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
