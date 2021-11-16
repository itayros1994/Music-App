import axios from "axios";
import data from '../data.json'

// const API_KEY = "AIzaSyB1i3HVIgmf3K2Xw3C07X3emaFoMgkINqY";
const API_KEY = "AIzaSyBWHITqR7SM17K_RNf3gmGTSed8pqZNdSo";


export const youtubeService = {
  getSongs,
  // getAutoComplete
};

function getSongs(searchBy) {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchBy}&key=${API_KEY}&maxResults=21`
    )
    .then((res) => res.data);
  // return Promise.resolve(data)
    }
  
  // function getAutoComplete(word) {
  //   return axios
  //   .get(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${word}`)
  //   .then((res) => res.data)
    
  // }