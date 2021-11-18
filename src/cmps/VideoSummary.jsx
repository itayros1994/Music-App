import React from 'react'
import { useSelector } from "react-redux";
import { Equlizer } from './Equlizer';
import Loader from 'react-loader-spinner';


export function VideoSummary() {
  const { currVideo } = useSelector((state) => state.youtubeModule);
  console.log(currVideo);

  if(!currVideo) return <Loader/>

    return (
        <div className="video-summary">
            <div className="bold">
            {currVideo.snippet.channelTitle}
            </div>
            <div>
            {currVideo.snippet.title}
            </div>
            <div>
            <Equlizer/>
            </div>
        </div>
    )
}
