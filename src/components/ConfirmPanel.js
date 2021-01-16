import Axios from 'axios';

const ConfirmPanel = () => {
    
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    let id = currentUser.id;
    let email = currentUser.email;
    let sent = false;

    function resendEmail(){
        Axios.post(url + '/confirmation/send', {
            id: id,
            email: email
        }).then(() => {
            sent = true;
        });
    }

    return (
        <div className="blog-header no-border no-margin">
            <div className="container btrans no-padding">
                <h4 className="text-center text-white"><strong>Please confirm your email</strong></h4>
                <h6 className="text-center">
                    <strong>Didn't recieve an email?</strong>
                    <button className="resendButton" onClick={resendEmail}>Resend email</button>
                    {sent ? <strong>Check your email</strong> : <strong></strong>}
                </h6>

            </div>
        </div>
    );
}

export default ConfirmPanel;