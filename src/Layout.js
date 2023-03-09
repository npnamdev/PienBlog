import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';

import Home from './components/Home/Home';
import Admin from './components/admin/Admin';
import Dashboard from './components/admin/content/Dashboard/Dashboard';
import ManagePost from './components/admin/content/Post/ManagePost';
import ManageProduct from './components/admin/content/Product/ManageProduct';
import ManageUser from './components/admin/content/User/ManageUser';
import Login from './components/Auth/Login';


const Layout = (props) => {

    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />

                    <Route path="admin" element={<Admin />} >
                        <Route index element={<Dashboard />} />
                        <Route path='post' element={<ManagePost />} />
                        <Route path='product' element={<ManageProduct />} />
                        <Route path='user' element={<ManageUser />} />
                    </Route>


                    <Route path='login' element={<Login />} />
                </Route>
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;