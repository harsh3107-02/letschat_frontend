// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Chat from "./chat";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Axios from "./axios";
// import { set } from "mongoose";
// import { response } from "express";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    Axios.get("/mesdssage/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    var pusher = new Pusher("c71240a600d6fba24d2b", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", function (newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      };
    });
  }, [messages]);
  console.log(messages);
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
