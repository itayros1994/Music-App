import React from 'react'
import { useSelector } from "react-redux";


export function VideoSummary() {
  const { currVideo } = useSelector((state) => state.youtubeModule);
  console.log(currVideo);

    return (
        <div className="video-summary">
            {currVideo.snippet.title}
        </div>
    )
}
