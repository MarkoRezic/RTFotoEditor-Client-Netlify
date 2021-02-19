import { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthorityContext } from './AuthorityContext';

const Error403 = (props) => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        if (counter <= 0) {
            props.history.push(currentUser.loggedIn ? '/home' : '/login');
            window.location.reload();
        }
    }, [counter]);
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1>Error 403</h1>
                <p>You do not have access to that page.</p>
                <p>Redirecting to home page in {counter}...</p>
            </div>
        </div>
    );
}

export default withRouter(Error403);