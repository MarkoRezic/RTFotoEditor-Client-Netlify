import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';

export const AuthorityContext = createContext();

export const AuthorityProvider = (props) => {
    const [{ loginStatus, authority }, setAuthority] = useState({ loginStatus: false, authority: 'guest' });
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    Axios.defaults.withCredentials = true;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        Axios.get(proxyurl + 'https://rt-foto-editor.herokuapp.com/loginStatus').then((response => {
            if (response.data.loggedIn) {
                let userMatch = response.data;
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