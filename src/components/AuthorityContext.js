import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';

export const AuthorityContext = createContext();

export const AuthorityProvider = (props) => {
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        loggedIn: false,
        loaded: false,
        username: null,
        displayname: null,
        email: null,
        id: null,
        authority: 'guest',
        verified: 'guest'
    });
    Axios.defaults.withCredentials = true;
    const url = 'https://rt-foto-editor.herokuapp.com';
    //const url = 'http://localhost:3001';
    //const url = 'https://studenti.sum.ba/RTFotoEditor';

    useEffect(() => {
        window.onpopstate = function (event) {
            Axios.post(url + '/loginStatus').then((response => {
                setCurrentUser(response.data);
            }))
        }
        Axios.post(url + '/loginStatus').then((response => {
            setCurrentUser(response.data);
        }))
        // eslint-disable-next-line
    }, []);



    return (
        <AuthorityContext.Provider value={[userList, setUserList, currentUser, setCurrentUser, url]}>
            {props.children}
        </AuthorityContext.Provider>
    );
}