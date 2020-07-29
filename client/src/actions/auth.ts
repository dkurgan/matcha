import api from '../api';
import { Dispatch } from 'redux';
import { userAuth, ActionTypes, userRegister } from './types';

export const loginUser = (user: userAuth) => async (dispatch: Dispatch) => {
    const { password, username } = user;
    const token = await api.post('/auth/login', {
        password,
        username
    });
    localStorage.setItem('tinderbae-token', token.data);
    dispatch ({
        type: ActionTypes.LOGIN
    })
}

export const logOutUser = () => {
    localStorage.removeItem('tibderbae-token');
    return ({
        type: ActionTypes.LOGOUT
    })
}

export const registerUser = (userData: userRegister) => async (dispatch: Dispatch) => {
    const token = await api.post('/auth/register', userData);
    if (token) {
        localStorage.setItem('tinderbae-token', token.data);
    }
    dispatch({
        type: ActionTypes.REGISTER
    })
}

export const updateUser = (user: userAuth) => async (dispatch: Dispatch) => { 
    const update = await api.patch('/user/delete');
}