import UserView from '../views/UserView';
import AdminView from '../views/AdminView';
import SuperAdminView from '../views/SuperAdminView';
import GuestView from '../views/GuestView';

const View = (props) => {
    if (props) {
        console.log("props exists, authority: " + props.authority);
        switch (props.authority) {
            case "user":
                return <UserView />
            case "admin":
                return <AdminView />
            case "super-admin":
                return <SuperAdminView />
            default:
                return <GuestView />
        }
    }
    else return null;
}

export default View;