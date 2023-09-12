import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MoviePage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const details = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzcyZWUwZDRlYzAyZWVmNDNkY2UzNjBmN2I4NDllYyIsInN1YiI6IjY0ZmVmYmVkNmEyMjI3MDBjM2I1NTA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IX4vZfe67rCcFewb07NpXRc7CVIE8o56Oj8xnQAm1nA",
    },
  };

  const movieDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.request(details);
      setMovieInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    movieDetails();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%]  gap-4">
          <div className=" ">
            <p>side bar</p>
          </div>
          <div className="">
            <img
              src={`http://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
              alt="movie trailer"
              className=""
            />
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <div>
                  <h2 data-testid="movie-title">{movieInfo.original_title}</h2>
                  <p data-testid="movie-release-date">
                    {movieInfo.release_date}
                  </p>
                  <p data-testid="movie-runtime">{movieInfo.runtime}</p>
                                     
                    {movieInfo.genres.slice(0, 2).map((genre, index) => (
                  <div key={index}>
                    <span> {genre.name}</span>
                  </div>
                ))}                  
                </div>
                <p data-testid="movie-overview">{movieInfo.overview}</p>
                
              </div>
              <div>
                <p>see show times</p>
                <p>movie options</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
