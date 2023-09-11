

export default function Search() {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="What do you want to watch?"
          className="hidden md:flex border border-2-grey bg-transparent placeholder-white text-xs md:text-base rounded-md md:w-[500px] placeholder-opacity-50 px-3 py-1"
        />

        <div className="absolute top-2 right-3">
          <img
            src="./src/assets/search-icon.png"
            alt="search icon"
            className="w-4"
          />
        </div>

        <img
          src="./src/assets/search-icon.png"
          alt="search icon"
          className="w-4 flex md:hidden"
        />
      </div>
    </div>
  );
}
