import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import BootstrapIcon from '../svg icons/BootstrapIcon';

const GuestView = () => {
    return <Nav className="d-flex justify-content-center row">
        <NavLink activeClassName="active" className="nav-link" to="/home"><BootstrapIcon type={0} /> Home</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/editor"><BootstrapIcon type={1} /> Foto Editor</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/login"><BootstrapIcon type={2} /> Login</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/register"><BootstrapIcon type={3} /> Register</NavLink>
    </Nav>
}

export default GuestView;