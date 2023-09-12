import Search from "./Search";


export default function Header() {
  return (
    <div>
      <div className="bg-mobileHero md:bg-hero h-[350px] bg-contain 2xl:bg-cover md:h-[600px] md:w-full bg-no-repeat 2xl:h-[1000px]">
        <div className="hidden md:flex justify-between items-center text-white px-4 md:px-6 py-3">
          <div className="flex items-center">
            <img
              src="./src/assets/tv.png"
              alt="logo"
              className=" w-10 md:w-14"
            />
            <h1 className="text-xl ml-5">Movie Box</h1>
          </div>
          <Search />
          <div className="flex items-center ">
            <h1 className="text-sm">Sign In</h1>
            <button>
              <img
                src="./src/assets/red-menu.png"
                alt="menu"
                className="w-6 md:w-10 ml-4"
              />
            </button>
          </div>
        </div>

        {/*--------------- MOBILE NAV  -----------------*/}

        <div className="flex justify-between items-center text-white px-4 py-3 md:hidden">
          <div className="flex items-center">
            <img
              src="./src/assets/tv.png"
              alt="logo"
              className=" w-8 md:w-14"
            />
            <h1 className="text-sm ml-5">Movie Box</h1>
          </div>
          <Search />
          <div className="flex items-center ">
            <div></div>
            <h1 className="text-sm">Sign In</h1>
            <button>
              <img
                src="./src/assets/red-menu.png"
                alt="menu"
                className="w-6 md:w-10 ml-4"
              />
            </button>
          </div>
        </div>

        <div className=" w-56 md:w-96 p-2 text-white ">
          <h1 className=" text-4xl md:text-6xl">
            John Wick 3 : Parabellum
          </h1>

          <div className="flex justify-between items-center mt-2 ">
            <div className="flex items-center">
              <img
                src="./src/assets/imdb.png"
                alt="imdb logo"
                className="w-6"
              />
              <p className="text-xs ml-2">86 / 100</p>
            </div>

            <div className="flex items-center">
              <img
                src="./src/assets/tomato.png"
                alt="rotten tomatoes logo"
                className="w-4"
              />
              <p className="text-xs ml-2 ">97%</p>
            </div>
          </div>
          <p className="mt-5 text-xs md:text-base">
            John Wick is on the run after killing a member of the international
            assassins guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
