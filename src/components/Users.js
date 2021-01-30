import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';

const Users = () => {
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';

    useEffect(() => {
        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {
                userList.map(user => {
                    return (
                        <div className="user-card btrans" key={user.id}>
                            <p>Username: {user.displayname}
                                <br />Email: {user.email}
                                <br />ID: {user.id}
                            </p>
                            <button>Remove</button>
                            <button>Update</button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Users;