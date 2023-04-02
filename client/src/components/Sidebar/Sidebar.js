import React from 'react';
import store from '../../store/index';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends React.Component {

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    bgImage = () => {
        if(store.getState().user.avatar && store.getState().user.avatar.url) {
            return `url(${store.getState().user.avatar.url})`;
            
        } else {
            return `url(https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg)`;
        }
    }
     /*Admin
                        <NavLink to="/dashboard"><div className="route">Dashboard</div></NavLink>
                        <NavLink to="/account"><div className="route">Account</div></NavLink>
                        <NavLink to="/create-quiz"><div className="route">Create Test</div></NavLink>
                        <NavLink to="/community-quizzes"><div className="route">Tests</div></NavLink>
                        <NavLink to="/"><div className="route">Logout</div></NavLink>
    */
     /*User
                        <NavLink to="/dashboard"><div className="route">Dashboard</div></NavLink>
                        <NavLink to="/account"><div className="route">Account</div></NavLink>
                        <NavLink to="/create-quiz"><div className="route">Create Test</div></NavLink>
                        <NavLink to="/community-quizzes"><div className="route">Tests</div></NavLink>
                        <NavLink to="/"><div className="route">Logout</div></NavLink>
    */

    render() {
        if (store.getState().user) {
            return (
                <div className="sidebar-wrapper">
                    <div className="header">Crack It</div>
    
                    <div className="user">
                        <div className="avatar" style={{backgroundImage: this.bgImage()}}></div>
                        <div className="name">{store.getState().user.firstName + ' ' + store.getState().user.lastName}</div>
                    </div>

                    <div className="routes">
                        <NavLink to="/dashboard"><div className="route">Dashboard</div></NavLink>
                        <NavLink to="/account"><div className="route">Account</div></NavLink>
                        <NavLink to="/create-quiz"><div className="route">Create Test</div></NavLink>
                        <NavLink to="/community-quizzes"><div className="route">Tests</div></NavLink>
                        <NavLink to="/"><div className="route">Logout</div></NavLink>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading</div>
            )
        }
    }
}