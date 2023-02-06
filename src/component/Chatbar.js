import React from "react";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MicNoneIcon from "@mui/icons-material/MicNone";
import "./chatbar.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import db from "./firebase";
import { useState } from "react";
import firebase from "firebase/compat/app";
import { useStateValue } from "./StateProvider";

export function Chatbar() {
  const { roomId } = useParams(); //there will be a no. of params but i want only roomId so deStructure it
  // console.log(roomId);
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          //console.log(snapshot.data())
          setRoomName(snapshot.data().name);
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("message")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessage(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please Enter The message!");
    } else {
      //alert("message found")
      db.collection("rooms").doc(roomId).collection("message").add({
        name: user.displayName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    }
  };

  return (
    <div className="chatbar">
      <div className="chatbar-header">
        <Avatar src={`https://avatars.dicebear.com/api/male/huaman/123/.svg`} />
        <div className="chat-header-info">
          <h3>{roomName}</h3>
          {/* Last seen.. */}
          <p>
            {new Date(
              message[message.length - 1]?.timestamp?.seconds * 1000
            ).toLocaleTimeString()}{" "}
          </p>
        </div>
        <div className="chat-header-right-icons">
          <IconButton>
            <AddIcCallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        {message.map((message,i) => (
          <p key={`chat-${i}`}
            className={`chat-mssg ${
              user.displayName === message.name && "chat-rcver"
            }`}
          >
            <span className="chat-name">{message.name}</span>
            {message.message}
            <span className="chat-time">
              {new Date(message.timestamp?.seconds * 1000).toLocaleTimeString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat-footer">
        <EmojiEmotionsIcon />
        <AttachFileIcon />

        <form onSubmit={sendMessage}>
          {/* get the value on onChange */}
          <input
            type="text"
            value={input}
            placeholder="Type your message"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}
