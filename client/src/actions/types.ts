export enum ActionTypes{
    LOGIN,
    LOGOUT,
    REGISTER
}
export interface userAuth{
    password: string,
    username: string
}

export interface userRegister{
    password: string,
    username: string,
    firstName: string
}