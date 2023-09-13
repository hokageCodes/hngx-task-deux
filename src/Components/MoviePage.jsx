import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

export default function MoviePage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [usCertification, setUsCertification] = useState(""); // State to store US certificatio

  const details = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits,release_dates`,
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
      console.log(response.data.release_dates.results);
      // Find the release date entry for the United States (US)
      const desiredCountryCode = "US"; // Replace with your desired country code
      const releaseDateEntry = response.data.release_dates.results.find(
        (entry) => entry.iso_3166_1 === desiredCountryCode
      );

      if (releaseDateEntry) {
        // Access and set the US certification
        const usCertification =
          releaseDateEntry.release_dates[0]?.certification;
        setUsCertification(usCertification);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    movieDetails();
  }, [movieId]);

  const formatDateToUTC = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%]  gap-4">
          <Sidebar />
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
                  <h2
                    data-testid="movie-title"
                    className="text-2xl tracking-wide"
                  >
                    {movieInfo.title}
                  </h2>
                  <span className="hidden md:flex md:ml-3">•</span>
                  <p
                    data-testid="movie-release-date"
                    className="md:ml-5 text-2xl"
                  >
                    {formatDateToUTC(movieInfo.release_date)}
                  </p>
                  <span className="hidden md:flex ml-3 mr-3">•</span>

                  {usCertification ? (
                    <p className="text-2xl">{usCertification}</p>
                  ) : (
                    <p>US Certification not available</p>
                  )}
                  <span className="hidden md:flex ml-3 mr-3">•</span>
                  <p data-testid="movie-runtime" className="text-2xl">
                    {movieInfo.runtime}
                  </p>
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
                <div className="block md:flex items-center mt-2 ">
                  <h1 className="text-xl">Director:</h1>
                  {[
                    movieInfo.credits.cast
                      .filter(
                        (person) => person.known_for_department === "Directing"
                      )
                      .map((director) => director.name)
                      .slice(0, 1),
                    ...movieInfo.credits.crew
                      .filter(
                        (person) => person.known_for_department === "Directing"
                      )
                      .map((director) => director.name)
                      .slice(0, 1),
                  ].map((directors, i) => (
                    <div key={i}>
                      <p className="md:ml-2 text-movieRed text-lg">
                        {" "}
                        {directors}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="block md:flex items-center mt-2">
                  <h1 className=" text-xl">Writer:</h1>
                  {movieInfo.credits.crew
                    .filter(
                      (person) => person.known_for_department === "Writing"
                    )
                    .slice(0, 1)
                    .map((writer, i) => (
                      <div key={i}>
                        <p className="text-movieRed text-lg md:ml-2">
                          {writer.name}
                        </p>
                      </div>
                    ))}
                </div>
                <div className="block md:flex items-center mt-2">
                  <div>
                    <h1 className="text-xl">Stars:</h1>
                  </div>

                  {movieInfo.credits.cast.slice(0, 3).map((credit, index) => (
                    <div key={index}>
                      <p className="md:ml-2 text-lg text-movieRed">
                        {credit.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <button className="flex items-center justify-center bg-movieRed rounded-lg px-3 py-3 w-full mb-2">
                  <img
                    src="/src/assets/tickets.png"
                    alt="ticket"
                    className="w-8"
                  />
                  <p className="ml-3 text-white">See Showtimes</p>
                </button>
                <button className="flex items-center justify-center bg-movieRed bg-opacity-25 rounded-lg px-3 py-3 w-full border border-movieRed">
                  <img src="/src/assets/list.png" alt="list" className="w-7" />
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
