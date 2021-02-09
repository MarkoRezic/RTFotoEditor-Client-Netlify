import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';
import PROFILEICON from '../images/profile-icon.png';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import Dropdown from 'react-bootstrap';

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

    function removeUser(userID) {
        Axios.delete(url + '/remove-user', { data: { userID: userID } }).then((response) => {
            console.log(response);
            Axios.get(url + '/users').then((response) => {
                setUserList([...response.data]);
            });
        });
    }

    function changeRole(newRole, userID) {
        Axios.put(url + '/update-role', { data: { userID: userID, newRole: newRole } }).then((response) => {
            console.log(response);
            Axios.get(url + '/users').then((response) => {
                setUserList([...response.data]);
            });
        })
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
                                    <br />Role: [{user.authority}] <BootstrapIcon type={user.verified === 'verified' ? 18 : 19} />{user.verified === 'verified' ? 'verified' : 'not verified'}
                                    <br />ID: {user.id}
                                </p>
                            </div>
                            {authority === 'super-admin'
                                ? <div className="profile-buttons">
                                    {(user.authority === 'super-admin') ? null : <button onClick={() => { removeUser(user.id) }}>Remove</button>}
                                    {(user.authority === 'super-admin') ? null
                                        : <DropdownButton id={"dropdown-basic-button" + user.id} title="Change Role">
                                            <Dropdown.Item disabled={user.authority === 'user'} onSelect={() => { changeRole('user', user.id) }}>User</Dropdown.Item>
                                            <Dropdown.Item disabled={user.authority === 'admin'} onSelect={() => { changeRole('admin', user.id) }} >Admin</Dropdown.Item>
                                        </DropdownButton>
                                    }
                                    {(user.authority === 'super-admin') ? null : <button>Block Posts</button>}
                                    <button>Send Message</button>
                                </div>
                                : <div className="profile-buttons">
                                    {(user.authority === 'admin' || user.authority === 'super-admin') ? null : <button onClick={() => { removeUser(user.id) }}>Remove</button>}
                                    {(user.authority === 'admin' || user.authority === 'super-admin') ? null : <button>Block Posts</button>}
                                    <button>Send Message</button>
                                </div>
                            }

                        </div>
                    )
                })
            }
        </div>
    )

}

export default Users;