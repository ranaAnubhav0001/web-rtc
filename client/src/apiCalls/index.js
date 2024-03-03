import axios from 'axios';


const baseUrl = 'http://localhost:9000/api';
console.log(baseUrl, "---baseUrl");

export const apiRequest = async (method, url, data) => {
    try {
        const response = await axios({
            method,
            withCredentials: true,
            url: `${baseUrl}/${url}`,
            data: data,
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};