import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { Form, InputGroup } from 'react-bootstrap';
import { AuthorityContext } from './AuthorityContext';

const Inbox = () => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [usernameError, setUsernameError] = useState('');

    useEffect(() => {
        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
        }).then(() => {

            Axios.get(url + '/messages/' + currentUser.id).then((response) => {
                setMessages([...response.data]);
                console.log(response);
            });
        }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    function findUsername(userID) {
        for (var i = 0; i < userList.length; i++) {
            if (userID === userList[i].id) return userList[i].displayname;
        }
        return '';
    }

    function findID(username) {
        for (var i = 0; i < userList.length; i++) {
            if (username.toLowerCase() === userList[i].username.toLowerCase()) return userList[i].id;
        }
        return '';
    }

    function sendMessage() {
        var validUsername = 0;
        for (var i = 0; i < userList.length; i++) {
            if (username.toLowerCase() === userList[i].username.toLowerCase()) validUsername = 1;
        }
        if (validUsername === 1) {
            setUsernameError('');
            Axios.post(url + '/send-message', { sender_id: currentUser.id, reciever_id: findID(username), text: text }).then((response) => {
                console.log(response);
            })
        }
        else {
            setUsernameError('User not found');
        }
    }

    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong>Inbox</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 blog-main">

                        <div className="blog-post Poruke">
                            <p>Broj novih poruka: {messages.length}</p>
                            <hr className="round" />
                            {
                                messages.map(message => {
                                    return (
                                        <div className={message.opened ? 'message opened' : 'message'} key={message.id}>
                                            <p>From: {findUsername(message.sender_id)}, {message.date.substr(0,10)} {message.time}
                                                <br />Text: </p>
                                            <div className="message-text">
                                                <p>
                                                    {message.text}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                    <div className="col-md-6 blog-main">

                        <div className="blog-post NovaPoruka">
                            <p>Nova poruka</p>
                            <hr className="round" />
                            <Form onSubmit={(e) => { e.preventDefault(); }}>
                                <Form.Group>
                                    <Form.Label srOnly>Prima:</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Prima: </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="username" onChange={(e) => { setUsername(e.target.value); }} placeholder="Enter username" />
                                    </InputGroup>
                                    <Form.Text className="errorText">{usernameError}</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Text</Form.Label>
                                    <Form.Control as="textarea" rows={5} onChange={(e) => { setText(e.target.value); }} />
                                </Form.Group>
                                <Form.Group className="justify-content-center">
                                    <button className="resendButton" type="submit" onClick={sendMessage} name="button">Send Message</button>
                                </Form.Group>
                            </Form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Inbox;