import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://demoapp.com/api/',
    headers: {
        'Content-Type': "application/json",
        timeout: 5000,
    },
});

export default axiosInstance;
