import React from "react";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from "@mui/icons-material/Search";
import "./sidebar.css";
import { SidebarChat } from "./SidebarChat";
import { useState } from "react";
import { useEffect } from "react";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

export function Sidebar(Room) {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      console.log("snapshot", snapshot.docs);
      
      setRooms(
        snapshot.docs
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
          .sort((a, b) => {
            return b.data.lastMessageSent - a.data.lastMessageSent;
          })
      );
    });
  }, []);
  console.log("rooms", rooms);
  function SignOutFn() {
    auth
      .signOut()
      .then(() => {
        alert("Sign-Out Successfully");
      })
      .catch((error) => {
        alert("Sign-Out", error);
      });
  }
  
  // const handleSearch = async () => {
  //   const roomsRef = db.collection("rooms");
  //   const querySnapshot = await roomsRef
  //     .where("name", ">=", searchText.toLowerCase())
  //     // .get();
  //   const searchResults = querySnapshot.docs.map((doc) => doc.data());
  //   setSearchResults(searchResults);
  // };

  
  
  const filteredRooms = rooms.filter((room) =>
  room.data.name && room.data.name.toLowerCase().includes(searchText.toLowerCase())
);

 
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={user.photoURL} alt="userPhoto"  />
        <span className="user-profile-name">{user.displayName}</span>
        <div className="sidebar-right-header">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <LogoutIcon style={{color:"red"}} onClick={SignOutFn} />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-Container">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for chat"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
           
          />
        </div>
      </div>

      <div className="sidebar-chats">
        <SidebarChat addnewchat />
        {console.log("filteredRooms", filteredRooms)}
        {filteredRooms.map((room) => {
          return (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          );
        })}
      </div>
    </div>
  );
}
