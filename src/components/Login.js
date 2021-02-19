import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import { Form, InputGroup } from 'react-bootstrap';
import { AuthorityContext } from './AuthorityContext';
import BootstrapIcon from '../svg icons/BootstrapIcon.js';

const Login = () => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [errorText, setErrorText] = useState({
        usernameError: '',
        passwordError: ''
    });
    const [showPassword, toggleShowPassword] = useState(false);

    useEffect(() => {
        if (currentUser.loggedIn) {
            console.log('user logged in');
            setRedirect(true);
        }
        // eslint-disable-next-line
    }, []);


    function userLogin() {

        var validUsername = 1, validPassword = 1;
        let newErrorText = ['', ''];

        Axios.post(url+'/login', {
            username: username.toLowerCase(),
            password: password,
        }).then((response) => {
            console.log(response.data);
            let userMatch = response.data;
            if (username.length === 0 || userMatch.username === null) {
                validUsername = 0;
                newErrorText[0] = username.length === 0 ? 'Username is required' : 'Username not recognized';
            }
            else if (password.length === 0 || userMatch.id === null) {
                    validPassword = 0;
                    newErrorText[1] = password.length === 0 ? 'Password is required' : 'Password is incorrect';
            }
            setErrorText({
                usernameError: newErrorText[0],
                passwordError: newErrorText[1],
            });

            if (validUsername === 1 && validPassword === 1) {
                setCurrentUser(userMatch);
                setRedirect(true);
            }
        });
    }


    return (
        <div>
            {redirect ? <Redirect to='/home' /> : null}
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong>Login</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 blog-main">

                        <div className="blog-post Register">
                            <hr className="round" />
                            <div className="row justify-content-center">


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
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label srOnly>Password</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text onClick={()=>{toggleShowPassword(!showPassword)}}><BootstrapIcon type={showPassword ? 17 : 16} /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type={showPassword ? "text" : "password"} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password" />
                                            <InputGroup.Append>
                                                <InputGroup.Text className="append">Password</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="errorText">{errorText.passwordError}</Form.Text>
                                    </Form.Group>
                                    <Form.Group className="justify-content-center">
                                        <button className="registerButton" type="submit" onClick={userLogin} name="button">Login</button>

                                        <Form.Text muted>
                                            Don't have an account?<NavLink to='/register' className="underlined"> Sign up.</NavLink>
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

export default Login;