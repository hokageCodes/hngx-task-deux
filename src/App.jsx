import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";

function App() {

  return (
    <div>
      <Header />
      <div className="relative min-h-screen">
        <div className="h-full pb-40">
          <MovieList />
        </div>
        <div className="absolute bottom-0 w-full h-40 pt-96 ">
          <Footer />
    </div>
        
      </div>
    </div>
  );
}

export default App
