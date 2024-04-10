import React from 'react';

import one from './assets/1.png'
import three from './assets/3.png'
import six from './assets/6.png'
import eightone from './assets/8-1.png'
import eight from './assets/8.png'
import nineone from './assets/9(1).png'
import eleven from './assets/11.png'
import twelve from './assets/12.png'
import thirteen from './assets/13.png'
import fourteen from './assets/14.png'
import fourteenone from './assets/14(1).png'
import sixteen from './assets/16.png'
import twentysixone from './assets/26(1).png'
import thirtythree from './assets/33.png'
import thirtyfour from './assets/34.png'
import thirtyfourone from './assets/34.1.png'
import fortytwo from './assets/42.png'
import fortyone from './assets/41.png'
import fortyfive from './assets/45.png'
import fortysix from './assets/46.png'
import fortyseven from './assets/47.png'


const imageData = [
    {
      src: one,
      alt: 'Image 1 description',
    },
    // {
    //   src: Logo,
    //   alt: 'Image 2 description',
    // },
    {
        src: three,
        alt: 'Image 2 description',
      },
      {
        src: six,
        alt: 'Image 2 description',
      },
      {
        src: eight,
        alt: 'Image 2 description',
      },
      {
        src: eightone,
        alt: 'Image 2 description',
      },
      {
        src: nineone,
        alt: 'Image 2 description',
      },
      {
        src: eleven,
        alt: 'Image 2 description',
      },
      {
        src: twelve,
        alt: 'Image 2 description',
      },
      {
        src: thirteen,
        alt: 'Image 2 description',
      },
      {
        src: fourteen,
        alt: 'Image 2 description',
      },
      {
        src: fourteenone,
        alt: 'Image 2 description',
      },
      {
        src: sixteen,
        alt: 'Image 2 description',
      },
      {
        src: twentysixone,
        alt: 'Image 2 description',
      },
      {
        src: thirtythree,
        alt: 'Image 2 description',
      },
      {
        src: thirtyfour,
        alt: 'Image 2 description',
      },
      {
        src: thirtyfourone,
        alt: 'Image 2 description',
      },
      {
        src: fortyone,
        alt: 'Image 2 description',
      },
      {
        src: fortytwo,
        alt: 'Image 2 description',
      },
      {
        src: fortyfive,
        alt: 'Image 2 description',
      },
      {
        src: fortysix,
        alt: 'Image 2 description',
      },
    //   {
    //     src: fortyseven,
    //     alt: 'Image 2 description',
    //   },
    //   {
    //     src: Logo,
    //     alt: 'Image 2 description',
    //   },
    //   {
    //     src: Logo,
    //     alt: 'Image 2 description',
    //   },
  ];
  
  const ImageGallery = () => {
    return (
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    //     {imageData.map((image, index) => (
    //       <div key={index} className="overflow-hidden rounded-lg shadow-md">
    //         <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
    //       </div>
    //     ))}
    //   </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {imageData.map((image, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md">
        <div className="w-full h-64 relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    ))}
  </div>
      
    );
  };
  
export default ImageGallery;