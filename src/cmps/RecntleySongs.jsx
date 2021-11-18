import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrVideo } from "../store/action/youtube.action";
import { Equlizer } from './Equlizer';

export function RecntleySongs() {
  const dispatch = useDispatch();
  const { recently, currVideo } = useSelector((state) => state.youtubeModule);

  const setToCurrSong = (song) => {
    dispatch(setCurrVideo(song));
  };

  const setEqulaizer=(song)=> {
    if(currVideo.id.videoId === song.id.videoId) return <Equlizer/>
  } 
  
  if (!recently.length) return "...";

  return (
    <div className="recently-contianer">
      {recently.map((song) => (
        <div onClick={() => setToCurrSong(song)} className="resent-song">
          <img
            className="img-artist img-recently"
            src={song.snippet.thumbnails.default.url}
          ></img>
          <span>{song.snippet.title}</span>
          <span className="recently-equlaizer">{setEqulaizer(song)}</span>
        </div>
      ))}
    </div>
  );
}
