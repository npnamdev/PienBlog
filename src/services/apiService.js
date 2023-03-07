import axios from '../utils/axiosCustomize';


const getAllUser = () => {
    return axios.get('v1/api/users');
}


const createUser = (username, email, password, phone, address, role, image) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('role', role);
    formData.append('image', image);

    return axios.post('v1/api/users', formData);
}


const updateUser = (username, password, phone, address, role, image, id) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('role', role);
    formData.append('image', image);

    return axios.put(`v1/api/users/${id}`, formData);
}


const deleteUser = (id) => {
    return axios.delete(`v1/api/users/${id}`);
}


const filterUserByRole = (role) => {
    return axios.post('v1/api/users/filter', { role });
}


const searchUserByEmail = (email) => {
    return axios.post('v1/api/users/search', { email });
}


export { getAllUser, createUser, updateUser, deleteUser, filterUserByRole, searchUserByEmail };