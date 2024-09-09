import { useRouteError } from "react-router-dom";

const Error = () => {
  const Errors = useRouteError();
  return (
    <div className="error">
      <h1>Oops,Look like Something Went Wrong!</h1>
      <h3>
        {Errors.status}:{Errors.statusText}{" "}
      </h3>
    </div>
  );
};

export default Error;
