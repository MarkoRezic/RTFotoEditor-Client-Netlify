import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';

export const AuthorityContext = createContext();

export const AuthorityProvider = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [{ loginStatus, authority }, setAuthority] = useState({ loginStatus: false, authority: 'guest' });
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        loggedIn: false,
        authenticated: false,
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
        setLoaded(false);
        window.onpopstate = function (event) {
            setLoaded(false);
            Axios.post(url + '/loginStatus').then((response => {
                console.log(response);
                let userMatch = response.data;
                window.scrollTo(0, 0);
                setAuthority({ loginStatus: userMatch.loggedIn, authority: userMatch.authority });
                setCurrentUser(userMatch);
                setLoaded(true);
            }))
        }
        Axios.post(url + '/loginStatus').then((response => {
            console.log(response);
            let userMatch = response.data;
            window.scrollTo(0, 0);
            setAuthority({ loginStatus: userMatch.loggedIn, authority: userMatch.authority });
            setCurrentUser(userMatch);
            setLoaded(true);
        }))
        // eslint-disable-next-line
    }, []);



    return (
        <AuthorityContext.Provider value={[loaded, setLoaded, { loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser]}>
            {props.children}
        </AuthorityContext.Provider>
    );
}