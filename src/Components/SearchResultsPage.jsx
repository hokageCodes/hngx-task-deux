import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movieId = params.get("movieId");

  // State to store movie details
  const [movieDetails, setMovieDetails] = useState(null);

  // API request to fetch movie details
  useEffect(() => {
    if (movieId) {
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              params: {
                language: "en-US",
              },
              headers: {
                accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzcyZWUwZDRlYzAyZWVmNDNkY2UzNjBmN2I4NDllYyIsInN1YiI6IjY0ZmVmYmVkNmEyMjI3MDBjM2I1NTA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IX4vZfe67rCcFewb07NpXRc7CVIE8o56Oj8xnQAm1nA",
              },
            }
          );

          setMovieDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchMovieDetails();
    }
  }, [movieId]);

  return (
    <div className="text-center">
      <h1 className="text-2xl mt-4">Search Results</h1>
      {movieDetails ? (
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                      alt="poster image"
                      className="mx-auto mt-4"
          />
          <h2 className="text-2xl mt-2">{movieDetails.title}</h2>
          <p className="text-1xl 2xl:text-2xl mt-2">
            Release Date: {movieDetails.release_date}
          </p>
          <p className="mt-2 px-6">{movieDetails.overview}</p>

          <div className="text-1xl 2xl:text-1xl text-movieRed mt-2 underline">
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
