import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-center p-4">
      <FaExclamationTriangle className="text-7xl text-accent mb-6" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;