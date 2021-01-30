import { NavLink } from 'react-router-dom';

const GuestView = () => {
    return <div>
        <NavLink activeClassName="active" className="nav-link" to="/home"><BootstrapIcon type={0} /> Home</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/editor"><BootstrapIcon type={1} /> Foto Editor</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/login"><BootstrapIcon type={2} /> Login</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/register"><BootstrapIcon type={3} /> Register</NavLink>
    </div>
}

export default GuestView;