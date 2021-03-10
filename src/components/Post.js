import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { AuthorityContext } from './AuthorityContext';
import PROFILEICON from '../images/profile-icon.png';
import BootstrapIcon from '../svg icons/BootstrapIcon';

const Post = (props) => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser, url] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;

    const [post, setPost] = useState();
    const [profileImage, setProfileImage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [likeStatus, setLikeStatus] = useState('');
    const [chatSelected, setChatSelected] = useState(false);
    const [numLikes, setNumLikes] = useState(0);
    const [numDislikes, setNumDislikes] = useState(0);
    const [numComments, setNumComments] = useState(0);
    let mounted = false;
    const loadPost = () => {
        if (currentUser.loggedIn) {
            Axios.get(url + '/posts/' + props.match.params.id).then((response) => {
                var post = JSON.parse(JSON.stringify(response.data[0]));
                Axios.get(url + '/profile_images/' + post.poster_id).then((response) => {
                    if (mounted) {
                        if (response.data.length) setProfileImage(response.data[0]);
                        setPost(post);
                        setIsLoading(false);
                    }


                });
            });
            Axios.get(url + '/post/likes/' + props.match.params.id).then((response) => {
                if (mounted) {
                    setNumLikes(response.data.length);
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].user_id === currentUser.id) {
                            setLikeStatus('like');
                            break;
                        }
                    }

                }
            });
            Axios.get(url + '/post/dislikes/' + props.match.params.id).then((response) => {
                if (mounted) {
                    setNumDislikes(response.data.length);
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].user_id === currentUser.id) {
                            setLikeStatus('dislike');
                            break;
                        }
                    }
                }
            });
        }
    };
    useEffect(() => {
        // eslint-disable-next-line
        mounted = true;
        loadPost();
        return () => mounted = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    function updateLikes(likeStatus, newStatus) {
        if (currentUser.loggedIn) {
            if (newStatus === 'like') {
                setNumLikes((prevState) => (likeStatus === 'like' ? prevState : prevState + 1));
                setNumDislikes((prevState) => (likeStatus === 'dislike' ? prevState - 1 : prevState));
            }
            else if (newStatus === 'dislike') {
                setNumLikes((prevState) => (likeStatus === 'like' ? prevState - 1 : prevState));
                setNumDislikes((prevState) => (likeStatus === 'dislike' ? prevState : prevState + 1));
            }
            else {
                setNumLikes((prevState) => (likeStatus === 'like' ? prevState - 1 : prevState));
                setNumDislikes((prevState) => (likeStatus === 'dislike' ? prevState - 1 : prevState));
            }
            Axios.post(url + '/post/like/' + post.id,
                {
                    userID: currentUser.id,
                    type: newStatus
                }).then((response) => {
                    console.log(response.data);
                    Axios.get(url + '/post/likes/' + post.id).then((response) => {
                        if (mounted) {
                            setNumLikes(response.data.length);
                        }
                    });
                })
        }
    }

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
                                        <div className="postProfile" onClick={() => { props.history.push('/profil/' + post.poster_id); }}>
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
                                    <div className="postFooter">
                                        <p className="likes">
                                            <span className="display-content" onClick={() => { updateLikes(likeStatus, likeStatus === 'like' ? '' : 'like'); setLikeStatus(likeStatus === 'like' ? '' : 'like'); }}>
                                                <BootstrapIcon type={likeStatus === 'like' ? 78 : 76} />
                                            </span>
                                            <b className="likeNumber">
                                                {numLikes}
                                            </b>&emsp;&ensp;
                                        <b className="dislikeNumber">
                                                {numDislikes}
                                            </b>
                                            <span className="display-content" onClick={() => { updateLikes(likeStatus, likeStatus === 'dislike' ? '' : 'dislike'); setLikeStatus(likeStatus === 'dislike' ? '' : 'dislike'); }}>
                                                <BootstrapIcon type={likeStatus === 'dislike' ? 79 : 77} />
                                            </span>
                                        &emsp;{numComments}
                                            <span className="display-content" onClick={() => { setChatSelected(!chatSelected) }}>
                                                <BootstrapIcon type={chatSelected ? 81 : 80} />
                                            </span>
                                        </p>
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