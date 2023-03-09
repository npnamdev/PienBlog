import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({
    showSpinner: false,
    speed: 1000
});


const instance = axios.create({
    baseURL: 'http://localhost:8080/',
})


// request(Gửi Yêu cầu lên server)
instance.interceptors.request.use(function (config) {
    NProgress.start();
    return config;
}, function (error) {
    return Promise.reject(error);
});


// response(Nhận Phản Hồi từ server)
instance.interceptors.response.use(function (response) {
    NProgress.done();
    //Status nằm trong phạm vi 200 đều chạy vào đây 
    return response && response.data ? response.data : response;
}, function (error) {
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

export default instance;