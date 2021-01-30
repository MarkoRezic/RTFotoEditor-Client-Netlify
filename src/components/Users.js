import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';

const Users = () =>{
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    let users = [];

    useEffect(() => {
        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
            users = userList;
            console.log(users);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {
                users.map(user => {
                    <div key={user.id}>
                        <p>Username: {user.displayname}</p>
                        <p>Email: {user.email}</p>
                        <p>ID: {user.id}</p>
                        <button>Remove</button>
                        <button>Update</button>
                    </div>
                })
            }
        </div>
    )

}

export default Users;