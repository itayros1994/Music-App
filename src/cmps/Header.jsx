import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { Search } from ".//Search";
import { MobileMenu } from "./MobileMenu";
import HomeIcon from "@mui/icons-material/Home";
import { CreatePlaylist } from "./CreatePlaylist";
import SideBar from "./SideBar";
import { Playlists } from "./Playlists";

export function Header() {
  const { favorites, currVideo } = useSelector((state) => state.youtubeModule);

  return (
    <div className="header-container">
      <div className="header-left-side">
        <Link className="links" to="/">
          <div className="margin-left color-white font-size-medium home-iqon"><HomeIcon/></div>
        </Link>
        <MobileMenu/>
          <div>
          <Search className="search-container" />
          </div>
          <div className="margin-left">
        </div>
      </div>
      <div className="links-container">
        <CreatePlaylist/>
      <SideBar/>
      <Playlists/>
        <Badge badgeContent={favorites.length} color="error">
          <Link className="icons" to="/favorites">
            <FavoriteIcon />
          </Link>
        </Badge>
      </div> 
    </div>
  );
}
