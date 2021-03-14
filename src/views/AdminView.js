import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import Axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { AuthorityContext } from '../components/AuthorityContext';

const AdminView = () => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser, url] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    const [messagesRecieved, setMessagesRecieved] = useState([]);

    useEffect(() => {
        Axios.get(url + '/messages/' + currentUser.id).then((response) => {
            setMessagesRecieved([...response.data]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    function getNewMessages() {
        let num = 0;
        for (var i = 0; i < messagesRecieved.length; i++) {
            if (messagesRecieved[i].sender_id !== currentUser.id && !messagesRecieved[i].opened) num++;
        }
        return num;
    }

    return <Nav className="d-flex justify-content-center">
        <NavLink activeClassName="active" className="nav-link" to="/home"><BootstrapIcon type={0} /> Home</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/posts"><BootstrapIcon type={21} /> Posts</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/editor"><BootstrapIcon type={1} /> Foto Editor</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/users"><BootstrapIcon type={88} /> Users</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/inbox"><BootstrapIcon type={4} /> Inbox
        {getNewMessages() ?
                <div className="num-new-messages small-num">
                    {getNewMessages()}
                </div>
                : null}
        </NavLink>
    </Nav>
}

export default AdminView;