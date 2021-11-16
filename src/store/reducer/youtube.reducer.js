const initialState = {
  searchResults: [],
  currVideo: {},
  favorites: [],
  isOpen: false,
};

export function youtubeReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: [action.searchResults],
      };

    case "SET_CURR_VIDEO":
      return {
        ...state,
        currVideo: action.currVideo,
      };

    case "SET_VIDEO_FAVORTIE":
      return {
        ...state,
        favorites: [...state.favorites, action.currVideo],
      };

    case "SET_IS_OPEN":
      return {
        ...state,
        isOpen: action.isOpen,
      };

    case "REMOVE_VIDEO_FAVORITE":
      return {
        ...state,
        favorites : state.favorites.filter(video => video.id.videoId !== action.videoId),
      };

    default:
      return state;
  }
}
