import React from 'react';

interface LoadingProps {
  tip?: string;
}

const Loading: React.FC<LoadingProps> = ({ tip = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-gray-600">{tip}</p>
      </div>
    </div>
  );
};

export default Loading; 