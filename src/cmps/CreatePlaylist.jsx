import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { setNewPlaylist } from "../store/action/youtube.action";
import { useDispatch, useSelector } from "react-redux";

export function CreatePlaylist() {
  const { playLists } = useSelector((state) => state.youtubeModule);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [playListName, setPlayListName] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const [playlist, setPlayList] = useState({});

  const openModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const handleChange = (ev, str) => {
    switch (str) {
      case "name":
        setPlayListName(ev.target.value);
        break;
      case "createdBy":
        setCreatedBy(ev.target.value);
        break;
      default:
        console.log("there is a problem ):");
        break;
    }
  };

  const createNewPlaylist = () => {
   const newUserPlaylist = {
      playListName,
      createdBy,
    };

    dispatch(setNewPlaylist(newUserPlaylist));
    console.log(playLists);

  };

  return (
    <div>
      <form>
        <Button
          className="creat-playlist-btn"
          onClick={() => openModal()}
          variant="contained"
        >
          Create Playlist
        </Button>
        <div className={isOpen ? "block modal" : "none modal"}>
          <div className="input-container">
            <label>
              Playlist Name :
              <input
                type="text"
                name="name"
                value={playListName}
                onChange={(ev) => handleChange(ev, "name")}
              ></input>
            </label>
            <label>
              Created By :
              <input
                type="text"
                name="createdBy"
                value={createdBy}
                onChange={(ev) => handleChange(ev, "createdBy")}
              ></input>
            </label>
            <Button
              onClick={()=> createNewPlaylist()}
              variant="contained"
              color="success"
            >
              Create!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
