import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { AuthorityContext } from './AuthorityContext';
import { NavLink } from 'react-router-dom';
import BootstrapIcon from '../svg icons/BootstrapIcon';

const Posts = () => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser, url] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;

    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [likes, setLikes] = useState([]);
    const [dislikes, setDislikes] = useState([]);
    let mounted = false;
    const loadImages = () => {
        Axios.get(url + '/posts/public').then((response) => {
            setPosts(response.data.sort(function (a, b) {
                return b.id - a.id;
            }));
            if (mounted) {
                setIsLoading(false);
            }
        });
        Axios.get(url + '/posts-likesCount').then((response) => {
            if (mounted) {
                setLikes([...response.data]);
            }
        });
        Axios.get(url + '/posts-dislikesCount').then((response) => {
            if (mounted) {
                setDislikes([...response.data]);
            }
        });
    };
    useEffect(() => {
        // eslint-disable-next-line
        mounted = true;
        return () => mounted = false;
    }, []);

    useEffect(() => {
        // eslint-disable-next-line
        mounted = true;
        loadImages();
        // eslint-disable-next-line
        return () => mounted = false;
    }, [currentUser]);

    function getLikes(postID) {
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].post_id === postID) return likes[i].total;
        }
        return 0;
    }

    function getDislikes(postID) {
        for (let i = 0; i < dislikes.length; i++) {
            if (dislikes[i].post_id === postID) return dislikes[i].total;
        }
        return 0;
    }

    return (
        <div>
            <div className="blog-header small-header">
                <div className="container btrans small-btrans">
                    <h1 className="text-center"><strong> Posts</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12 blog-main">

                        <div className="blog-post Posts">
                            <hr className="round" />
                            <div className="centeredContainer">
                                {isLoading ?
                                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                    : posts ?
                                        posts.map((post) => (
                                            <div className="postContainer" key={post.id}>
                                                <p className="postContainerP">{post.displayname}</p>
                                                <NavLink to={'/posts/' + post.id} className="postThumbnailContainer">
                                                    <Image
                                                        cloudName={'rt-foto-editor'}
                                                        publicId={post.public_id}
                                                        width="300"
                                                        crop="scale"
                                                        className="postThumbnailImage"
                                                    />
                                                </NavLink>
                                                <p className="likes"><BootstrapIcon type={76} /><b className="likeNumber">{getLikes(post.id)}</b>&emsp; <b className="dislikeNumber">{getDislikes(post.id)}</b><BootstrapIcon type={77} /></p>
                                            </div>
                                        ))
                                        : null}
                            </div>
                            <hr className="round" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;