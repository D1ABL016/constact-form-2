import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const FailurePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <XCircle className="mx-auto h-16 w-16 text-red-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Message Sending Failed</h2>
        <p className="mt-2 text-gray-600">We're sorry, but there was an error sending your message. Please try again.</p>
        <Link
          to="/"
          className="mt-4 inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Back to Contact Form
        </Link>
      </div>
    </div>
  );
};

export default FailurePage;