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

        <div id="wp-form">
            <div class="box-form">
                <h1>Sign In</h1>
                <div class="form-group">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div class="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                </div>
                <button onClick={() => handleLogin()}>
                    Đăng Nhập
                </button>
                <div class="form-bottom">
                    <p>Bạn chưa có tài khoản?</p><span>Đăng ký</span>
                </div>
                <p class="forgot-password">Quên Mật Khẩu?</p>
            </div>
        </div >
    );
}

export default Login;