import React, { useState } from "react";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.sidebar.isMenuOpen)
  if(!isMenuOpen) return null
    return (
      <div className="w-48 shadow-lg">
        <ul className="p-5 ">
          <Link to="/">
            <li className="py-2">Home</li>
          </Link>
          <li className="py-2">Shorts</li>
          <li className="py-2">Subscriptions</li>
          <li className="py-2">Library</li>
          <li className="py-2">History</li>
          <li className="py-2">Your videos</li>
          <li className="py-2">Watch Later</li>
          <li className="py-2">React Project</li>
          <li className="py-2">Liked videos</li>
        </ul>
        <ul className=" ">
          <li className=" text-xl px-2 pb-3">Explore</li>
          <li className="py-2 px-5">Subscriptions</li>
          <li className="py-2 px-5">Shorts</li>
          <li className="py-2 px-5">Library</li>
          <li className="py-2 px-5">History</li>
          <li className="py-2 px-5">Your videos</li>
          <li className="py-2 px-5">Watch Later</li>
          <li className="py-2 px-5">React Projects</li>
          <li className="py-2 px-5">Liked videos</li>
        </ul>
      </div>
    );
};

export default Sidebar;
