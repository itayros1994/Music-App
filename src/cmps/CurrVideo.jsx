import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoList } from "./VideoList";
import { setToFavorite, setIsOpen } from "../store/action/youtube.action";
import { Button } from "@mui/material";
import { VideoSummary } from "./VideoSummary";
import { Search } from "./Search";
import Loader from "react-loader-spinner";

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
      <Search />
      <div className="curr-video-container">
        <div className="curr-video">
          <iframe
            className="curr-video-player"
            src={`https://www.youtube.com/embed/${currVideo.id.videoId}`}
            frameborder="0"
          ></iframe>
          <div className="video-header">
          <VideoSummary />
          </div>
          <div className="video-list-container">
            <div className="add-favorite">
              <Button
                variant="contained"
                color="success"
                size="large"
                onClick={() => onSetToFavorites(currVideo)}
              >
                Add To Favorite
              </Button>
            </div>
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
}
