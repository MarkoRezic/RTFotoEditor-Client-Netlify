import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { Form, InputGroup } from 'react-bootstrap';
import { AuthorityContext } from './AuthorityContext';
import { checkText } from 'smile2emoji';

const Inbox = () => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [messagesRecieved, setMessagesRecieved] = useState([]);
    const [messagesSent, setMessagesSent] = useState([]);
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState({
        other_id: null,
        messages: []
    })
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

    useEffect(() => {
        setMessages([...mergeChunks(makeChunks([...messagesRecieved], "sender_id"), makeChunks([...messagesSent], "reciever_id"), "sender_id", "reciever_id")].sort(function (a, b) {
            return b[0]["id"] - a[0]["id"];
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messagesSent, messagesRecieved]);

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

    function updateMessages() {
        Axios.get(url + '/messages/' + currentUser.id).then((response) => {
            setMessagesRecieved([...response.data].reverse());
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
            }).then(() => {
                updateMessages();
            });
        }
        else {
            setUsernameError('User not found');
        }
    }

    function replyFocus(usernameReply) {
        document.getElementById('newMessageText').focus();
        setUsername(usernameReply);
        document.getElementById('newMessageUsername').value = usernameReply;
    }

    function deleteMessage(message_id) {
        Axios.delete(url + '/remove-message', { data: { message_id: message_id } }).then((response) => {
            console.log(response);
            updateMessages();
        });
    }

    function deleteAllRecieved(reciever_id) {
        Axios.delete(url + '/remove-messages-recieved', { data: { reciever_id: reciever_id } }).then((response) => {
            console.log(response);
            updateMessages();
        });
    }

    function deleteAllSent(sender_id) {
        Axios.delete(url + '/remove-messages-sent', { data: { sender_id: sender_id } }).then((response) => {
            console.log(response);
            updateMessages();
        });
    }

    function makeChunks(array, property) {
        let chunked_array = [];
        let copied_array = [...array];
        let current_element;
        console.log('recieved array: ' + array);
        console.log('copied array: ' + copied_array);
        while (copied_array.length > 0) {
            current_element = copied_array[0];
            var new_chunk = [];
            for (var i = 0; i < copied_array.length; i++) {
                if (copied_array[i][property] === current_element[property]) {
                    new_chunk.push(copied_array[i]);
                    copied_array.splice(i, 1);
                    i--;
                }
            }
            chunked_array.push(new_chunk);
        }
        console.log(chunked_array);
        return chunked_array;
    }

    function mergeChunks(array1, array2, property1, property2) { //merge where array1's elements property1 === array2's elements property2
        let merged_array = [...array1];
        let copied_array = [...array2];
        let original_length = merged_array.length;
        let found;
        console.log('recieved array1: ' + array1);
        console.log('recieved array2: ' + array2);
        while (copied_array.length > 0) {
            found = false;
            for (var i = 0; i < original_length; i++) {
                if (merged_array[i][0][property1] === copied_array[0][0][property2]) {
                    while (copied_array[0].length > 0) {
                        merged_array[i].push(copied_array[0][0]);
                        copied_array[0].splice(0, 1);
                    }
                    found = true;
                    break;
                }
            }
            if (!found) merged_array.push(copied_array[0]);
            copied_array.splice(0, 1);
        }
        console.log(merged_array);
        for (var i = 0; i < merged_array.length; i++) {
            merged_array[i] = [...merged_array[i].sort(function (a, b) {
                return b["id"] - a["id"];
            })]
        }
        console.log(merged_array);
        return merged_array;
    }

    function getNewMessages(array) {
        let num = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i].sender_id !== currentUser.id && !array[i].opened) num++;
        }
        return num;
    }

    function openMessages(messageChat) {
        setChat({
            other_id: null,
            messages: []
        })
        Axios.put(url + '/open-messages', { data: { sender_id: messageChat[0].sender_id !== currentUser.id ? messageChat[0].sender_id : messageChat[0].reciever_id, reciever_id: currentUser.id } }).then((response) => {
            updateMessages();
        });
        setChat({
            other_id: messageChat[0].sender_id !== currentUser.id ? messageChat[0].sender_id : messageChat[0].reciever_id,
            messages: [...messageChat]
        })
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

                    <div className="col-lg-6 blog-main">

                        <div className="blog-post Poruke">
                            <p>Razgovori: {messages.length}</p>
                            <hr className="round" />
                            {
                                messages.map(messageChat => {
                                    return (
                                        <div className={getNewMessages(messageChat) ? 'message' : 'message opened'} onClick={() => { openMessages(messageChat); }} key={messageChat[0].sender_id !== currentUser.id ? messageChat[0].sender_id : messageChat[0].reciever_id}>
                                            <div className="message-text">
                                                <p className="chat-name">
                                                    {messageChat[0].sender_id !== currentUser.id ? findUsername(messageChat[0].sender_id) : findUsername(messageChat[0].reciever_id)}
                                                    {messageChat[0].sender_id === messageChat[0].reciever_id ? '[You]' : null}
                                                </p>
                                                {getNewMessages(messageChat) ?
                                                    <div className="num-new-messages">
                                                        {getNewMessages(messageChat)}
                                                    </div>
                                                    : null}
                                                <p className="last-text">
                                                    {findUsername(messageChat[0].sender_id)}: {messageChat[0].text}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                    {chat.other_id === null
                        ?
                        <div className="col-lg-6 blog-main">

                            <div className="blog-post NovaPoruka">
                                <p>Nova poruka</p>
                                <hr className="round" />
                                <Form acceptCharset="UTF-8" onSubmit={(e) => { e.preventDefault(); if (usernameError === '') { e.target.reset(); setSentText('Message sent'); } }}>
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
                                        <Form.Control as="textarea" rows={5} onChange={(e) => { setText(checkText(e.target.value)); document.getElementById('newMessageText').value = checkText(e.target.value); setSentText(''); }} />
                                    </Form.Group>
                                    <Form.Group className="justify-content-center">
                                        <button className="resendButton" type="submit" onClick={sendMessage} name="button">Send Message</button>
                                        <Form.Text className="greenText">{sentText}</Form.Text>
                                    </Form.Group>
                                </Form>
                            </div>

                        </div>
                        : <div className="col-lg-6 blog-main">

                            <div className="blog-post Chat">
                                <div>
                                    <p className="chat-name">{findUsername(chat.other_id)}</p>
                                    <hr className="round" />
                                </div>
                                <div className="message Chat-messages" >
                                    {
                                        chat.messages.map(message => {
                                            return (
                                                <div className="message-text" key={message.id}>
                                                    <p className="chat-name">
                                                        {findUsername(message.sender_id)}
                                                        {message.sender_id === currentUser.id ? '[You]' : null}
                                                    :
                                                </p>
                                                    <p>
                                                        {message.text}
                                                    </p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    }
                </div>
                {null/*
                <div className="row justify-content-center">

                <div className="col-lg-4 blog-main">

                    <div className="blog-post Poruke">
                        <p>Broj novih poruka: {messagesRecieved.length}</p>
                        <hr className="round" />
                        <button onClick={() => { deleteAllRecieved(currentUser.id) }}>Delete All</button>
                        {
                            messagesRecieved.map(message => {
                                return (
                                    <div className={message.opened ? 'message opened' : 'message'} key={message.id}>
                                        <p>From: {findUsername(message.sender_id)}
                                            <br />Date: {message.date.substr(8, 2) + '/' + message.date.substr(5, 2) + '/' + message.date.substr(0, 4)} at {message.time}</p>
                                        <div className="message-text">
                                            <p>
                                                {message.text}
                                            </p>
                                        </div>
                                        <button onClick={() => { replyFocus(findUsername(message.sender_id)) }}>Reply</button>
                                        <button onClick={() => { deleteMessage(message.id) }}>Delete</button>
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
                        <button onClick={() => { deleteAllSent(currentUser.id) }}>Delete All</button>
                        {
                            messagesSent.map(message => {
                                return (
                                    <div className='message' key={message.id}>
                                        <p>To: {findUsername(message.reciever_id)}
                                            <br />Date: {message.date.substr(8, 2) + '/' + message.date.substr(5, 2) + '/' + message.date.substr(0, 4)} at {message.time}</p>
                                        <div className="message-text">
                                            <p>
                                                {message.text}
                                            </p>
                                        </div>
                                        <button onClick={() => { deleteMessage(message.id) }}>Delete</button>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

            </div>

            */}

            </div>
        </div>
    );
}

export default Inbox;