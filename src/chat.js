import React from "react";
import "./chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function chat({ messages }) {
  var today = new Date(),
    curTime = today.getHours() + ":" + today.getMinutes();
  return (
    <div className="header">
      <div className="icon">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="icon_info">
          <h3>Yati</h3>
        </div>
        <div className="icon_header">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chats">
      {messages.map((message)=>(
        <p className="chat_message">
          <span className="chat_name"></span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
      )
      )}
        
        <p className="chat_message chat_reciever">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">sonny</span> this is chat_message
          <span className="time">{curTime}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <AttachFileIcon />
        <form action="">
          <input type="text" placeholder="Type a message" />
        </form>
        <KeyboardVoiceIcon />
      </div>
    </div>
  );
}

export default chat;
