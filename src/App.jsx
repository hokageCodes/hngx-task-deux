
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
import MoviePage from "./Components/MoviePage";
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="font-dmSans">

     
        
   
      <div className="relative min-h-screen ">
          <div className="h-full pb-32">
          
          <Routes>   
           <Route path={"/"} element={<MovieList /> } />
            <Route path={"/movie/:movieId"} element={<MoviePage />} />
          </Routes>   
          </div>
   
        <div className="absolute bottom-0 w-full h-28 pt-96 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
