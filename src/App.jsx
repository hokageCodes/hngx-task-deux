import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="font-dmSans">
      <Header />

      <div className="relative min-h-screen ">
        <div className="h-full pb-32">
          <MovieList />
        </div>
        <div className="absolute bottom-0 w-full h-28 pt-96 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
