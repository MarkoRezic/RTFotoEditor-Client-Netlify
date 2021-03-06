import { useContext, useState, useEffect } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { NavLink, HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Axios from 'axios';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import Inbox from './Inbox';
import Editor from './Editor';
import Home from './Home';
import Login from './Login';
import Profil from './Profil';
import PROFIL_ID from './Profil_ID';
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
    const [userList, setUserList, currentUser, setCurrentUser, url] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;

    const [legalRoute, setLegalRoute] = useState(true);

    useEffect(() => {
        if (currentUser.loaded) {
            checkLegalRoute().then(function (message) {
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
                    legalRouteList = ['home', 'posts', 'editor', 'login', 'register', 'inbox', 'profil', 'postavke'];
                    break;
                case 'admin':
                    legalRouteList = ['home', 'posts', 'editor', 'login', 'register', 'inbox', 'profil', 'postavke', 'users'];
                    break;
                case 'super-admin':
                    legalRouteList = ['home', 'posts', 'editor', 'login', 'register', 'inbox', 'profil', 'postavke', 'users', 'database'];
                    break;
                default:
                    legalRouteList = ['home', 'editor', 'login', 'register'];
                    break;
            }

        }
        else {
            legalRouteList = ['home', 'editor', 'login', 'register'];
        }
        return new Promise(function (resolve, reject) {
            resolve(legalRouteList)
        })
    }

    function setRealValues(legalRouteList) {
        var flag = true;
        for (var i = 0; i < legalRouteList.length; i++) {
            if (window.location.hash === '#/'+legalRouteList[i]
                 || (window.location.hash.startsWith('#/posts/') && currentUser.loggedIn)
                 || (window.location.hash.startsWith('#/profil/') && currentUser.loggedIn)
                 || (window.location.hash.startsWith('#/inbox/') && currentUser.loggedIn)) {
                flag = false;
                setLegalRoute(true);
                //eslint-disable-next-line 
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


    function logout() {
        Axios.get(url + '/logout').then((response) => {
            setLegalRoute(true);
            return new Promise(function (resolve, reject) {
                resolve(response.data);
            })
        }).then((res)=>{
            
            window.location.reload();
        });
    }

    return (
        <HashRouter basename="">
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
                {window.location.hash === '#/' ? <Redirect to='home' /> : null}
                {legalRoute
                    ? <div>
                        {(currentUser.verified === 'no') ? <ConfirmPanel /> : ''}
                        <Switch>
                            <Route path='/home' component={Home}></Route>
                            <Route exact path='/posts' component={Posts}></Route>
                            <Route path='/posts/:id' render={(props) => <Post {...props} />}></Route>
                            <Route path='/editor' component={Editor}></Route>
                            <Route path='/users' render={(props) => <Users {...props} />}></Route>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/register' component={Register}></Route>
                            <Route exact path='/inbox' component={Inbox}></Route>
                            <Route path='/inbox/:displayname' render={(props) => <Inbox {...props} />}></Route>
                            <Route exact path='/profil' component={Profil}></Route>
                            <Route path='/profil/:id' render={(props) => <PROFIL_ID {...props} />}></Route>
                            <Route path='/postavke' component={Postavke}></Route>
                        </Switch>
                    </div>
                    : <Error403 path={window.location.hash} />}
                {currentUser.loggedIn && (window.location.hash === '#/login' || window.location.hash === '#/register') ? <Redirect to='home' /> : null}
            </div>
        </HashRouter>
    );
}

export default Navbar;