import Axios from 'axios';
import { useContext } from 'react';
import { AuthorityContext } from './AuthorityContext';
import { Form } from 'react-bootstrap';
import PROFILEICON from '../images/profile-icon.png';

const Profil = () => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const checkAuth = () => {
        Axios.get(url+'/userAuthentication').then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
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
                            <button onClick={checkAuth}>Check authentication</button>
                        </div>

                    </div>
                    <div className="col-md-6 blog-main">

                        <div className="blog-post Profil">
                            <hr className="round" />
                            <p className="text-center">Profile picture { }</p>
                            <div className="profile-border large-border">
                                <img alt="" src={PROFILEICON} className="profile-icon" />
                            </div>
                            <Form>
                                <Form.Group>
                                    <Form.File className="fileUpload" id="exampleFormControlFile1" label="Upload photo" />
                                </Form.Group>
                            </Form>
                            <div className="row justify-content-center">

                            </div>
                            <hr className="round" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}


export default Profil;