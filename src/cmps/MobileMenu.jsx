import React from "react";
import { useState } from "react";

export function MobileMenu() {
    
  const [isOpen, setisOpen] = useState(false);
  const toggleMobileMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <div onClick={toggleMobileMenu} className="hamburger">
      ☰
      <div className={isOpen ? "side-bar block" : "side-bar none"}>
        <ul>
          <li>favorites</li>
          <li>Home</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
}
