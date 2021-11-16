import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Search } from '../cmps/Search'
import { VideoList } from '../cmps/VideoList'
import { setToFavorite } from '../store/action/youtube.action'


export function MainApp() {
    const dispatch = useDispatch()
    // useEffect(() => {
    //  let favoriteFromLS = localStorage.getItem('favorites')
    //  console.log(favoriteFromLS);
    //  dispatch(setToFavorite(JSON.parse(favoriteFromLS)))
    // }, [])


    return (
        <div>
        <Search/>
        <VideoList/>
        </div>
    )
}
