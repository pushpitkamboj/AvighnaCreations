import React from 'react';
import ImageGallery from './ImageGallery';
import VideoPlayer from './VideoPlayer';

const Gallery = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
      <ImageGallery />
      <VideoPlayer />
    </div>
  );
};

export default Gallery;