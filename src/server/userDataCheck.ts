import { ISignUpData } from "../types/interfaces";


export const newUserDataCheck = (newUser: ISignUpData, registeredUsers: Array<ISignUpData>): boolean => {
    let isNotCorrect = registeredUsers.some(regUser => {
        return (regUser.email === newUser.email || regUser.userName === newUser.userName);
        /* if(regUser.email === newUser.email || regUser.userName === newUser.userName) {
            return isCorrect;
        } */
    });

    return !isNotCorrect;
}