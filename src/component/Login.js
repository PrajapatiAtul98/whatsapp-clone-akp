import React from 'react'
import { auth, authProvider } from './firebase'
import "./login.css"
import { actionTypes } from './reudcer'
import { useStateValue } from './StateProvider'


function Login() {
    const [{user},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(authProvider).then(result => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => alert(error.message))
    }
    return (
        <div className='login-container'>
            <div className='login'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png' alt='wtsasp-logo' />
                <h2>😎 Welcome to AP's whatsapp 😎</h2>
                <button onClick={signIn}>👉🏻 Login with Google  </button>
            </div>

        </div>
    )
}

export default Login;
