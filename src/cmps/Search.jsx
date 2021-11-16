import React, { useState } from "react";
import { youtubeService } from "../services/youtube-service";
import { useDispatch } from "react-redux";
import { setSetResults } from "../store/action/youtube.action";
import TextField from "@mui/material/TextField";

export function Search() {
  const [autoCompleteRes, setautoCompleteRes] = useState([]);
  const dispatch = useDispatch();

  let debounce = null;

  const setSongName = (ev) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      let songName = ev.target.value;
      youtubeService.getSongs(songName).then((searchResults) => {
        dispatch(setSetResults([]));
        dispatch(setSetResults(searchResults.items));
      });
    }, 1000);
  };

  // const setAutoComplete = (ev) => {
  //   let userSearch = ev.target.value;
  //   youtubeService.getAutoComplete(userSearch).then(res => {
  //     setautoCompleteRes(res);
  //   });
  //   console.log(autoCompleteRes);
  // };

  return (
    <div className="search">
      <TextField
      variant="standard"
        onChange={setSongName}
        label="Search Song..."
      ></TextField>
    </div>
  );
}
