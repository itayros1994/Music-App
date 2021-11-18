import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoList } from "./VideoList";
import { setToFavorite, setIsOpen } from "../store/action/youtube.action";
import { Button } from "@mui/material";
import { VideoSummary } from "./VideoSummary";
import { Search } from "./Search";
import Loader from "react-loader-spinner";
import { RecntleySongs } from "./RecntleySongs";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export function CurrVideo() {
  const { currVideo, favorites, isOpen } = useSelector(
    (state) => state.youtubeModule
  );
  const dispatch = useDispatch();

  const onSetToFavorites = (currVideo) => {
    if (
      favorites.findIndex(
        (favorite) => favorite.id.videoId === currVideo.id.videoId
      ) !== -1
    )
      return;
    dispatch(setToFavorite(currVideo));
    dispatch(setIsOpen(true));
    setTimeout(() => {
      dispatch(setIsOpen(false));
    }, 2000);
  };

  if (!currVideo.id)
    return (
      <div>
        <Loader color="#00BFFF" type="Oval" />
      </div>
    );

  return (
    <div>
      <div className="curr-video-container">
        <div className="curr-video">
          <iframe
            className="curr-video-player"
            src={`https://www.youtube.com/embed/${currVideo.id.videoId}`}
            frameborder="0"
            ></iframe>
          <div className="curr-song-details">
            <div className="video-list-container">
              <div className="add-favorite">
                <ThumbUpIcon
                className="like-iqon"
                  variant="contained"
                  color="primary"
                  onClick={() => onSetToFavorites(currVideo)}
                  >
                </ThumbUpIcon>
              </div>
            </div>
            <div className="video-header">
              <div className="right-container">
                <VideoSummary />
                <img 
                  className="img-artist image"
                  src={currVideo.snippet.thumbnails.default.url}
                  ></img>
              </div>
            </div>
          </div>
          <VideoList />
        </div>
      </div>
    </div>
  );
}
