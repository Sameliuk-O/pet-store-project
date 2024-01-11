import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex h-full min-h-screen  items-center  justify-center opacity-20">
      <div className="h-16 w-16 animate-spin rounded-full border-y-4 border-blue-500" />
    </div>
  );
};

export default Loading;
