import { useContext, useState, useEffect } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { NavLink, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Axios from 'axios';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import Contact from './Contact';
import Editor from './Editor';
import Home from './Home';
import Login from './Login';
import Profil from './Profil';
import Register from './Register';
import { AuthorityContext } from './AuthorityContext';
import Error403 from './Error403';

const Navbar = () => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;

    const [legalRoute, setLegalRoute] = useState(true);
    let location = window.location.pathname;
    let local_loginStatus = loginStatus;
    let local_authority = authority;

    useEffect(() => {
        Axios.get('https://rt-foto-editor.herokuapp.com/loginStatus').then((response) => {
            checkLegalRoute(response).then(function (message) {
                console.log(message);
            })
        })
        window.onpopstate = function (event) {
            window.location.reload();
            Axios.get('https://rt-foto-editor.herokuapp.com/loginStatus').then((response) => {
                checkLegalRoute(response).then(function (message) {
                    console.log(message);
                })
            })
        }
        // eslint-disable-next-line
    }, []);

    function Authorize(loginStatus, authority) {
        setAuthority({ loginStatus: loginStatus, authority: authority });
        local_loginStatus = loginStatus;
        local_authority = authority;
    }

    //The set of functions that I want to call in order
    function checkLoginStatus(response) {
        if (response.data.loggedIn) {
            let userMatch = response.data;
            console.log('user already logged in ' + response.data.loggedIn);
            window.scrollTo(0, 0);
            Authorize(true, userMatch.authority);
            setCurrentUser(userMatch);
        }
        else {
            Authorize(false, 'guest');
        }
        return new Promise(function (resolve, reject) {
            resolve()
        })
    }

    function initialSet() {
        let legalRouteList = [];
        console.log('checking route');
        if (local_loginStatus) {
            console.log('user is logged in');
            switch (local_authority) {
                case 'user':
                    legalRouteList = ['/home', '/editor', '/login', '/register', '/contact', '/profil', '/postavke'];
                    break;
                case 'admin':
                    legalRouteList = ['/home', '/editor', '/login', '/register', '/contact', '/profil', '/postavke', '/users'];
                    break;
                case 'super-admin':
                    legalRouteList = ['/home', '/editor', '/login', '/register', '/contact', '/profil', '/postavke', '/users', '/database'];
                    break;
                default:
                    legalRouteList = ['/home', '/editor', '/login', '/register'];
                    Authorize(false, 'guest');
                    setLegalRoute(false);
                    break;
            }

        }
        else {
            legalRouteList = ['/home', '/editor', '/login', '/register'];
        }
        console.log(local_authority);
        return new Promise(function (resolve, reject) {
            resolve(legalRouteList)
        })
    }

    function setRealValues(legalRouteList) {
        let flag = true;
        for (var i = 0; i < legalRouteList.length; i++) {
            if (location === legalRouteList[i]) {
                flag = false;
                setLegalRoute(true);
                console.log('route is legal');

            }
        }
        return new Promise(function (resolve, reject) {
            resolve(flag)
        })
    }

    function validate(flag) {
        if (flag) {
            setLegalRoute(false);
            console.log('route is illegal');
        }
        return new Promise(function (resolve, reject) {
            resolve();
        })
    }


    function checkLegalRoute(response) {
        return checkLoginStatus(response)
            .then(initialSet)
            .then(setRealValues)
            .then(validate)
    }


    function logout() {
        Axios.get('https://rt-foto-editor.herokuapp.com/logout').then((response) => {
            setCurrentUser(response.data);
            Authorize(false, 'guest');
            setLegalRoute(true);
            window.history.pushState({}, '', '/login');
            window.location.reload();
        })
    }

    return (
        <BrowserRouter>
            <div className="blog-masthead break">
                <div className="container break">
                    <Nav className="d-flex justify-content-center row">

                        <NavLink activeClassName="active" className="nav-link" to="/home"><BootstrapIcon type={0} /> Home</NavLink>

                        <NavLink activeClassName="active" className="nav-link" to="/editor"><BootstrapIcon type={1} /> Foto Editor</NavLink>

                        {local_loginStatus ? null : <NavLink activeClassName="active" className="nav-link" to="/login"><BootstrapIcon type={2} /> Login</NavLink>}

                        {local_loginStatus ? null : <NavLink activeClassName="active" className="nav-link" to="/register"><BootstrapIcon type={3} /> Register</NavLink>}

                        {local_loginStatus ? <NavLink activeClassName="active" className="nav-link" to="/contact"><BootstrapIcon type={4} /> Contact</NavLink> : null}

                        {local_loginStatus ? <Dropdown className="dropdown open">
                            <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <BootstrapIcon type={5} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                <NavLink className="item-link dropdown-item" to="/profil"><BootstrapIcon type={6} /> Profil</NavLink>

                                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                                <NavLink to="#" className="item-link dropdown-item"><BootstrapIcon type={7} /> Postavke</NavLink>

                                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                                <NavLink to="/login" onClick={logout} className="item-link dropdown-item"><BootstrapIcon type={8} /> Log Out</NavLink>

                            </Dropdown.Menu>
                        </Dropdown>
                            : null}
                    </Nav>
                </div>
            </div>

            {legalRoute
                ? <div>
                    <Route exact path='/home' component={Home}></Route>
                    <Route exact path='/editor' component={Editor}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                    <Route exact path='/profil' component={Profil}></Route>
                </div>
                : <Error403 path={window.location.pathname} />}
            {local_loginStatus && (window.location.pathname === '/login' || window.location.pathname === '/register') ? <Redirect to='/home' /> : null}

        </BrowserRouter>
    );
}

export default Navbar;