import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import { Form, InputGroup } from 'react-bootstrap';
import { AuthorityContext } from './AuthorityContext';

const Register = () => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [autoLogin, setAutoLogin] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const [errorText, setErrorText] = useState({
        emailError: '',
        usernameError: '',
        passwordError: '',
        repasswordError: ''
    });


    useEffect(() => {
        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
        });
        if (loginStatus) {
            console.log('user logged in');
            window.scrollTo(0, 0);
            setRedirect(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function regexTest(email, username, password, repassword, users) {

        var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var patternUsername = new RegExp(/^[a-zA-Z0-9]{4,20}$/i);
        var patternPassword = new RegExp(/^([a-zA-Z0-9@*#]{8,32})$/i);
        var validEmail = 1, validUsername = 1, validPassword = 1, validRepassword = 1;
        let newErrorText = ['', '', '', ''];

        if (!patternEmail.test(email)){
            validEmail = 0;
            newErrorText[0] = email.length===0 ? 'Email is required' : 'Email is invalid';
        }
        if (!patternUsername.test(username)){
            validUsername = 0;
            newErrorText[1] = username.length===0 ? 'Username is required'
            : username.length<4 ? 'Username is too short'
            : username.length>20 ? 'Username is too long'
            : 'Username is invalid';
        }
        if (!patternPassword.test(password)){
            validPassword = 0;
            newErrorText[2] = password.length===0 ? 'Password is required'
            : password.length<8 ? 'Password is too short'
            : password.length>32 ? 'Password is too long'
            : 'Password is invalid';
        }
        else{
            if (repassword !== password) {
                validRepassword = 0;
                newErrorText[3] = repassword.length === 0 ? 'Please repeat your password' : 'Passwords do not match';
            }
        }
        for (var i = 0; i < users.length; i++) {
            if (email.toLowerCase() === users[i].email.toLowerCase()) {
                validEmail = 0;
                newErrorText[0] = 'Email is already taken';
            }
            if (username.toLowerCase() === userList[i].username.toLowerCase()) {
                validUsername = 0;
                newErrorText[1] = 'Username is already taken';
            }
        }
        /*if (email.length === 0) {
            validEmail = -1;
            newErrorText[0] = 'Email is required';
        }
        else if (!patternEmail.test(email)) {
            validEmail = 0;
            newErrorText[0] = 'Email is invalid';
        }
        else validEmail = 1;
        if (username.length === 0) {
            validUsername = -1;
            newErrorText[1] = 'Username is required';
        }
        else if (username.length < 4) {
            validUsername = 0;
            newErrorText[1] = 'Username is too short';
        }
        else validUsername = 1;
        if (password.length === 0) {
            validPassword = -1;
            newErrorText[2] = 'Password is required';
        }
        else if (password.length < 8) {
            validPassword = 0;
            newErrorText[2] = 'Password is too short';
        }
        else {
            validPassword = 1;
            if (repassword.length === 0) {
                validRepassword = -1;
                newErrorText[3] = 'Please repeat your password';
            }
            else if (repassword !== password) {
                validRepassword = 0;
                newErrorText[3] = 'Passwords do not match';
            }
            else validRepassword = 1;
        }*/

        return {
            validEmail: validEmail,
            emailError: newErrorText[0],
            validUsername: validUsername,
            usernameError: newErrorText[1],
            validPassword: validPassword,
            passwordError: newErrorText[2],
            validRepassword: validRepassword,
            repasswordError: newErrorText[3]
        }
    }

    function addUser(e) {
        e.preventDefault();

        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
            var {
                validEmail,
                emailError,
                validUsername,
                usernameError,
                validPassword,
                passwordError,
                validRepassword,
                repasswordError
            } = regexTest(email, username, password, repassword, userList);

            setErrorText({ emailError, usernameError, passwordError, repasswordError, });

            if (validEmail === 1 && validUsername === 1 && validPassword === 1 && validRepassword === 1) {
                Axios.post(url + '/register/user', {
                    email: email.toLowerCase(),
                    username: username.toLowerCase(),
                    password: password,
                    authority: 3
                }).then(() => {
                    Axios.get(url + '/users').then((response) => {
                        setUserList([...response.data]);
                    });
                    console.log('user registered');
                    window.scrollTo(0, 0);
                    if (autoLogin) {
                        Axios.post(url + '/login', {
                            username: username.toLowerCase(),
                            password: password
                        }).then((response) => {
                            let userMatch = response.data;
                            sessionStorage.setItem('sessionID', userMatch.sessionID);
                            console.log('user logged in');
                            localStorage.setItem('token', response.data.token);
                            setCurrentUser(userMatch);
                            setAuthority({ loginStatus: true, authority: userMatch.authority });
                            setRedirect(true);
                        });
                    }
                    else window.location.reload();
                })
            }
        });


    }


    return (
        <div>
            {redirect ? <Redirect to='/home' /> : null}
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong>Register</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 blog-main">

                        <div className="blog-post Register">
                            <hr className="round" />
                            <div className="row justify-content-center">


                                <Form>
                                    <Form.Group>
                                        <Form.Label srOnly>Email address</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="append">Email</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText" >{errorText.emailError}</Form.Text>
                                        <Form.Text muted>
                                            Ex. name@gmail.com
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label srOnly>Username</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter username" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="append">Username</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.usernameError}</Form.Text>
                                        <Form.Text muted>
                                            Your username must be 4-20 characters long (letters and numbers only)
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label srOnly>Password</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="append">Password</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.passwordError}</Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label srOnly>Repeat password</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control type="password" onChange={(e) => { setRepassword(e.target.value) }} placeholder="Repeat password" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="append">Confirm</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.repasswordError}</Form.Text>
                                        <Form.Text muted>
                                            Your password must be 8-32 characters long (letters, numbers and characters: @, *, #)
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check className="checkbox" checked={autoLogin} onChange={() => { setAutoLogin(!autoLogin) }} type="checkbox" label="Login after registration" />
                                    </Form.Group>
                                    <Form.Group className="justify-content-center">
                                        <button className="registerButton" type="submit" onClick={addUser} name="button">Register</button>

                                        <Form.Text muted>
                                            Already have an account?<NavLink to='/login' className="underlined"> Sign in.</NavLink>
                                        </Form.Text>
                                    </Form.Group>
                                </Form>

                            </div>
                            <hr className="round" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;