import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h3>The page you are looking for does not exist.</h3>
      <Link to="/">GO BACK TO HOME PAGE</Link>
    </div>
  );
};

export default PageNotFound;
