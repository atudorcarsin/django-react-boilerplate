import axios from 'axios';

export async function checkLogin() {
    try {
        await axios.get('/login/check/');
    } catch (error) {
        console.error(error);
        if (window.location.pathname !== '/login/') {
            window.location.href = '/login/';
        }
    }
}
