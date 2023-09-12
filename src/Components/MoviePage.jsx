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
          <div className="p-3 md:p-14 2xl:p-10 overflow-x-hidden">
            <div className="relative">
              <img
                src={`http://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
                alt="movie trailer"
                className="w-full rounded-xl overflow-hidden"
              />
              <div className="centered">
                <img
                  src="/src/assets/white-play.png"
                  alt="play button"
                  className=" w-20 md:w-full bg-gray-400 bg-opacity-25 rounded-full p-3"
                />
                <p className="text-white text-center mt-2 text-lg">
                  Watch Trailer
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 ">
              <div>
                <div className="block md:flex items-center mt-5 ">
                  <h2 data-testid="movie-title" className="text-2xl tracking-wide">
                    {movieInfo.title}
                  </h2>
                  <span className="hidden md:flex md:ml-3">•</span>
                  <p data-testid="movie-release-date" className="md:ml-5 text-2xl">
                    {movieInfo.release_date}
                  </p>
                  <span className="hidden md:flex ml-3 mr-3">•</span>
                  <p data-testid="movie-runtime" className="text-2xl">{movieInfo.runtime}</p>
                  <span className="hidden md:flex md:ml-3">•</span>

                  {movieInfo.genres.slice(0, 2).map((genre, index) => (
                    <div key={index}>
                      <div className="">
                        <p className="md:ml-2 w-max px-2  text-sm border border-movieRed rounded-full md:px-2 border-opacity-25 md:text-base text-movieRed my-2">
                      
                          {genre.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p data-testid="movie-overview">{movieInfo.overview}</p>
              </div>
              <div>
                                  <button className="flex items-center justify-center bg-movieRed rounded-lg px-3 py-3 w-full mb-2">
                                      <img src="/src/assets/tickets.png" alt="ticket" className="w-5"/>
                                      <p className="ml-3 text-white">See Showtimes</p></button>
                                  <button className="flex items-center justify-center bg-movieRed bg-opacity-25 rounded-lg px-3 py-3 w-full border-movieRed">
                                      <img src="/src/assets/list.png" alt="list" className="w-5"/>
                                     <p className="ml-3 text-black">More watch options</p> 
                                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
