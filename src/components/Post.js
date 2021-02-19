import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { AuthorityContext } from './AuthorityContext';
import { Redirect } from 'react-router';
import Error403 from './Error403';

const Post = (props) => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const loadPost = () => {
        setIsLoading(false);
        if (loginStatus) {
            Axios.get(url + '/posts/' + props.match.params.id).then((response) => {
                console.log(response);
                setPost(response.data[0]);
            });
        }
        else redirectReload('/login').then((response) => { window.location.reload(); });
    };
    useEffect(() => {
        loadPost();
    }, [currentUser]);

    function redirectReload(redirectPath) {
        window.history.pushState({}, '', redirectPath);
        return new Promise(function (resolve, reject) {
            resolve();
        })
    }

    return (

        <div className="container">

            <div className="row">

                <div className="col-sm-12 blog-main">

                    <div className="blog-post PostLarge">
                        {isLoading ?
                            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            : (post && post.view === 'public') ?
                                <div className="postLargeContainer">
                                    <div className="postHeader">
                                        <p className="timestamp">{post.date.substr(8, 2) + '/' + post.date.substr(5, 2) + '/' + post.date.substr(0, 4)} {post.time}</p>
                                        <p>Posted by: {post.displayname}<br />[{post.view}]</p>
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
                                : <Error403 path={window.location.pathname} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;