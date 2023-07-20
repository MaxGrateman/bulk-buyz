import React from 'react';
import {FC} from "react";
import ReactPlayer from 'react-player';

interface YouTubeVideoFacadeProps {
    width: number,
    height: number,
    videoId: string,
    children?: string
}

const YouTubeVideoFacade: FC<YouTubeVideoFacadeProps> = ({ width, height, videoId }) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div className="under-header_video">
            <ReactPlayer
                url={youtubeUrl}
                width={width}
                height={height}
                controls={true}
                playing={false}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                config={{
                    youtube: {
                        playerVars: {
                            modestbranding: 1,
                            showinfo: 0,
                        },
                    },
                }}
            />
        </div>
    );
};

export default YouTubeVideoFacade;