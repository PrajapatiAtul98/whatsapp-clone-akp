import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import db from './firebase';
import { Link } from 'react-router-dom';


export function SidebarChat({ id, name, addnewchat }) {

    const [number, setNumber] = useState("");
    useEffect(() => {
        //console.log(Math.floor(Math.random() * 5000));
        setNumber(Math.floor(Math.random() * 5000))
    }, [])

    const addNewRoom = () => {
        const room = prompt("Enter the Room Name");
        // alert(room);
        if (room) {
            db.collection("rooms").add({
                name: room
            })
        }
    }


    return (

        !addnewchat ? (

            <Link to={`/room/${id}`} style={{ textDecoration: "none" }} >
                <div className='sidebar-chat'>
                    <Avatar src={`https://avatars.dicebear.com/api/male/huaman/${number}/.svg`} />
                    <div className='sidebar-chat-info'>
                        <h2>{name} </h2>
                        <p>Last Message...</p>
                    </div>
                </div>
            </Link>
        ) : (
            <div className='sidebar-chat' onClick={addNewRoom}>
                <h2>Add New Room</h2>
            </div>
        )


    )
}


