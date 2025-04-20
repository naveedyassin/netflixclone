
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-netflix-black px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Lost your way?</h1>
      <p className="text-xl mb-8 text-center">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <Link 
        to="/" 
        className="bg-netflix-red hover:bg-netflix-red/80 py-3 px-6 rounded-md font-semibold transition"
      >
        Netflix Home
      </Link>
      <div className="mt-8 text-netflix-lightgray">
        <span className="border border-netflix-lightgray px-2 mr-2">404</span>
        <span>Error Code: NSES-404</span>
      </div>
    </div>
  );
};

export default NotFound;
