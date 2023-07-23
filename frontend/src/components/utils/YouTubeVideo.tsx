import React, { useEffect, useRef } from "react";

interface YouTubeVideoProps {
    videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        let player: YT.Player | null = null;

        const onPlayerReady = () => {
            player?.cueVideoById(videoId);
        };

        const initializeYouTubePlayer = () => {
            player = new window.YT.Player(iframeRef.current!, {
                playerVars: {
                    autoplay: 0,
                },
                events: {
                    onReady: onPlayerReady,
                },
            });
        };

        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            tag.onload = initializeYouTubePlayer;
        } else {
            initializeYouTubePlayer();
        }
    }, [videoId]);

    return (
        <div>
            <iframe
                ref={iframeRef}
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




