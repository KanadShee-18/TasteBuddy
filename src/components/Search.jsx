const Search = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-center font-txtFont text-[30px] font-semibold my-4 text-gray-600">
          Search your food item here:{" "}
        </h2>
        <div className="w-2/3 h-[45px] m-auto border-1 border-black rounded-md flex justify-center items-center shadow-lg md:w-2/6">
          <input
            type="text"
            placeholder="Type your item here:"
            className="w-full px-2 border-none outline-none font-txtFont text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
