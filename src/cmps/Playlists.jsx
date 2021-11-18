import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export function Playlists() {
  const { playLists } = useSelector((state) => state.youtubeModule);
  const [isOpen, setisOpen] = useState(false);

  const toggleButton = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <Button
        onClick={() => toggleButton()}
        className="playlist-button"
        variant="contained"
      >
        Playlists
      </Button>
      <div className={isOpen ? "playlists-container block" : "playlists-container none"}>
          {playLists.map(playList => {
              return <div>{playList.playListName}</div>
          })}


      </div>
    </div>
  );
}
