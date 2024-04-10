import React from 'react';
import one from "./assets/servicesImages/one.jpeg"
import six from "./assets/servicesImages/six.jpeg"
import ten from "./assets/servicesImages/ten.jpeg"
import threefour from "./assets/34.1.png"
import onesix from "./assets/16.png"
import two from './assets/servicesImages/two.jpeg' 
import bride from './assets/Bride3.png'
import threethree from './assets/33.png'
import photoshoot from './assets/photoshoot.png'

const EventComponent = ({ number, eventName, imageUrl, content }) => {
  return (
    // <div className="flex flex-col items-center mb-8 w-full md:w-1/2 lg:w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg p-6">
    //   <div className="bg-white text-purple-600 text-4xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
    //     {number}.
    //   </div>
    //   <h2 className="text-3xl font-semibold text-white mb-6">{eventName}</h2>
    //   <img
    //     src={imageUrl}
    //     alt={eventName}
    //     className="w-4/5 h-128 object-cover rounded-lg mb-6"
    //   />
    //   <p className="text-white leading-relaxed text-lg max-w-4xl">{content}</p>
    // </div>
        <div className="flex flex-col items-center mb-8 w-full md:w-1/2 lg:w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg p-6">
          <div className="bg-white text-purple-600 text-4xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
            {number}.
          </div>
          <h2 className="text-3xl font-semibold text-white mb-6">{eventName}</h2>
          <img
            src={imageUrl}
            alt={eventName}
            className="w-11/12 max-w-screen-lg mx-auto h-auto mb-6"
          />
          <p className="text-white leading-relaxed text-lg max-w-4xl">{content}</p>
        </div>
      );
    };

const OurServices = () => {
  const events = [
    {
      number: 1,
      eventName: 'Wedding',
      imageUrl: one,
      // imageUrl: 'https://imgs.search.brave.com/Prx5iwVKaMrLKASYMgMcCuiNleBDri6TkCFiw_Tynh8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYXJt/NjYuc3RhdGljLmZs/aWNrci5jb20vNjU1/MzUvNTEwMTQ5NTI5/MDZfOGM5M2I4Yjcy/My5qcGc',
      content: 'In Indian culture, weddings are not just events; they are grand celebrations that involve various rituals and ceremonies, each adding its charm to the occasion. At Avighna Creations, we understand and honor these cultural traditions, ensuring that every aspect of your Indian wedding is executed with authenticity and finesse. Let us explore some of the key events that typically unfold during an Indian wedding:'

    },
    {
      number: 2,
      eventName: 'Haldi Ceremony',
      imageUrl: six,
      content:
      'The Haldi ceremony is a joyful pre-wedding ritual celebrated in Indian weddings, typically a day  before the wedding. At Avighna Creations, we believe in weaving the tapestry of tradition and culture into every event we curate.Our experienced team works closely with families to understand their unique customs and preferences, ensuring that each Haldi ceremony is a personalized expression of love and joy. Whether it is designing intricate floral arrangements or curating traditional rituals, we approach every detail with the same dedication and passion as if it were our family event.'},
    {
      number: 3,
      eventName: 'Mehendi Ceremony',
      imageUrl: ten,
      content:
      'The Mehendi ceremony is a cherished tradition in Indian weddings, usually held a day or two before the wedding. It involves the application of intricate henna designs on the hands of bride and feet, symbolizing love, joy, and new beginnings. At Avighna Creations we elevate the experience by providing a blend of artistry and tradition. Our skilled henna artists craft intricate designs on the hands and feet of bride, incorporating personalized motifs and symbols that reflect the couple love story'
    },
    {
      number: 4,
      eventName: 'Sangeet Ceremony',
      imageUrl: onesix, 
      content:
        'The sangeet ceremony is a lively pre-wedding celebration filled with music, dance, and revelry, held a day or two before the wedding. Avighna Creations turns the Sangeet ceremony into an unforgettable extravaganza with our expertise in music, dance, and entertainment. From choreographing mesmerizing dance performances to coordinating DJs, we create an atmosphere of celebration that keeps guests enthralled throughout the evening. Our meticulous planning ensures seamless transitions between acts, allowing the couple and their loved ones to revel in every moment of joy and festivity.'
    },
    {
      number: 5,
      eventName: 'Reception',
      imageUrl: two,
      content:
        "The wedding reception is the grand finale of an Indian wedding, where the newlyweds are officially introduced as a married couple to society. At Avighna Creations we transform the reception into a splendid celebration that mirrors the couple's unique style and charm. We conceptualize exquisite decor themes and curate a delightful menu featuring culinary delights.Our dedicated team oversees every aspect of the reception, from seating arrangements to entertainment choices, ensuring guests are treated to an unforgettable evening of joy and festivity."
    },
    {
      number: 6,
      eventName: 'Destination Weddings',
      imageUrl: threethree,
      content:
"Your wedding day is an opportunity to embark on a magical journey with the one you love. At Avighna Creations, we specialise in creating unforgettable destination weddings in enchanting locations. We'll work closely with you to bring your dream wedding to life in a stunning and unforgettable setting. With our expertise in destination wedding planning, you can relax and enjoy every moment of your special day while we take care of all the details, ensuring a seamless and stress-free experience from start to finish."
    },
    {
      number: 7,
      eventName: 'Photos and Videos',
      imageUrl: photoshoot,
      content: "Your special moments deserve to be captured beautifully and preserved for a lifetime. At Avighna Creations, we understand the importance of photography and videography in preserving the memories of your event. Our team of talented photographers and videographers will artfully document every moment, from the heartfelt exchanges of vows to the joyous celebrations with friends and family. With our keen eye for detail and commitment to excellence, we'll ensure that your photos and videos not only capture the essence of your event but also evoke emotions and memories for years to come."
    },
    {
      number: 8,
      eventName: 'Makeup and Hairstyling',
      imageUrl: bride,
      content: "On your special day, you deserve to look and feel your absolute best. At Avighna Creations, our team of professional makeup artists and hairstylists specialize in creating stunning looks that enhance your natural beauty and reflect your unique style. Whether you prefer a classic and timeless look or something more modern and glamorous, we'll work closely with you to create a personalized look that complements your features and enhances your confidence. With our expertise in makeup and hairstyling, you can relax and enjoy the pampering experience, knowing that you're in capable hands"
    }
      ];


  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      {events.map((event) => (
        <EventComponent
          key={event.number}
          number={event.number}
          eventName={event.eventName}
          imageUrl={event.imageUrl}
          content={event.content}
        />
      ))}
    </div>
  );
};

export default OurServices;