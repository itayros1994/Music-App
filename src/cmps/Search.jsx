import React, { useEffect, useState } from "react";
import { youtubeService } from "../services/youtube-service";
import { useDispatch } from "react-redux";
import { setSetResults, setCurrVideo } from "../store/action/youtube.action";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "../data/search.json";
import currVideo from "../data/currVideo.json";

export function Search() {
  const dispatch = useDispatch();
  const [autoComplete, setAutoComplete] = useState([]);
  
  let debounce = null;
  let auto = null;

  const setSongName = (_, songName) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      console.log(songName);
      youtubeService.getSongs(songName).then((searchResults) => {
        dispatch(setSetResults(searchResults.items));
      });
    }, 1000);
  };

  useEffect(() => {
    dispatch(setSetResults(data));
    dispatch(setCurrVideo(currVideo));
  }, []);

  const getAutoComlpete = (_, word) => {
    console.log(word);
    youtubeService.getAutoComplete(word).then((res) => setAutoComplete(res));
    console.log(autoComplete);
  };

  return (
    <div className="search">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onInputChange={getAutoComlpete}
        onChange={setSongName}
        options={autoComplete || []}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField variant="outlined" {...params} label="Search..." />
        )}
      />
    </div>
  );
}
