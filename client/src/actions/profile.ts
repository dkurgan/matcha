import api from '../api';
import { Dispatch } from 'redux';

export const createProfile = (data: object) => async(dispatch: Dispatch) =>{
    const token = localStorage.getItem('tinderbae-token');
    try {
        const res = await api.post('/profile/create', data,
            { headers: { "auth-chicken-curry": token } });   
        console.log(res)
        if (res.status === 200)
            console.log("sozdal");
        return {
            type: "HELLO"
        }
    } catch (error) {
        console.log(error);
    }
}