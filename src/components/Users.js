import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';
import PROFILEICON from '../images/profile-icon.png';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Image } from 'cloudinary-react';

const Users = () => {
    /* eslint-disable */
    const [userList, setUserList, currentUser, setCurrentUser, url] = useContext(AuthorityContext);
    /* eslint-enable */
    Axios.defaults.withCredentials = true;
    const [profileImages, setProfileImages] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let mounted = false;

    useEffect(() => {
        // eslint-disable-next-line
        mounted = true;
        Axios.get(url + '/users').then((response) => {
            if(mounted) setUserList([...response.data]);
            Axios.get(url + '/images/all/profile_images').then((response) => {
                if(mounted) setProfileImages([...response.data]);
                if(mounted) setIsLoading(false);
            });
        });
        return () => mounted = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function removeUser(userID) {
        Axios.delete(url + '/remove-user', { data: { userID: userID } }).then((response) => {
            Axios.get(url + '/users').then((response) => {
                setUserList([...response.data]);
            });
        });
    }

    function changeRole(newRole, userID) {
        Axios.put(url + '/update-role', { data: { userID: userID, newRole: newRole } }).then((response) => {
            Axios.get(url + '/users').then((response) => {
                setUserList([...response.data]);
            });
        })
    }

    function findProfileImagePublicID(userID) {
        if (profileImages) {
            for (var i = 0; i < profileImages.length; i++) {
                if (profileImages[i].user_id === userID) return profileImages[i].public_id;
            }
        }
        return null;
    }

    return (
        <div>
            {isLoading ?
                <div className="centeredFlex">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                : userList.map(user => {
                    return (
                        <div className="user-card btrans" key={user.id}>
                            <div className="profile-border display-inline">
                                {profileImages && findProfileImagePublicID(user.id) ?
                                    <Image
                                        cloudName={'rt-foto-editor'}
                                        publicId={findProfileImagePublicID(user.id)}
                                        width="90"
                                        crop="scale"
                                        className="profile-icon"
                                    />
                                    : <img alt="" src={PROFILEICON} className="profile-icon" />
                                }
                            </div>
                            <div className="profile-text display-inline">
                                <p>Username: {user.displayname}
                                    <br />Email: {user.email}
                                    <br />Role: [{user.authority}] <BootstrapIcon type={user.verified === 'verified' ? 18 : 19} />{user.verified === 'verified' ? 'verified' : 'not verified'}
                                    <br />ID: {user.id}
                                </p>
                            </div>
                            {currentUser.authority === 'super-admin'
                                ? <div className="profile-buttons">
                                    {(user.authority === 'super-admin') ? null : <button onClick={() => { removeUser(user.id) }}>Remove</button>}
                                    {(user.authority === 'super-admin') ? null
                                        : <DropdownButton id={"dropdown-basic-button" + user.id} className="change-role" title="Change Role">
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