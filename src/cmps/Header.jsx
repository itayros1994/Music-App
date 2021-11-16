import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header-container">
      <div className="app-name">YouTube</div>
      <div className="links-container">
        <Link className="links" to="/">
          <div>Home</div>
        </Link>
        <Link className="links" to="/favorites">
          <div>Favorites</div>
        </Link>
      </div>
    </div>
  );
}
