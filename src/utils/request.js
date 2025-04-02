const axios = require("axios");

const apiClient = axios.create({
    withCredentials: true, // 允许携带 Cookie
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    config.url = `api${config.url}`;

    return config;
});

apiClient.interceptors.response.use(
    (response) => {
        const {data} = response
        return data
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default apiClient;


