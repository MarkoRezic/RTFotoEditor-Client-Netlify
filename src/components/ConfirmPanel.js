

const ConfirmPanel = () => {
    return (
        <div className="blog-header no-border no-margin">
            <div className="container btrans no-padding">
                <h4 className="text-center text-white"><strong>Please confirm your email</strong></h4>
                <h6 className="text-center">
                    <strong>Didn't recieve an email?</strong>
                    <button className="resendButton">Resend email</button>
                </h6>

            </div>
        </div>
    );
}

export default ConfirmPanel;