import { useContext, useState, useEffect } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { NavLink, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Axios from 'axios';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import Contact from './Contact';
import Editor from './Editor';
import Home from './Home';
import Login from './Login';
import Profil from './Profil';
import Register from './Register';
import Users from './Users';
import View from './View';
import { AuthorityContext } from './AuthorityContext';
import Error403 from './Error403';
import ConfirmPanel from './ConfirmPanel';
import Postavke from './Postavke';

const Navbar = () => {
    // eslint-disable-next-line
    const [{ loginStatus, authority }, setAuthority, userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [legalRoute, setLegalRoute] = useState(true);
    let loginStatus = loginStatus;
    let authority = authority;

    useEffect(() => {
        Axios.post(url + '/loginStatus').then((response) => {
            checkLegalRoute(response).then(function (message) {
                console.log(message);
            })
        })
        window.onpopstate = function (event) {
            window.location.reload();
            Axios.get(url + '/loginStatus').then((response) => {
                checkLegalRoute(response).then(function (message) {
                    console.log(message);
                })
            })
        }
        // eslint-disable-next-line
    }, []);

    function Authorize(loginStatus, authority) {
        setAuthority({ loginStatus: loginStatus, authority: authority });
    }

    //The set of functions that I want to call in order
    function checkLoginStatus(response) {
        if (response.data.loggedIn) {
            let userMatch = response.data;
            setCurrentUser(userMatch);
            console.log('user already logged in ' + response.data.loggedIn);
            window.scrollTo(0, 0);
            Authorize(true, userMatch.authority);
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
        if (loginStatus) {
            console.log('user is logged in');
            switch (authority) {
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
        console.log(authority);
        return new Promise(function (resolve, reject) {
            resolve(legalRouteList)
        })
    }

    function setRealValues(legalRouteList) {
        let flag = true;
        for (var i = 0; i < legalRouteList.length; i++) {
            if (window.location.pathname === legalRouteList[i]) {
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
        let message = 'no redirect necessary';
        if (flag) {
            setLegalRoute(false);
            console.log('route is illegal');
            message = 'redirecting';
        }
        return new Promise(function (resolve, reject) {
            resolve(message);
        })
    }


    function checkLegalRoute(response) {
        return checkLoginStatus(response)
            .then(initialSet)
            .then(setRealValues)
            .then(validate)
    }

    function redirectReload(redirectPath) {
        window.history.pushState({}, '', redirectPath);
        return new Promise(function (resolve, reject) {
            resolve();
        })
    }


    function logout() {
        Axios.get(url + '/logout').then((response) => {
            setCurrentUser(response.data);
            Authorize(false, 'guest');
            setLegalRoute(true);
            redirectReload('/login').then((response) => {
                window.location.reload();
            });
        })
    }

    return (
        <BrowserRouter>
            <div className="blog-masthead break">
                <div className="container break">
                    <Nav className="d-flex justify-content-center row">

                        <View authority={authority} />
                        {loginStatus
                            ? <Dropdown className="dropdown open">
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

                            : null
                        }

                    </Nav>
                </div>
            </div>

            {legalRoute
                ? <div>
                    {(currentUser.verified === 'no') ? <ConfirmPanel /> : ''}
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/editor' component={Editor}></Route>
                        <Route path='/users' component={Users}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/contact' component={Contact}></Route>
                        <Route path='/profil' component={Profil}></Route>
                        <Route path='/postavke' component={Postavke}></Route>
                    </Switch>
                </div>
                : <Error403 path={window.location.pathname} />}
            {loginStatus && (window.location.pathname === '/login' || window.location.pathname === '/register') ? <Redirect to='/home' /> : null}

        </BrowserRouter>
    );
}

export default Navbar;