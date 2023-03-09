import { useState } from 'react';
import { postLogin } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { login } from '../../redux/slices/authSlice';

import './scss/Login.scss';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const handleLogin = async () => {
        const data = await postLogin(email, password);
        dispatch(login(data));



        if (data.errCode === -1) {
            toast.error(data.errMsg);
        }

        if (data.errCode === 0) {
            toast.success(data.errMsg);
            navigate('/admin');
        }

    };

    const handleKeyDown = (e) => {
        if (e && e.key === "Enter") {
            handleLogin();
        }
    }


    return (
        <div className='wp-form'>
            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <br /><br />

            <button onClick={() => handleLogin()}>
                Login
            </button>
        </div>
    );
}

export default Login;