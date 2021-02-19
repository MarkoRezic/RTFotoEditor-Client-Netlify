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
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    useEffect(() => {
        window.onpopstate = function (event) {
            Axios.post(url + '/loginStatus').then((response => {
                console.log(response);
                let userMatch = response.data;
                window.scrollTo(0, 0);
                setCurrentUser(userMatch);
            }))
        }
        Axios.post(url + '/loginStatus').then((response => {
            console.log(response);
            let userMatch = response.data;
            window.scrollTo(0, 0);
            setCurrentUser(userMatch);
        }))
        // eslint-disable-next-line
    }, []);



    return (
        <AuthorityContext.Provider value={[userList, setUserList, currentUser, setCurrentUser]}>
            {props.children}
        </AuthorityContext.Provider>
    );
}