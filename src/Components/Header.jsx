
export default function Header() {
  return (
    <div >
      <div className="bg-mobileHero md:bg-hero h-[500px] bg-contain 2xl:bg-cover md:h-[1000px] md:w-full bg-no-repeat">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center">
            <img
              src="./src/assets/tv.png"
              alt="logo"
              className=" w-10 md:w-14"
            />
            <h1>Movie Box</h1>
          </div>
          <div>
            <h1>Search</h1>
          </div>

          <div className="flex items-center">
            <h1>Sign In</h1>
            <button>
              <img
                src="./src/assets/red-menu.png"
                alt="menu"
                className="w-10 md:w-14"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
