import { Form, Row } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';
import { checkText } from 'smile2emoji';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Editor = (props) => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [description, setDescription] = useState('');
    const [postView, setPostView] = useState('Public');
    const [isLoading, setIsLoading] = useState(false);

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
        console.log('submitting');
        e.preventDefault();
        if (!previewSource) return;
        postImage(previewSource);
    }

    const postImage = (base64EncodedImage) => {
        var tempDescription = description;
        var tempPostView = postView;
        setFileInputState('');
        setPreviewSource('');
        setDescription('');
        setPostView('Public');
        setIsLoading(true);
        if (document.getElementById('fileUploadForm')) document.getElementById('fileUploadForm').reset();
        Axios.post(url + '/image/upload/post', {
            data: base64EncodedImage,
            userID: currentUser.id,
            description: tempDescription,
            view: tempPostView
        }).then((response) => {
            console.log(response.data[0].id);
            props.history.push('/posts/' + response.data[0].id);
            setIsLoading(false);
        })
    }

    return (
        <div>
            <div className="blog-header small-header">
                <div className="container btrans small-btrans">
                    <h1 className="text-center"><strong>Foto Editor</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12 blog-main">

                        <div className="blog-post">
                            <Form acceptCharset="UTF-8" onSubmit={postFile} id="fileUploadForm">
                                <Form.Group>
                                    <Form.File accept="image/x-png,image/gif,image/jpeg" value={fileInputState} onChange={handleFileInputChange} className="fileUpload" id="fileUploadID" name="image" label="Upload photo" />
                                </Form.Group>

                                <div className="row">
                                    <div className="col-1 holder-buttons">
                                        <button type="button" name="button" className="edit-button"></button>
                                        <button type="button" name="button" className="edit-button"></button>
                                        <button type="button" name="button" className="edit-button"></button>
                                        <button type="button" name="button" className="edit-button"></button>
                                        <button type="button" name="button" className="edit-button"></button>
                                        <button type="button" name="button" className="edit-button"></button>
                                        <button type="button" name="button" className="edit-button"></button>
                                        <button type="button" name="button" className="edit-button"></button>
                                    </div>
                                    <div className="col-6 placeholder">
                                        {isLoading ?
                                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                            : previewSource ?
                                                <img src={previewSource} alt="selected file" className="previewSource" />
                                                : null
                                        }
                                    </div>
                                    <div className="col-4 holder-sliders">
                                        <div className="d-flex justify-content-center my-4">
                                            <span className="mr-2 mt-0 white-text">0</span>
                                            <form className="range-field w-100">
                                                <input className="border-0 slider" type="range" min="0" max="255" />
                                            </form>
                                            <span className="ml-2 mt-0 white-text">255</span>
                                        </div>

                                        <div className="d-flex justify-content-center my-4">
                                            <span className="mr-2 mt-0 white-text">0</span>
                                            <form className="range-field w-100">
                                                <input className="border-0 slider" type="range" min="0" max="255" />
                                            </form>
                                            <span className="ml-2 mt-0 white-text">255</span>
                                        </div>

                                        <div className="d-flex justify-content-center my-4">
                                            <span className="mr-2 mt-0 white-text">0</span>
                                            <form className="range-field w-100">
                                                <input className="border-0 slider" type="range" min="0" max="255" />
                                            </form>
                                            <span className="ml-2 mt-0 white-text">255</span>
                                        </div>
                                    </div>

                                </div>
                                <hr className="round" />
                                {(currentUser.loggedIn && currentUser.verified === 'verified') ?
                                    <div>
                                        <Form.Group controlId="newPostDescription">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control autoComplete="off" as="textarea" rows={5} onChange={(e) => { setDescription(checkText(e.target.value)); document.getElementById('newPostDescription').value = checkText(e.target.value); }} />
                                        </Form.Group>
                                        <Form.Group className="postButtonHolder">
                                            <button type="submit" name="button" className="genericButton">Post</button>
                                        </Form.Group>
                                        <DropdownButton className="changePostView" title={postView}>
                                            <Dropdown.Item onSelect={() => { setPostView('Public') }}>Public</Dropdown.Item>
                                            <Dropdown.Item onSelect={() => { setPostView('Friends') }} >Friends</Dropdown.Item>
                                            <Dropdown.Item onSelect={() => { setPostView('Private') }} >Private</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                    : null
                                }
                            </Form>
                            <hr className="round" />
                        </div>




                        <div className="blog-post">
                            <h5 className="w">Link Vizije</h5>
                            <p className="blog-post-meta">Zadnje ažurirano 8. studenog 2020. <strong> <a className="alink" href="https://docs.google.com/document/d/141DHijMdyPfeffnDDo_hYwJRKfGQT5NC6UDfMsEDl3Y/edit?usp=sharing" target="_blank" rel="noreferrer">Vizija</a> </strong></p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;