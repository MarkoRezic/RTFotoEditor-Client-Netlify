import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { AuthorityContext } from './AuthorityContext';
import PROFILEICON from '../images/profile-icon.png';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import { Form, InputGroup } from 'react-bootstrap';
import { checkText } from 'smile2emoji';

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
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const hour = 1*60*60*1000;
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
            Axios.get(url + '/post/comments/' + props.match.params.id).then((response) => {
                if (mounted) {
                    setNumComments(response.data.length);
                    setComments([...response.data].sort(function (a, b) {
                        return a.id - b.id;
                    }));
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
                    Axios.get(url + '/post/likes/' + post.id).then((response) => {
                        if (mounted) {
                            setNumLikes(response.data.length);
                        }
                    });
                })
        }
    }

    function removeComment(commentID) {
        Axios.delete(url + '/remove-comment', { data: { commentID: commentID } }).then((response) => {
            Axios.get(url + '/post/comments/' + props.match.params.id).then((response) => {
                setNumComments(response.data.length);
                setComments([...response.data].sort(function (a, b) {
                    return a.id - b.id;
                }));
            });
        });
    }

    function postComment() {
        if (text !== '') {
            Axios.post(url + '/post-comment/' + props.match.params.id, { userID: currentUser.id, text: text }).then((response) => {
                console.log(response);
                setText('');
                Axios.get(url + '/post/comments/' + props.match.params.id).then((response) => {
                    setNumComments(response.data.length);
                    setComments([...response.data].sort(function (a, b) {
                        return a.id - b.id;
                    }));
                });
            })
        }
    }

    function timeSince(miliseconds) {
        var seconds = Math.floor(miliseconds / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
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
                                    <div className={"postCommentsContainer " + (chatSelected ? '' : 'display-none')}>
                                        {
                                            comments.map((comment) => {
                                                return (
                                                    <div className="commentContainer" key={comment.id} onClick={
                                                        (e) => {
                                                            if (!e.target.classList.contains('commentProfileBorder') 
                                                            && !e.target.classList.contains('deleteCommentButton')
                                                            && !e.target.classList.contains('removeCommentX')
                                                            ) {
                                                                e.currentTarget.classList.toggle('flex-direction-column');
                                                                e.currentTarget.childNodes[1].childNodes[0].classList.toggle('fullComment');
                                                            }
                                                        }
                                                    }>
                                                        <p className="commentTimestamp">{timeSince((new Date(Date.now()).getTime()) - (new Date(comment.date).getTime() + hour) ) + ' ago'}</p>
                                                        <div className="commentProfile">
                                                            <div className="profile-border commentProfileBorder" onClick={() => { props.history.push('/profil/' + comment.user_id); }}>
                                                                {comment.public_id !== null ?
                                                                    <Image
                                                                        cloudName={'rt-foto-editor'}
                                                                        publicId={comment.public_id}
                                                                        width="50"
                                                                        crop="scale"
                                                                        className="profile-icon"
                                                                    />
                                                                    : <img alt="" src={PROFILEICON} className="profile-icon" />
                                                                }
                                                            </div>
                                                            <p className="commentProfileName">{comment.displayname}: </p>
                                                            {(currentUser.id === parseInt(comment.user_id))
                                                                || (currentUser.authority === 'super-admin')
                                                                || (currentUser.authority === 'admin') ?
                                                                <div className="deleteCommentButton" onClick={
                                                                    (e) => {
                                                                        if (!e.currentTarget.classList.contains('isDeleting')) {
                                                                            e.currentTarget.classList.add('isDeleting');
                                                                            removeComment(comment.id);
                                                                        }
                                                                    }
                                                                }>
                                                                    <BootstrapIcon type={84} />
                                                                    <BootstrapIcon type={85} />
                                                                </div>
                                                                : null

                                                            }
                                                        </div>
                                                        <div className="commentTextContainer">
                                                            <p className="commentText">{comment.text}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={"newCommentContainer " + (chatSelected ? '' : 'display-none')}>
                                        <Form acceptCharset="UTF-8" onSubmit={(e) => { e.preventDefault(); e.target.reset(); }}>
                                            <Form.Group controlId="newMessageText">
                                                <Form.Label srOnly>Text</Form.Label>
                                                <Form.Control placeholder="Novi komentar..." autoComplete="off" as="textarea" rows={3} onChange={(e) => { setText(checkText(e.target.value)); document.getElementById('newMessageText').value = checkText(e.target.value); }} />
                                            </Form.Group>
                                            <Form.Group className="justify-content-center">
                                                <button className="resendButton" type="submit" onClick={postComment} name="button">Post Comment</button>
                                            </Form.Group>
                                        </Form>
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