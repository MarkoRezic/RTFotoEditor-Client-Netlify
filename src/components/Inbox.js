import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { Form, InputGroup } from 'react-bootstrap';
import { AuthorityContext } from './AuthorityContext';
import { checkText } from 'smile2emoji';
import BootstrapIcon from '../svg icons/BootstrapIcon';

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
            /* Update every 60 secs
            window.setInterval(function () {
                Axios.get(url + '/messages/' + currentUser.id).then((response) => {
                    if (response.data.length !== messagesRecieved.length) {
                        updateMessages();
                        return;
                    }
                    for (var i = 0; i < response.data.length; i++) {
                        if (response.data[i].id !== messagesRecieved[i].id) {
                            updateMessages();
                            return;
                        }
                    }
                });
            }, 60000);
            */
        }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    useEffect(() => {
        setMessages([...mergeChunks(makeChunks(messagesRecieved, "sender_id"), makeChunks(removeSelfSent(messagesSent, messagesRecieved), "reciever_id"), "sender_id", "reciever_id")].sort(function (a, b) {
            return b[0]["id"] - a[0]["id"];
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messagesSent, messagesRecieved]);

    useEffect(() => {
        if (chat.other_id !== null) {
            setChat({
                other_id: null,
                messages: []
            })
            for (var i = 0; i < messages.length; i++) {
                if (((chat.messages[0].sender_id !== currentUser.id) && (chat.messages[0].sender_id === messages[i][0].sender_id))
                    || ((chat.messages[0].reciever_id !== currentUser.id) && (chat.messages[0].reciever_id === messages[i][0].reciever_id))
                    || ((chat.messages[0].sender_id === messages[i][0].sender_id) && (chat.messages[0].reciever_id === messages[i][0].reciever_id))) {
                    window.setTimeout(function () {
                        setChat({
                            other_id: messages[i][0].sender_id !== currentUser.id ? messages[i][0].sender_id : messages[i][0].reciever_id,
                            messages: [...messages[i]]
                        })
                    }, 100);
                    break;
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

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
            setMessagesRecieved([...response.data]);
        });
        Axios.get(url + '/messages-sent/' + currentUser.id).then((response) => {
            setMessagesSent([...response.data]);
        });
    }

    function sendMessage() {
        var currentChat = document.getElementById("currentChat");
        var copy_messages = [...chat.messages];
        if (currentChat) currentChat.scrollTop = currentChat.scrollHeight;

        var validUsername = 0;
        for (var i = 0; i < userList.length; i++) {
            if (username.toLowerCase() === userList[i].username.toLowerCase()) {
                validUsername = 1;
                break;
            }
        }
        if (validUsername === 1) {
            setUsernameError('');
            Axios.post(url + '/send-message', { sender_id: currentUser.id, reciever_id: findID(username), text: text }).then((response) => {
                console.log(response);
            });
        }
        else {
            setUsernameError('User not found');
        }
        Axios.put(url + '/open-messages', { data: { sender_id: chat.other_id, reciever_id: currentUser.id } }).then((response) => {
            window.setTimeout(function () {
                updateMessages();
            }, 100);
        });
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

    function removeSelfSent(original) {
        let removed_duplicate = [...original];
        removed_duplicate = removed_duplicate.filter(message => message.sender_id !== message.reciever_id);
        return removed_duplicate;
    }

    function makeChunks(array, property) {
        let chunked_array = [];
        let copied_array = [...array];
        let current_element;
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
        return chunked_array;
    }

    function mergeChunks(array1, array2, property1, property2) { //merge where array1's elements property1 === array2's elements property2
        let merged_array = [...array1];
        let copied_array = [...array2];
        let original_length = merged_array.length;
        let found;
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
        for (var i = 0; i < merged_array.length; i++) {
            merged_array[i] = [...merged_array[i].sort(function (a, b) {
                return b["id"] - a["id"];
            })]
        }
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
        var currentChat = document.getElementById("currentChat");
        if (currentChat) currentChat.scrollTop = currentChat.scrollHeight;
        Axios.put(url + '/open-messages', { data: { sender_id: messageChat[0].sender_id !== currentUser.id ? messageChat[0].sender_id : messageChat[0].reciever_id, reciever_id: currentUser.id } }).then((response) => {
            window.setTimeout(function () {
                updateMessages();
                setUsername(findUsername(messageChat[0].sender_id !== currentUser.id ? messageChat[0].sender_id : messageChat[0].reciever_id));
                setChat({
                    other_id: messageChat[0].sender_id !== currentUser.id ? messageChat[0].sender_id : messageChat[0].reciever_id,
                    messages: [...messageChat]
                })

                window.setTimeout(function () {
                    document.getElementById('sendMessageInputID').focus();
                }, 100);
            }, 100);
        });
    }

    function newMessage() {
        setUsername('');
        setChat({
            other_id: null,
            messages: []
        });
        window.setTimeout(function () {
            document.getElementById('newMessageUsername').focus();
        }, 100);
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
                            <p className="chat-name">Razgovori: {messages.length}</p>
                            <button className="sendButton newSend" onClick={newMessage} name="button"><BootstrapIcon type={20} />+</button>
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
                                <Form acceptCharset="UTF-8" onSubmit={(e) => { e.preventDefault(); if (usernameError === '') { e.target.reset(); if (username !== '') setSentText('Message sent'); setUsername(''); setText(''); } }}>
                                    <Form.Group controlId="newMessageUsername">
                                        <Form.Label srOnly>Prima:</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>Prima: </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control autoComplete="off" type="username" onChange={(e) => { setUsername(e.target.value); setSentText(''); }} placeholder="Enter username" />
                                        </InputGroup>
                                        <Form.Text className="errorText">{usernameError}</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="newMessageText">
                                        <Form.Label>Text</Form.Label>
                                        <Form.Control autoComplete="off" as="textarea" rows={5} onChange={(e) => { setText(checkText(e.target.value)); document.getElementById('newMessageText').value = checkText(e.target.value); setSentText(''); }} />
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
                                <div className="message Chat-messages" id="currentChat">
                                    {
                                        chat.messages.map(message => {
                                            return (
                                                <div className="message-text" key={message.id}>
                                                    <p className="chat-name">
                                                        {findUsername(message.sender_id)}
                                                        {message.sender_id === currentUser.id ? '[You]' : null}
                                                    :
                                                </p>
                                                    <p className="timestamp">{(message.opened && message.reciever_id !== currentUser.id) ? <BootstrapIcon type={16} /> : null} {message.date.substr(8, 2) + '/' + message.date.substr(5, 2) + '/' + message.date.substr(0, 4)} {message.time}</p>
                                                    <p>
                                                        {message.text}
                                                    </p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <Form onSubmit={(e) => { e.preventDefault(); e.target.reset(); setText(''); }}>
                                    <Form.Group controlId="sendMessageInputID" className="sendMessageGroup">
                                        <Form.Label srOnly>Message</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control autoComplete="off" className="sendMessageInput" type="text" onChange={(e) => { setText(checkText(e.target.value)); document.getElementById('sendMessageInputID').value = checkText(e.target.value) }} placeholder="Nova poruka..." />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="sendButtonGroup">
                                        <button className="sendButton" type="submit" onClick={sendMessage} name="button"><BootstrapIcon type={20} /></button>
                                    </Form.Group>
                                </Form>
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