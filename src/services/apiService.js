import axios from '../utils/axiosCustomize';


const getAllUser = (page, limit, type, search, filter) => {
    return axios.get(`v1/api/users/?page=${page}&limit=${limit}&type=${type}&search=${search}&filter=${filter}`);
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


const postLogin = (email, password) => {
    return axios.post(`v1/api/login`, { email, password });
}

const doLogout = (refreshToken) => {
    return axios.post(`v1/api/logout`, { refreshToken });
}


export { getAllUser, createUser, updateUser, deleteUser, postLogin, doLogout };