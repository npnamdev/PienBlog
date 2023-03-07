import avatar from '../../assets/images/avatar.jpg';
import { BiMenu, BiSearch, BiBell, BiMessageAltDetail, BiUser, BiEdit, BiHelpCircle, BiCog } from "react-icons/bi";
import { useState, useEffect, useRef } from 'react';


const Header = (props) => {
    const { setToggleNavbar, toggleNavbar } = props;

    const profileRef = useRef(null);
    const [toggleProfile, setToggleProfile] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setToggleProfile(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [profileRef]);


    return (
        <>
            <div id="header">
                <BiMenu
                    className='menu-icon'
                    onClick={() => { setToggleNavbar(!toggleNavbar) }}
                />
                {/* <div class="search">
                    <BiSearch
                        className='search-icon'
                    />
                    <input class="search-input" type="text" placeholder="Search here..." />
                </div> */}
                <div class="profile">
                    <div class="box-left">
                        <BiBell
                            className="info-icon"
                        />
                        <BiMessageAltDetail
                            className="info-icon"
                        />
                    </div>
                    <div
                        class="box-right user-info "
                        onClick={() => setToggleProfile(!toggleProfile)}
                        ref={profileRef}
                    >
                        <img src={avatar} />
                        <span>haiyen</span>
                    </div>

                    <ul
                        className={toggleProfile ? "profile-setting active" : "profile-setting"}
                    >
                        <li>
                            <a href="">
                                <BiUser
                                    className='icon'
                                />
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BiEdit
                                    className='icon'
                                />
                                <span>Edit Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BiHelpCircle
                                    className='icon'
                                />
                                <span>Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BiCog
                                    className='icon'
                                />
                                <span>Setting</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Header;