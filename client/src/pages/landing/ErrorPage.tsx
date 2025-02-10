import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="text-center space-y-6">
        {/* Error Icon */}
        <div className="text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-purple-800">Oops!</h1>
        <p className="text-lg text-gray-600">
          Something went wrong. The page you're looking for doesn't exist or an
          error occurred.
        </p>

        {/* Back to Learn Button */}
        <Button
          onClick={() => navigate("/learn")}
          className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200"
        >
          Go Back to Learn
        </Button>
      </div>
    </div>
  );
};
