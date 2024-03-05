import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl">Image Optimization</h1>
      <div>
        <h3>Regular Image </h3>
        <img
          src="https://i.ibb.co/p2nb75Q/cd1.jpg"
          alt="image"
          width={700}
          height={500}
          className="mx-auto"
        />
      </div>
      <div>
        <h3>Next js image Component</h3>
        <Image
          alt="next image"
          src="https://i.ibb.co/p2nb75Q/cd1.jpg"
          height={500}
          width={700}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default GalleryPage;
