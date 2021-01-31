import Axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { AuthorityContext } from './AuthorityContext';
import { Form, InputGroup } from 'react-bootstrap';

const Postavke = () => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';
    const [toggleChangeU, changeUsernameToggle] = useState(false);
    const [toggleChangeP, changePasswordToggle] = useState(false);
    const [username, setUsername] = useState('');
    const [currentpassword, setCurrentPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [errorText, setErrorText] = useState({
        usernameError: '',
        currentpasswordError: '',
        newpasswordError: '',
        repasswordError: ''
    });

    useEffect(() => {
        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function regexTestUsername(username) {

        var patternUsername = new RegExp(/^[a-zA-Z0-9]{4,20}$/i);
        var validUsername = 1;
        let newErrorText = [''];

        if (!patternUsername.test(username)) {
            validUsername = 0;
            newErrorText[0] = username.length === 0 ? 'Username is required'
                : username.length < 4 ? 'Username is too short'
                    : username.length > 20 ? 'Username is too long'
                        : 'Username is invalid';
        }
        for (var i = 0; i < userList.length; i++) {
            if (username.toLowerCase() === userList[i].username.toLowerCase()) {
                validUsername = 0;
                newErrorText[0] = 'Username is already taken';
            }
        }
        return {
            validUsername: validUsername,
            usernameError: newErrorText[0]
        }
    }

    function regexTestPassword(currentpassword, newpassword, repassword) {

        var patternPassword = new RegExp(/^([a-zA-Z0-9@*#]{8,32})$/i);
        var validCurrentPassword = 1, validNewPassword = 1, validRepassword = 1;
        let newErrorText = ['', '', '', ''];

        Axios.post(url+'/login', {
            username: currentUser.username,
            password: currentpassword,
        }).then((response) => {
            console.log(response.data);
            let userMatch = response.data;
            console.log('currentpassword length = ' + currentpassword.length + ' ' + currentpassword.length === 0 + ', userMatch id = ' + userMatch.id + ' ' + userMatch.id === null)
            if (currentpassword.length === 0 || userMatch.id === null) {
                    validCurrentPassword = 0;
                    newErrorText[1] = currentpassword.length === 0 ? 'Current password is required' : 'Current Password is incorrect';
            }
        });

        if (!patternPassword.test(newpassword)) {
            validNewPassword = 0;
            newErrorText[2] = newpassword.length === 0 ? 'New Password is required'
                : newpassword.length < 8 ? 'New Password is too short'
                    : newpassword.length > 32 ? 'New Password is too long'
                        : 'New Password is invalid';
        }
        else {
            if (repassword !== newpassword) {
                validRepassword = 0;
                newErrorText[3] = repassword.length === 0 ? 'Please repeat your password' : 'Passwords do not match';
            }
        }
        return {
            validCurrentPassword: validCurrentPassword,
            currentpasswordError: newErrorText[1],
            validNewPassword: validNewPassword,
            newpasswordError: newErrorText[2],
            validRepassword: validRepassword,
            repasswordError: newErrorText[3]
        }
    }

    function changeUsername(){
        var {
            validUsername,
            usernameError
        } = regexTestUsername(username);

        setErrorText({ usernameError: usernameError });

        if(validUsername === 1){
            Axios.put(url + '/update-username', {data: {username: username, userID: currentUser.id}}).then((response) => {
                console.log(response);
                window.location.reload();
            })
        }
    }

    function changePassword(){
        var {
            validCurrentPassword,
            currentpasswordError,
            validNewPassword,
            newpasswordError,
            validRepassword,
            repasswordError
        } = regexTestPassword(currentpassword, newpassword, repassword);

        setErrorText({ currentpasswordError: currentpasswordError, newpasswordError: newpasswordError, repasswordError: repasswordError });

        if(validCurrentPassword === 1 && validNewPassword === 1 && validRepassword === 1){
            Axios.put(url + '/update-password', {data: {password: newpassword, userID: currentUser.id}}).then((response) => {
                console.log(response);
                window.location.reload();
            })
        }
    }

    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong>Postavke</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 blog-main">

                        <div className="blog-post Postavke">
                            <hr className="round" />
                            <p>Username: {currentUser.displayname}</p>
                            
                            {toggleChangeU ? 
                                <Form onSubmit={(e) => { e.preventDefault(); }}>
                                    <Form.Group>
                                        <Form.Label srOnly>Username</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="username" onChange={(e) => { setUsername(e.target.value); }} placeholder="Enter username" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="append">Username</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.usernameError}</Form.Text>
                                        <Form.Text muted>
                                            Your username must be 4-20 characters long (letters and numbers only)
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="justify-content-center">
                                        <button className="resendButton green-border" type="submit" onClick={changeUsername} name="button">Confirm</button>
                                        <button className="resendButton red-border" type="submit" onClick={()=>{changeUsernameToggle(false)}} name="button">Cancel</button>
                                    </Form.Group>
                                </Form>
                            : <button onClick={()=>{changeUsernameToggle(true)}}>Change username</button>}
                            <hr className="round" />
                            {toggleChangeP ? 
                                <Form onSubmit={(e) => { e.preventDefault(); }}>
                                    <Form.Group>
                                        <Form.Label srOnly>Current Password</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="password" onChange={(e) => { setCurrentPassword(e.target.value); }} placeholder="Enter current password" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="appendLong">Old Password</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.currentpasswordError}</Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label srOnly>New Password</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="password" onChange={(e) => { setNewPassword(e.target.value) }} placeholder="Enter new password" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="appendLong">New Password</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.newpasswordError}</Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label srOnly>Repeat password</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="password" onChange={(e) => { setRepassword(e.target.value) }} placeholder="Repeat password" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="appendLong">Confirm</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.repasswordError}</Form.Text>
                                        <Form.Text muted>
                                            Your password must be 8-32 characters long (letters, numbers and characters: @, *, #)
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="justify-content-center">
                                        <button className="resendButton green-border" type="submit" onClick={changePassword} name="button">Confirm</button>
                                        <button className="resendButton red-border" type="submit" onClick={()=>{changePasswordToggle(false)}} name="button">Cancel</button>
                                    </Form.Group>
                                </Form>
                            : <button onClick={()=>{changePasswordToggle(true)}}>Change password</button>}
                            <hr className="round" />
                            <p className="text-center">Note: To see the changes requires you to login again</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Postavke;