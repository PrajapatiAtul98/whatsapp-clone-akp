import React from 'react';
import './App.css';
import { Sidebar } from './Sidebar';
import { Chatbar } from './Chatbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react';
import { actionTypes } from './reudcer';


function App() {
  const [{ user },dispatch] = useStateValue();
    console.log("user",user)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: actionTypes.SET_USER,
        user: user
      })
    })
  }, [])
  return (
    <BrowserRouter>

      {!user ? <Login /> : (
        <div id="main" className='app'>
          <div className='app-body'>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={< Chatbar />} />
              <Route path="/room/:roomId" element={< Chatbar />} />
            </Routes>
          </div>
        </div>
      )}

    </BrowserRouter>

  );
}

export default App;
