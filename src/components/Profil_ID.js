import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { AuthorityContext } from './AuthorityContext';
import PROFILEICON from '../images/profile-icon.png';

const Profil_ID = (props) => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser, url] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;

    const [userProfile, setUserProfile] = useState();
    const [profileImage, setProfileImage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let mounted = false;
    const loadProfile = () => {
        if (currentUser.loggedIn) {
            Axios.get(url + '/users/' + props.match.params.id).then((response) => {
                if (response.data.length) {
                    var user = JSON.parse(JSON.stringify(response.data[0]));
                    Axios.get(url + '/profile_images/' + user.id).then((response) => {
                        if (mounted) {
                            if (response.data.length) setProfileImage(response.data[0]);
                            setUserProfile(user);
                            setIsLoading(false);
                        }
                    });
                }
                else {
                    props.history.push('/home');
                }
            });
        }
    };
    useEffect(() => {
        // eslint-disable-next-line
        mounted = true;
        if (props.match.params.id === currentUser.id) {
            props.history.push('/profil');
        }
        else loadProfile();
        return () => mounted = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    return (

        <div className="container">

            <div className="row">

                <div className="col-sm-12 blog-main">

                    <div className="blog-post Profil">
                        {isLoading ?
                            <div className="centeredFlex">
                                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            </div>
                            : userProfile ?
                                <div className="userProfile">
                                    <hr className="round" />
                                    <div className="IDProfile">
                                        <div className="profile-border IDProfileBorder">
                                            {profileImage ?
                                                <Image
                                                    cloudName={'rt-foto-editor'}
                                                    publicId={profileImage.public_id}
                                                    width="140"
                                                    crop="scale"
                                                    className="profile-icon"
                                                />
                                                : <img alt="" src={PROFILEICON} className="profile-icon" />
                                            }
                                        </div>
                                        <p className="IDProfileName">{userProfile.displayname}</p>
                                    </div>
                                    <hr className="round" />
                                    <p>Email: {userProfile.email}</p>
                                    <p>Account type: {userProfile.authority}</p>
                                    <p>User ID: {userProfile.id}</p>
                                    <hr className="round" />
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil_ID;