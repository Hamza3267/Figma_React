import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Video = () => {
  return (
    <div>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
        width='750px'
        height='450px'
      
      />
    </div>
  );
};

export default Video;
