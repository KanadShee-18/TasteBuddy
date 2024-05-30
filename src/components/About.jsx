import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="h-auto w-1/3 py-3 mx-auto mt-[40px] bg-slate-200 text-md text-yellow-100 justify-center items-center text-center rounded-md shadow-2xl ease-out hover:scale-110 duration-200">
      <h1 className="font-txtFont text-blue-500 text-sm pt-3">
        Hello Everyone
      </h1>
      <div className="w-[110px] h-[110px] mx-auto bg-blue-400 rounded-full flex items-center mt-1 ease-in-out hover:scale-105 duration-300">
        <img
          src="https://avatars.githubusercontent.com/u/150697205?v=4"
          alt="img"
          className="w-[100px] h-[100px] mx-auto rounded-full"
        />
      </div>
      <h2 className="text-sm font-txtFont text-balance px-4 text-gray-600 font-semibold mt-1">
        I, Kanad Shee, making this project just for learning purpose.
      </h2>
      <UserClass />
    </div>
  );
};

export default About;
