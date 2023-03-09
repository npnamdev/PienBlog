import { BiMenu, BiLogOut, BiBell, BiMessageAltDetail, BiUser, BiEdit, BiHelpCircle, BiCog } from "react-icons/bi";
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../redux/slices/authSlice";
import { doLogout } from "../../services/apiService";


const Header = (props) => {
    const { setToggleNavbar, toggleNavbar } = props;

    const account = useSelector((state) => state.auth.account);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = async () => {
        let data = await doLogout(account.refreshToken);
        if (data.errCode === 0) {
            dispatch(logout());
            navigate('/login');
        }
    }

    //Profile
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
                        <img src={account.image} />
                        <span>{account.username}</span>
                    </div>

                    <ul
                        className={toggleProfile ? "profile-setting active" : "profile-setting"}
                    >
                        <li>
                            <a href="#">
                                <BiUser
                                    className='icon'
                                />
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BiHelpCircle
                                    className='icon'
                                />
                                <span>Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BiCog
                                    className='icon'
                                />
                                <span>Setting</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleLogout()}>
                                <BiLogOut
                                    className='icon'
                                />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;