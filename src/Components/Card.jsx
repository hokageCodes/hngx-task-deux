/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Card() {
  const [movieData, setMovieData] = useState([]);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/popular?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.REACT_APP_API_KEY,
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
        {/* <button onClick={handleClick}>CLICK ME</button> */}
        {movieData.map((movie, index) => (
          <div key={index}>
                <div className="card" data-testid="movie-card">
                   
              <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" className="" data-testid="movie-poster"
              />
                    <h1 className="" data-testid="movie-title">{movie.title}</h1>
                    <h4 className="" data-testid="movie-release-date">{movie.release_date}</h4>
                    
            </div>
          </div>
        ))}
      </div>
    );
}
