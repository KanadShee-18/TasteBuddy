const User = () => {
  return (
    <div className="userCard mt-2">
      <h2 className="font-txtFont text-md text-teal-700 font-semibold">
        Name: Kanad Shee
      </h2>
      <h3 className="font-txtFont text-sm text-lime-950 font-medium">
        Location: Kolkata
      </h3>
      <h4 className="font-txtFont text-sm text-cyan-800">
        Contact Info: @kanad_shee
      </h4>
      <button className="font-txtFont font-medium text-[12px] rounded-lg px-2 py-1 text-white my-2 bg-blue-600 hover:bg-blue-800 active:bg-white active:text-blue-800 active:border border-blue-700 hover:scale-95 duration-200">
        Show more
      </button>
    </div>
  );
};

export default User;
