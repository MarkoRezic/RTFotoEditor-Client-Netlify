import { useState, useContext } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';

const ConfirmPanel = () => {
    /* eslint-disable */
    const [userList, setUserList, currentUser, setCurrentUser, url] = useContext(AuthorityContext);
    /* eslint-enable */
    Axios.defaults.withCredentials = true;
    let id = currentUser.id;
    let email = currentUser.email;
    const [sent, setSent] = useState(false);

    function resendEmail() {
        Axios.post(url + '/confirmation/send', {
            id: id,
            email: email
        }).then(() => {
            setSent(true);
        });
    }

    return (
        <div className="blog-header no-border no-margin">
            <div className="container btrans no-padding">
                <h4 className="text-center text-white"><strong>Please confirm your email</strong></h4>
                <h6 className="text-center">
                    {sent ? <strong><br></br> Check your email</strong>
                        : <div>
                            <strong>Didn't recieve an email?</strong>
                            <button className="resendButton" onClick={resendEmail}>Resend email</button>
                        </div>}
                </h6>

            </div>
        </div>
    );
}

export default ConfirmPanel;