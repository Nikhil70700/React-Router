import { useNavigate, useRouteError } from "react-router-dom";
import '../styles/styles.css'

 const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    // navigate("/");
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        {/* <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink> */}
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  }
  console.log(error);

  return <h1> The page you are looking does not exist</h1>;
};


export default ErrorPage