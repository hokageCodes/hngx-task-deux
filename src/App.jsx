
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
import MoviePage from "./Components/MoviePage";
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="font-dmSans">

     
        
   
      <div className="">
          <div className="">
          
          <Routes>   
           <Route path={"/"} element={<MovieList /> } />
            <Route path={"/movie/:movieId"} element={<MoviePage />} />
          </Routes>   
          </div>
   
        <div className=" ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
