import React from "react";
import ReactWebMediaPlayer from "react-web-media-player";

export const VideoProfileForModal = (props) => {
    const { video } = props;
    return (
        <ReactWebMediaPlayer
            title="My own video player"
            video={`http://localhost:5000/${video}`}
        />
    )
}