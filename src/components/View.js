import AdminView from "../views/AdminView";
import {UserView, AdminView, SuperAdminView, GuestView} from '../views';

const View = (props) => {
    if (props) {
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