import logo_icon from '../../assets/images/logo.png';
import logo_text from '../../assets/images/text.png';
import { BiUser, BiCategory, BiBookOpen, BiBarChartAlt2, BiLogOut, BiCog } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Sidebar = (props) => {
    const { toggleNavbar } = props;
    const [activeTab, setActiveTab] = useState(() => {
        const storedTab = localStorage.getItem('activeTab');
        return storedTab !== null ? storedTab : "dashboard";
    });

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);


    return (
        <>
            <nav id="sidebar" className={toggleNavbar ? "close" : ""}>
                <div className="logo">
                    <NavLink
                        to="/admin"
                        className="logo-icon"
                    >
                        <img src={logo_icon} />
                    </NavLink>
                    <NavLink
                        to="/admin"
                        className="logo-text"
                    >
                        <img src={logo_text} />
                    </NavLink>
                </div>
                <ul className="menu">
                    <li>
                        <NavLink
                            to="/admin"
                            onClick={() => setActiveTab('dashboard')}
                            className={activeTab === 'dashboard' ? 'activee' : ''}
                        >
                            <BiCategory
                                className='icon'
                            />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/post"
                            onClick={() => setActiveTab('post')}
                            className={activeTab === 'post' ? 'activee' : ''}
                        >
                            <BiBookOpen
                                className='icon'
                            />
                            <span>Post</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/product"
                            onClick={() => setActiveTab('product')}
                            className={activeTab === 'product' ? 'activee' : ''}
                        >
                            <BiBarChartAlt2
                                className='icon'
                            />
                            <span>Product</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/user"
                            onClick={() => setActiveTab('user')}
                            className={activeTab === 'user' ? 'activee' : ''}
                        >
                            <BiUser
                                className='icon'
                            />
                            <span>User</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className="mode">
                    <li>
                        <NavLink to="/admin/logout" >
                            <BiLogOut
                                className='icon'
                            />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/setting" >
                            <BiCog
                                className='icon'
                            />
                            <span>Setting</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;