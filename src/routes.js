import { MainApp } from "./pages/MainApp";
import { Favorties } from "./pages/Favorties";
import { CurrVideo } from "./cmps/CurrVideo";

export const routes = [
  {
        path: '/',
        component: MainApp
    }, 
    {
        path: '/curr-video',
        component: CurrVideo
    }, 
    {
        path: '/favorites',
        component: Favorties
        
    }, 
]