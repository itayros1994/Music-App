import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setCurrVideo,
  setRemoveFromFavorite,
} from "../store/action/youtube.action";

export function VideoPreview({ video, none }) {
  const {favorites} = useSelector((state) => state.youtubeModule);
  const dispatch = useDispatch();
  
  const onSetCurrVideo = (video) => {
    dispatch(setCurrVideo(video));
    localStorage.setItem('favorites',JSON.stringify(favorites));
  };

  const removeFromFavorites = (videoId) => {
    console.log(videoId);
    dispatch(setRemoveFromFavorite(videoId));
    localStorage.setItem('favorites',JSON.stringify(favorites));
  };

  return (
    <div>
      <Link to="/curr-video">
        <div className="video-container" onClick={() => onSetCurrVideo(video)}>
          <iframe
            className="video-player"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameborder="0"
          ></iframe>
          <div>{video.snippet.title.substring(0, 30)}</div>
        </div>
      </Link>
      <div className={none}>
        <Button
          onClick={() => removeFromFavorites(video.id.videoId)}
          variant="contained"
          color="warning"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
