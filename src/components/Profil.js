import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthorityContext } from './AuthorityContext';
import { Form } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import PROFILEICON from '../images/profile-icon.png';

const Profil = () => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [profileImage, setProfileImage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (currentUser.id) {
            Axios.get(url + '/profile_images/' + currentUser.id).then((response) => {
                if (response.data.length) setProfileImage(response.data[0]);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (currentUser.id) {
            Axios.get(url + '/profile_images/' + currentUser.id).then((response) => {
                if (response.data.length) setProfileImage(response.data[0]);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.match('image.*')) {
            previewFile(file);
            setFileInputState(e.target.value);
        }
        else {
            setFileInputState('');
            setPreviewSource('');
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    const postFile = (e) => {
        setIsLoading(true);
        console.log('submitting');
        e.preventDefault();
        if (!previewSource) {
            setIsLoading(false);
            return;
        }
        postImage(previewSource);
    }

    const postImage = (base64EncodedImage) => {
        setFileInputState('');
        if (document.getElementById('fileUploadForm')) document.getElementById('fileUploadForm').reset();
        Axios.post(url + '/image/upload/profile', {
            data: base64EncodedImage,
            userID: currentUser.id
        }).then((response) => {
            console.log(response.data.id);
            setIsLoading(false);
            window.location.reload();
        })
    }

    return (
        <div>
            <div className="blog-header small-header">
                <div className="container btrans small-btrans">
                    <h1 className="text-center"><strong>Profil</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 blog-main">

                        <div className="blog-post Profil">
                            <hr className="round" />
                            <p className="text-center">Username: {currentUser.displayname}</p>
                            <hr className="round" />
                            <p>Email: {currentUser.email}</p>
                            <p>Account type: {currentUser.authority}</p>
                            <p>User ID: {currentUser.id}</p>
                            <div className="row justify-content-center">

                            </div>
                            <hr className="round" />
                        </div>

                    </div>
                    <div className="col-md-6 blog-main text-center">

                        <div className="blog-post Profil">
                            <hr className="round" />
                            <p className="text-center">Profile image</p>
                            <div className="profile-border large-border">
                                {
                                    previewSource ? <img alt="" src={previewSource} className="profile-icon" />
                                        : profileImage ? <Image
                                            cloudName={'rt-foto-editor'}
                                            publicId={profileImage.public_id}
                                            width="220"
                                            crop="scale"
                                            className="profile-icon"
                                        />
                                            : <img alt="" src={PROFILEICON} className="profile-icon" />
                                }
                            </div>
                            <Form acceptCharset="UTF-8" onSubmit={postFile} id="fileUploadForm">
                                <Form.Group>
                                    <Form.File accept="image/x-png,image/jpeg" value={fileInputState} onChange={handleFileInputChange} className="fileUpload" id="fileUploadID" name="image" label="Upload photo" />
                                </Form.Group>
                                <hr className="round" />
                                <Form.Group className="postButtonHolder">
                                    <button type="submit" name="button" disabled={isLoading} className="genericButton profileUploadButton">Upload</button>
                                    {isLoading ?
                                        <div className="centeredFlex">
                                            <div className="lds-spinner-small"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                        </div>
                                        : null
                                    }
                                </Form.Group>
                            </Form>
                            <hr className="round" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}


export default Profil;