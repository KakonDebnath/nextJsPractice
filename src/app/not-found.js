import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl text-red-500">
        !!!Opes 404 <span>Page Not Fount</span>
      </h1>
      <div>
        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
