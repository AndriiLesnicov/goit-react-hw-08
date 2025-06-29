import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
