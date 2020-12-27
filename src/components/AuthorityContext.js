import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';

export const AuthorityContext = createContext();

export const AuthorityProvider = (props) => {
    const [{ loginStatus, authority }, setAuthority] = useState({ loginStatus: false, authority: 'guest' });
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    Axios.defaults.withCredentials = true;
    //let url = 'https://rt-foto-editor.herokuapp.com';
    let url = 'http://localhost:3001';
    let userMatch = null;

    useEffect(() => {
        Axios.get(url+'/loginStatus', {sessionID: currentUser ? currentUser.sessionID : null}).then((response => {
            console.log(response);
            if (response.data.loggedIn) {
                userMatch = response.data;
                window.scrollTo(0, 0);
                setAuthority({ loginStatus: true, authority: userMatch.authority });
                setCurrentUser(userMatch);
            }
            else {
                setAuthority({ loginStatus: false, authority: 'guest' });
            }
        }))
        // eslint-disable-next-line
    }, []);



    return (
        <AuthorityContext.Provider value={[{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser]}>
            {props.children}
        </AuthorityContext.Provider>
    );
}