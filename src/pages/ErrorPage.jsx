import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <h2 className="text-xl text-gray-500">
        {error.status} - {error.statusText}
      </h2>
      <Link to={"/"} className="text-blue-500 underline text-lg">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
