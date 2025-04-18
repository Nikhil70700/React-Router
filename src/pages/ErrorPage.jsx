import React from 'react';
import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(navigate);

  const handleGoBack = () => navigate(-1);
   const handleGoBackHome=()=>navigate("/");

  // type‑safe check for RR v6.4+ errors
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="max-w-md text-center space-y-6">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif"
              alt="404 page"
              className="w-full rounded-lg"
            />
          </figure>
          <p className="text-xl font-semibold text-gray-800">
            Oops! The page you’re looking for could not be found.
          </p>
          <button
            onClick={handleGoBack}
            className="inline-block px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-green-600 transition mr-1"
          >
            Go Back
          </button>
          <button
            onClick={handleGoBackHome}
            className="inline-block px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
          >
            Home Page
          </button>
        </div>
      </section>
    );
  }

  console.error(error);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold text-red-600">
        Something went wrong. Please try again later.
      </h1>
    </div>
  );
};

export default ErrorPage;
