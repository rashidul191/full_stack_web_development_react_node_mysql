import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-primary">404</h1>

        <h2 className="text-3xl font-semibold">Page Not Found</h2>

        <p className="text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>

          {/* <Link to="/contact" className="btn btn-outline">
            Contact Support
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
