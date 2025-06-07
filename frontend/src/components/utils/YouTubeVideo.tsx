import React, { useEffect, useRef } from "react";

interface YouTubeVideoProps {
    videoId: string;
}

interface Window {
        YT: any;
    }

const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <div>
      <iframe
        title="YouTube video player"
        width="486"
        height="266"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;






