import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { AuthorityContext } from './AuthorityContext';
import PROFILEICON from '../images/profile-icon.png';

const Post = (props) => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [post, setPost] = useState();
    const [profileImage, setProfileImage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const loadPost = () => {
        if (currentUser.loggedIn) {
            Axios.get(url + '/posts/' + props.match.params.id).then((response) => {
                console.log(response);
                var poster_id = response.data[0].poster_id;
                setPost(response.data[0]);
                Axios.get(url + '/profile_images/' + poster_id).then((response) => {
                    console.log(response);
                    if (response.data.length) setProfileImage(response.data[0]);
                    setIsLoading(false);
                });
            });
        }
    };
    useEffect(() => {
        console.log(currentUser.loggedIn);
        loadPost();
    }, [currentUser]);

    return (

        <div className="container">

            <div className="row">

                <div className="col-sm-12 blog-main">

                    <div className="blog-post PostLarge">
                        {isLoading ?
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            : (post && post.view === 'public') ?
                                <div className="postLargeContainer">
                                    <div className="postHeader">
                                        <p className="timestamp">{post.date.substr(8, 2) + '/' + post.date.substr(5, 2) + '/' + post.date.substr(0, 4)} {post.time}<br />[{post.view}]</p>
                                        <div className="postProfile">
                                            <div className="profile-border postProfileBorder">
                                                {profileImage ?
                                                    <Image
                                                        cloudName={'rt-foto-editor'}
                                                        publicId={profileImage.public_id}
                                                        width="60"
                                                        crop="scale"
                                                        className="profile-icon"
                                                    />
                                                    : <img alt="" src={PROFILEICON} className="profile-icon" />
                                                }
                                            </div>
                                            <p className="postProfileName">{post.displayname}</p>
                                        </div>
                                    </div>
                                    <div className="postPhotoContainer">
                                        <Image
                                            cloudName={'rt-foto-editor'}
                                            publicId={post.public_id}
                                            width="500"
                                            crop="scale"
                                            className="postImage"
                                        />
                                    </div>
                                    <div className="postDescription">
                                        <p>{post.description}</p>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;