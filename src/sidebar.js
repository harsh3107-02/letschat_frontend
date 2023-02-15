import React from "react";
import "./siderbar.css";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Superchat from "./sidebarchat";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarheader">
        <Avatar src="https://instagram.fdel1-6.fna.fbcdn.net/v/t51.2885-19/278054997_159512383187539_1198138609500934205_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel1-6.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-Rcde5qJl7EAX9ftwm0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8W6JpkzpM7-iVejOv6ePP4LSsyNAz3oFP1wkze60Ncdg&oe=633FA527&_nc_sid=8fd12b" />
        <div className="Sidebar_rightheader">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="siderbar_searchConatiner">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </div>
      <div className="sidebar_chats">
        <Superchat />
      </div>
    </div>
  );
}

export default sidebar;
