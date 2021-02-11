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
    const [messagesSent, setMessagesSent] = useState([]);
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [sentText, setSentText] = useState('');
    const [usernameError, setUsernameError] = useState('');

    useEffect(() => {
        Axios.get(url + '/users').then((response) => {
            setUserList([...response.data]);
        }).then(() => {
            updateMessages();
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

    function updateMessages(){
        Axios.get(url + '/messages/' + currentUser.id).then((response) => {
            setMessages([...response.data].reverse());
        });
        Axios.get(url + '/messages-sent/' + currentUser.id).then((response) => {
            setMessagesSent([...response.data].reverse());
        });
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
            }).then(()=>{
                updateMessages();
            });
        }
        else {
            setUsernameError('User not found');
        }
    }

    function replyFocus(usernameReply){
        document.getElementById('newMessageText').focus();
        setUsername(usernameReply);
        document.getElementById('newMessageUsername').value = usernameReply;
    }

    function deleteMessage(message_id){
        Axios.delete(url + '/remove-message', { data: { message_id: message_id } }).then((response) => {
            console.log(response);
            updateMessages();
        });
    }

    function deleteAllRecieved(reciever_id){
        Axios.delete(url + '/remove-messages-recieved', { data: { reciever_id: reciever_id } }).then((response) => {
            console.log(response);
            updateMessages();
        });
    }

    function deleteAllSent(sender_id){
        Axios.delete(url + '/remove-messages-sent', { data: { sender_id: sender_id } }).then((response) => {
            console.log(response);
            updateMessages();
        });
    }

    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong>Inbox</strong></h1>
                </div>
            </div>

            <div className="container large-container">

                <div className="row justify-content-center">

                    <div className="col-lg-4 blog-main">

                        <div className="blog-post Poruke">
                            <p>Broj novih poruka: {messages.length}</p>
                            <hr className="round" />
                            <button onClick={()=>{deleteAllRecieved(currentUser.id)}}>Delete All</button>
                            {
                                messages.map(message => {
                                    return (
                                        <div className={message.opened ? 'message opened' : 'message'} key={message.id}>
                                            <p>From: {findUsername(message.sender_id)}
                                                <br />Date: {message.date.substr(8,2)+'/'+message.date.substr(5,2)+'/'+message.date.substr(0,4)} at {message.time}</p>
                                            <div className="message-text">
                                                <p>
                                                    {message.text}
                                                </p>
                                            </div>
                                            <button onClick={()=>{replyFocus(findUsername(message.sender_id))}}>Reply</button>
                                            <button onClick={()=>{deleteMessage(message.id)}}>Delete</button>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                    <div className="col-lg-4 blog-main">

                        <div className="blog-post Poruke">
                            <p>Poslano: {messagesSent.length}</p>
                            <hr className="round" />
                            <button onClick={()=>{deleteAllSent(currentUser.id)}}>Delete All</button>
                            {
                                messagesSent.map(message => {
                                    return (
                                        <div className='message' key={message.id}>
                                            <p>To: {findUsername(message.reciever_id)}
                                                <br />Date: {message.date.substr(8,2)+'/'+message.date.substr(5,2)+'/'+message.date.substr(0,4)} at {message.time}</p>
                                            <div className="message-text">
                                                <p>
                                                    {message.text}
                                                </p>
                                            </div>
                                            <button onClick={()=>{deleteMessage(message.id)}}>Delete</button>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                    <div className="col-lg-4 blog-main">

                        <div className="blog-post NovaPoruka">
                            <p>Nova poruka</p>
                            <hr className="round" />
                            <Form acceptCharset="UTF-8" onSubmit={(e) => { e.preventDefault(); if(usernameError === ''){ e.target.reset(); setSentText('Message sent'); } }}>
                                <Form.Group controlId="newMessageUsername">
                                    <Form.Label srOnly>Prima:</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Prima: </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="username" onChange={(e) => { setUsername(e.target.value); setSentText(''); }} placeholder="Enter username" />
                                    </InputGroup>
                                    <Form.Text className="errorText">{usernameError}</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="newMessageText">
                                    <Form.Label>Text</Form.Label>
                                    <Form.Control as="textarea" rows={5} onChange={(e) => { setText(e.target.value); setSentText(''); }} />
                                </Form.Group>
                                <Form.Group className="justify-content-center">
                                    <button className="resendButton" type="submit" onClick={sendMessage} name="button">Send Message</button>
                                    <Form.Text className="greenText">{sentText}</Form.Text>
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