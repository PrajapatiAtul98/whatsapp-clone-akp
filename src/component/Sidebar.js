
import React from 'react'
import IconButton from '@mui/material/IconButton';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./sidebar.css"
import { SidebarChat } from './SidebarChat';
import { useState } from 'react';
import { useEffect } from 'react';
import db from './firebase';
import { useStateValue } from './StateProvider';
//import firebase from 'firebase/compat/app';
import { auth } from './firebase';




export function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();

  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot => {
      setRooms(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))

    })
  }, []);

  // console.log("photo", user.displayName)

  function SignOutFn() {
    auth.signOut().then(() => {
      alert("signOut Successfully")
    }).catch((error) => {

      alert("signOut Error", error)
    });
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }


  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <img src={user.photoURL} alt="userPhoto" onClick={SignOutFn} />
        <span className='user-profile-name'>{user.displayName}</span>
        <div className='sidebar-right-header'>

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
      {/* <div className='sidebar-search'>
        <div className='sidebar-search-Container'>
          <SearchIcon />
          <input type="text" placeholder='Search for chat' />
        </div>

      </div>
      <div className='sidebar-chats'>
        <SidebarChat addnewchat />
        {
          rooms.map(room => {
            return <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          })
        }


      </div> */}
      <div className='sidebar-search'>
        <div className='sidebar-search-Container'>
          <SearchIcon />
          <input type="text" placeholder='Search for chat' onChange={handleSearch} />
        </div>
      </div>

      <div className='sidebar-chats'>
        <SidebarChat addnewchat />
        {
          rooms.map(room => {

           console.log("room names:",room.data.name)

            let chatClass = 'sidebar-chats';
            if (room.data.name.toLowerCase() === searchTerm.toLowerCase()) {
              chatClass += ' highlighted-chat';
               console.log("chatClass:",chatClass)
             console.log("searchTerm:",searchTerm)
            }
            return <SidebarChat key={room.id} id={room.id} name={room.data.name} className={chatClass} />
          })
        }
      </div>

    </div>
  )
}




