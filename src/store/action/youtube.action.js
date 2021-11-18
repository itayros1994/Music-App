export function setSetResults(searchResults) {
    return (dispatch) => {
        const action = {
          type: 'SET_SEARCH_RESULTS',
          searchResults
        }
        dispatch(action)
    }
  }
export function setCurrVideo(currVideo) {
    return (dispatch) => {
        const action = {
          type: 'SET_CURR_VIDEO',
          currVideo
        }
        dispatch(action)
    }
  }

export function setToFavorite(currVideo) {
    return (dispatch) => {
        const action = {
          type: 'SET_VIDEO_FAVORTIE',
          currVideo
        }
        dispatch(action)
    }
  }
export function setToRecently(currVideo) {
    return (dispatch) => {
        const action = {
          type: 'SET_VIDEO_RECENTLY',
          currVideo
        }
        dispatch(action)
    }
  }

export function setToFavoriteFromLS(videos) {
    return (dispatch) => {
        const action = {
          type: 'SET_VIDEO_LS',
          videos
        }
        dispatch(action)
    }
  }
  
export function setRemoveFromFavorite(videoId) {
    return (dispatch) => {
        const action = {
          type: 'REMOVE_VIDEO_FAVORITE',
          videoId
        }
        dispatch(action)
    }
  }

export function setIsOpen(isOpen) {
    return (dispatch) => {
        const action = {
          type: 'SET_IS_OPEN',
          isOpen
        }
        dispatch(action)
    }
  }

  export function setNewPlaylist(playList) {
    return (dispatch) => {
        const action = {
          type: 'SET_NEW_PLAYLIST',
          playList
        }
        dispatch(action)
    }
  }