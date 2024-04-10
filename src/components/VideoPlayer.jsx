import React, { useRef, useEffect } from 'react';
import videoFile from './assets/video/vedioFile.mp4';
import fullscene from './assets/video/fullscene.mp4'
const VideoPlayer = () => {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.src = videoFile;
  //   }
   
  // }, []);

  useEffect(() => {
    const video2 = videoRef.current;
    if (video2) {
      video2.src = fullscene;
    }
   
  }, []);



  return (
    <div className="w-full max-w-lg mx-auto">
      <video
        ref={videoRef}
        className="w-full rounded-lg shadow-lg"
        controls
      ></video>

      {/* <video
        ref={videoRef}
        className="w-full rounded-lg shadow-lg"
        controls
      ></video> */}
      <br></br>
    </div>
  );
};

export default VideoPlayer;