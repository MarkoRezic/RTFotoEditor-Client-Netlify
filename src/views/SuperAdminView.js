import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import BootstrapIcon from '../svg icons/BootstrapIcon';

const SuperAdminView = () => {
    console.log("super-admin view");
    return <Nav>
        <NavLink activeClassName="active" className="nav-link" to="/home"><BootstrapIcon type={0} /> Home</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/editor"><BootstrapIcon type={1} /> Foto Editor</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/users"><BootstrapIcon type={6} /> Users</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/users"><BootstrapIcon type={6} /> Admins</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/contact"><BootstrapIcon type={4} /> Contact</NavLink>
    </Nav>
}

export default SuperAdminView;