import { useContext, useState, useEffect } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { NavLink, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Axios from 'axios';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import Inbox from './Inbox';
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
import Posts from './Posts';
import Post from './Post';

const Navbar = () => {
    // eslint-disable-next-line
    const [userList, setUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';

    const [legalRoute, setLegalRoute] = useState(true);

    useEffect(() => {
        if (currentUser.loaded) {
            checkLegalRoute().then(function (message) {
                console.log(message);
            })
        }
        // eslint-disable-next-line
    }, [currentUser]);

    //The set of functions that I want to call in order
    function initialSet() {
        var legalRouteList = [];
        if (currentUser.loggedIn) {
            switch (currentUser.authority) {
                case 'user':
                    legalRouteList = ['/home', '/posts', '/editor', '/login', '/register', '/inbox', '/profil', '/postavke'];
                    break;
                case 'admin':
                    legalRouteList = ['/home', '/posts', '/editor', '/login', '/register', '/inbox', '/profil', '/postavke', '/users'];
                    break;
                case 'super-admin':
                    legalRouteList = ['/home', '/posts', '/editor', '/login', '/register', '/inbox', '/profil', '/postavke', '/users', '/database'];
                    break;
                default:
                    legalRouteList = ['/home', '/editor', '/login', '/register'];
                    break;
            }

        }
        else {
            legalRouteList = ['/home', '/editor', '/login', '/register'];
        }
        return new Promise(function (resolve, reject) {
            resolve(legalRouteList)
        })
    }

    function setRealValues(legalRouteList) {
        var flag = true;
        for (var i = 0; i < legalRouteList.length; i++) {
            if (window.location.pathname === legalRouteList[i] || window.location.pathname.startsWith('/posts/')) {
                flag = false;
                setLegalRoute(true);
                return new Promise(function (resolve, reject) {
                    resolve(flag)
                })
            }
        }
        return new Promise(function (resolve, reject) {
            resolve(flag)
        })
    }

    function validate(flag) {
        var message = 'no redirect';
        if (flag) {
            setLegalRoute(false);
            message = 'redirecting';
        }
        return new Promise(function (resolve, reject) {
            resolve(message);
        })
    }


    function checkLegalRoute() {
        return initialSet()
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
            redirectReload('/login').then((response) => {
                //window.location.reload();
            });
            setLegalRoute(true);
            setCurrentUser(response.data);
        })
    }

    return (
        <BrowserRouter>
            <div className="blog-masthead break">
                <div className="container break">
                    <Nav className="d-flex justify-content-center row">

                        <View authority={currentUser.authority} />
                        {currentUser.loggedIn
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
            <div>
                {window.location.pathname === '/' ? <Redirect to='/home' /> : null}
                {legalRoute
                    ? <div>
                        {(currentUser.verified === 'no') ? <ConfirmPanel /> : ''}
                        <Switch>
                            <Route path='/home' component={Home}></Route>
                            <Route exact path='/posts' component={Posts}></Route>
                            <Route path='/posts/:id' render={(props) => <Post {...props} />}></Route>
                            <Route path='/editor' component={Editor}></Route>
                            <Route path='/users' component={Users}></Route>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/register' component={Register}></Route>
                            <Route path='/inbox' component={Inbox}></Route>
                            <Route path='/profil' component={Profil}></Route>
                            <Route path='/postavke' component={Postavke}></Route>
                        </Switch>
                    </div>
                    : <Error403 path={window.location.pathname} />}
                {currentUser.loggedIn && (window.location.pathname === '/login' || window.location.pathname === '/register') ? <Redirect to='/home' /> : null}
            </div>
        </BrowserRouter>
    );
}

export default Navbar;