import User from "./User";
// import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="min-h-screen">
            <div className="h-auto md:w-1/3 w-2/3 py-3 mx-auto mt-[40px] bg-slate-200 text-md text-yellow-100 justify-center items-center text-center rounded-md shadow-xl ease-out hover:scale-105 duration-200">
                <h1 className="pt-3 text-sm text-blue-500 font-txtFont">
                    Hello Everyone
                </h1>
                <div className="w-[110px] h-[110px] mx-auto bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 rounded-full flex items-center mt-1 ease-in-out hover:scale-105 duration-300">
                    <img
                        src="https://avatars.githubusercontent.com/u/150697205?v=4"
                        alt="img"
                        className="w-[100px] h-[100px] mx-auto rounded-full"
                    />
                </div>
                <h2 className="px-4 mt-1 text-sm font-semibold text-gray-600 font-txtFont text-balance">
                    I, Kanad Shee, making this project just for learning
                    purpose.
                </h2>
                <User
                    name={"Kanad Shee"}
                    location={"Kolkata"}
                    contact={"@kanad_shee"}
                />
            </div>
        </div>
    );
};

export default About;
