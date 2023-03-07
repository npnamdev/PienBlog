import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

import './scss/Admin.scss';
import './scss/Dashboard.scss';
import './scss/User.scss';
import './scss/Post.scss';
import { useState, useEffect } from 'react';

const Admin = (props) => {

    const [toggleNavbar, setToggleNavbar] = useState(() => {
        const storedNavbar = localStorage.getItem('toggleNavbar');
        return storedNavbar !== null ? storedNavbar === 'true' : "false";
    });


    useEffect(() => {
        localStorage.setItem('toggleNavbar', toggleNavbar);
    }, [toggleNavbar]);





    return (
        <div id='wrapper'>
            <Sidebar
                toggleNavbar={toggleNavbar}
            />
            <div id='wp-content'>
                <Header
                    setToggleNavbar={setToggleNavbar}
                    toggleNavbar={toggleNavbar}
                />
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;