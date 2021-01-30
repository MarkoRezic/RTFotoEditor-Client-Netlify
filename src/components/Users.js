import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';

const Users = () =>{
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';

    useEffect(() => {
        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {
                userList.map(user => {
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