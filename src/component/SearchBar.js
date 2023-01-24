// import React, { useState } from "react";
// import db from "./firebase";
// import "./sidebar.css";
// import { Chatbar } from "./Chatbar";


// export function SearchBar(props) {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     const roomsRef = db.collection("rooms");
//     const querySnapshot = await roomsRef
//       .where("name", ">=", searchText)
//       .where("name", "<=", searchText + "\uf8ff")
//       .get();
//     const searchResults = querySnapshot.docs.map((doc) => doc.data());
//     setSearchResults(searchResults);
//   };

//   const handleKey = (e) => {
//     if (e.code === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="sidebar-searchr">
//       <div className="sidebar-search-Container">
//         <input
//           type="text"
//           placeholder="Search for chat"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           onKeyDown={handleKey}
//         />
//       </div>
//       <div className="sidebar-chats">
//         {searchResults.map((result) => (
//           <div
//             key={result.id}
//             className={`room-name ${
//               result.id === props.selectedRoomId ? "highlight" : ""
//             }`}
//             onClick={() => props.onRoomSelection(result)}
//           >
//             {result.name}
//           </div>
//         ))}
//       </div>
//       {props.selectedRoom && (
//         <Chatbar room={props.selectedRoom} />
//       )}
//     </div>
//   );
// }
