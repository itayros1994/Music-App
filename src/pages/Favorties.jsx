import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { VideoPreview } from "../cmps/VideoPreview";

export function Favorties() {
  const { favorites } = useSelector((state) => state.youtubeModule);

  return (
    <div>
      <h1>Favorites Page!</h1>
      <div className="video-list-container">
        {favorites.map((video) => {
          return <VideoPreview none={"block"} video={video} />;
        })}
      </div>
    </div>
  );
}
