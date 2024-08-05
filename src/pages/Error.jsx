import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <div className=" error-container container">
        <div>
          <h3>Are you lost? It seems you’ve taken a wrong turn in the quiz. Head back and try again to find the right answer.</h3>
          <Link to={"/"} className=" btn">
            {" "}
            Go To Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className=" error-container container">
      <div>
        <h3>Yikes! Code Crash! There's a problem with the code. Let's get this sorted out.</h3>
        <Link to={"/"} className=" btn">
          {" "}
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
