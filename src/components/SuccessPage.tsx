import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const SuccessPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Message Sent Successfully!</h2>
        <p className="mt-2 text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
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

export default SuccessPage;