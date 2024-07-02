import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="h-52 w-auto mx-[200px] mt-[40px] rounded-[7px] bg-red-300 text-md text-red-600 text-center">
      <h1 className="text-4xl">OOPS !!!</h1>
      <h2 className="text-2xl">Something went wrong.</h2>
      <h3 className="text-2xl">
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorComponent;
