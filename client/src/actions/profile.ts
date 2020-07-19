import api from '../api';
import { Dispatch } from 'redux';

export const createProfile = (data: object) => async(dispatch: Dispatch) =>{
    const token = localStorage.getItem('tinderbae-token');
    try {
        const res = await api.post('/profile/create', data,
            { headers: { "auth-chicken-curry": token } });   
        return {
            type: "HELLO"
        }
    } catch (error) {
        console.log(error);
    }
}

export const getProgile = () => async (dispatch: Dispatch) => {
    
}