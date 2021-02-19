import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { AuthorityContext } from './AuthorityContext';
import { Redirect } from 'react-router';

const Posts = () => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [posts, setPosts] = useState();
    const loadImages = () => {
        Axios.get(url + '/posts/public').then((response) => {
            console.log(response);
            setPosts(response.data);
        });
    };
    useEffect(() => {
        loadImages();
    }, []);

    function redirectReload(redirectPath) {
        window.history.pushState({}, '', redirectPath);
        return new Promise(function (resolve, reject) {
            resolve();
        })
    }

    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong> Posts</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12 blog-main">

                        <div className="blog-post Posts">
                            <hr className="round" />
                            <div className="centeredContainer">
                                {posts &&
                                    posts.map((post) => (
                                        <div className="postContainer">
                                            <p>{post.displayname}</p>
                                            <div className="postThumbnailContainer" onClick={() => { redirectReload('posts/' + post.id).then(()=>{}) }} key={post.id}>
                                                <Image
                                                    cloudName={'rt-foto-editor'}
                                                    publicId={post.public_id}
                                                    width="300"
                                                    crop="scale"
                                                    className="postThumbnailImage"
                                                />
                                            </div>
                                        </div>
                                    ))}
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