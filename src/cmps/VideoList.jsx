import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setSetResults } from "../store/action/youtube.action";
import { VideoPreview } from "./VideoPreview";
import Loader from "react-loader-spinner";

export function VideoList() {
  const {searchResults} = useSelector((state) => state.youtubeModule);

if(!searchResults.length) return <div><Loader color="#00BFFF" type="Oval"/></div>
  return (
    <div className="video-list-container">
      {searchResults[0].map(video => {
         return <VideoPreview none="none" video={video}/>
      })} 
    </div>
  );
}
