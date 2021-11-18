import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setCurrVideo,
  setRemoveFromFavorite,
  setToRecently,
} from "../store/action/youtube.action";

export function VideoPreview({ video, none }) {
  const { favorites, recently } = useSelector((state) => state.youtubeModule);
  const dispatch = useDispatch();

  const onSetCurrVideo = (video) => {
    dispatch(setCurrVideo(video));
    dispatch(setToRecently(video))
  };

  const removeFromFavorites = (videoId) => {
    console.log(videoId);
    dispatch(setRemoveFromFavorite(videoId));
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <Link to="/curr-video">
        <div className="video-container" onClick={() => onSetCurrVideo(video)}>
          <img
            className="video-results"
            src={video.snippet.thumbnails.high.url}
            // frameborder="0"
          ></img>
          <div className="video-title">
            {video.snippet.title.substring(0, 30)}
          </div>
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
