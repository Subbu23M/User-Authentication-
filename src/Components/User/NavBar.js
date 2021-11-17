import React,{useEffect} from 'react';

import HeaderTags from '../../HTML-Elements/HeaderTags';

import {Link,Route,withRouter} from 'react-router-dom';

import Home from '../User/Home';

import Register from '../User/Register';

import Login from '../User/Login';

import Account from '../User/Account';

import MyNotes from '../Notes/MyNotes';

import {useSelector,useDispatch} from 'react-redux';

import { getuserDetails, setUserInfo } from '../../actions/registerAction';

function NavBar(props) {

    const dispatch = useDispatch();

    // To check whether user is logged in or not.
    const fetchData = function(){
        // Get 'JWT_Token'
        const token = localStorage.getItem('JWT_Token');

        if(token){
            // Dispatch action
            dispatch(getuserDetails(token))
        }
    }

    // Invoke useEffect hook
    useEffect(fetchData,[]);

    // Read state within the component
    const store = useSelector(function(state){
        return state.user.data
    })

    // Event Handler as callback function
    const handleLogOut = function(e){
        // remove token from localStorage
        localStorage.removeItem('JWT_TOKEN');

        alert('you are logged out successfully');

        // Dispatch action to store
        dispatch(setUserInfo({}));

        // redirect user to home page
        props.history.push('/');
    }
    
    return (
        <>

            <HeaderTags
                Tag = 'h2'
                className = 'text-secondary text-capitalize display-4'
                text = 'user auth'
            />

            <nav>

                <ul className='list-group'>

                    <li className='list-group-item'>

                        <Link to='/'>
                            Home 
                        </Link>
                        
                    </li>

                    {/* Conditional Rendering - Ternary Operator */}
                    {
                        Object.keys(store).length > 0 ? (
                            <> 
                                <li className='list-group-item'>

                                    <Link to='/account'>
                                        Account 
                                    </Link>

                                </li>

                                <li className='list-group-item'>

                                    <Link to='/mynotes'>
                                        My Notes 
                                    </Link>

                                </li>

                                <li className='list-group-item'>

                                    <Link to='/logout' onClick={handleLogOut}>
                                        Logout 
                                    </Link>

                                </li>
                            </>    

                        ) : <>

                                <li className='list-group-item'>

                                    <Link to='/register'>
                                        Register 
                                    </Link>

                                </li>

                                <li className='list-group-item'>

                                    <Link to='/login'>
                                        Login 
                                    </Link>

                                </li>

                            </>
                    }
                    
                </ul>

            </nav>

            <Route
                path='/'
                component={Home}
                exact
            />

            <Route
                path='/register'
                component={Register}
                exact
            />
            
            <Route
                path='/login'
                exact
                component={Login}
            />

            <Route
                path='/mynotes'
                component={MyNotes}
                exact
            />

            <Route
                path='/account'
                component={Account}
                exact
            />
            
        </>
    )
}

export default withRouter(NavBar);