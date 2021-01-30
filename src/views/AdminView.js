import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AdminView = () => {
    return <div>
        <NavLink activeClassName="active" className="nav-link" to="/home"><BootstrapIcon type={0} /> Home</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/editor"><BootstrapIcon type={1} /> Foto Editor</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/users"><BootstrapIcon type={6} /> Users</NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/contact"><BootstrapIcon type={4} /> Contact</NavLink>

        <Dropdown className="dropdown open">
            <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <BootstrapIcon type={5} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                <NavLink className="item-link dropdown-item" to="/profil"><BootstrapIcon type={6} /> Profil</NavLink>

                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                <NavLink to="/postavke" className="item-link dropdown-item"><BootstrapIcon type={7} /> Postavke</NavLink>

                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                <NavLink to="/login" onClick={logout} className="item-link dropdown-item"><BootstrapIcon type={8} /> Log Out</NavLink>

            </Dropdown.Menu>
        </Dropdown>
    </div>
}

export default AdminView;