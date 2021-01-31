import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';
import PROFILEICON from '../images/profile-icon.png';
import BootstrapIcon from '../svg icons/BootstrapIcon';

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

    function removeUser(userID){
        Axios.delete(url + '/remove-user', { data: {userID: userID}}).then((response) =>{
            console.log(response);
            Axios.get(url + '/users').then((response) => {
                setUserList([...response.data]);
            });
        });
    }

    return (
        <div>
            {
                userList.map(user => {
                    return (
                        <div className="user-card btrans" key={user.id}>
                            <div className="profile-border display-inline">
                                <img alt="" src={PROFILEICON} className="profile-icon" />
                            </div>
                            <div className="profile-text display-inline">
                                <p>Username: {user.displayname}
                                    <br />Email: {user.email}
                                    <br />Role: {user.authority}, {user.verified === 'verified' ? 'verified' : 'not verified'} <BootstrapIcon type={user.verified === 'verified' ? 18 : 19} />
                                    <br />ID: {user.id}
                                </p>
                            </div>
                            <div className="profile-buttons">
                                <button onClick={()=>{removeUser(user.id)}}>Remove</button>
                                <button>Update</button>
                                <button>Send Message</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Users;