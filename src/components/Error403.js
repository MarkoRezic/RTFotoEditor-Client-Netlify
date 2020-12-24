import { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthorityContext } from './AuthorityContext';

const Error403 = (props) => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    if(props.path === '/'){
        props.history.push('/home');
        window.location.reload();

        return (
            <div className="d-flex justify-content-center">
                <div>
                    <p>Redirecting to home page</p>
                </div>
            </div>
        );
    }
    else if (loginStatus) {
        setTimeout(() => {
            props.history.push('/home');
            window.location.reload();
        }, 3000);

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

    else {
        setTimeout(() => {
            props.history.push('/login');
            window.location.reload();
        }, 3000);

        return (
            <div className="d-flex justify-content-center">
                <div>
                    <h1>Error 403</h1>
                    <p>You do not have access to that page.</p>
                    <p>Redirecting to login page in {counter}...</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Error403);