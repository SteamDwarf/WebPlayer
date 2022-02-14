import { ISignUpData } from "../types/interfaces";

export const postNewUser = (newUser: ISignUpData) => {
    fetch('http://localhost:3004', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser) 
    })
    .then(response => response.ok ? response.json : Promise.reject(response))
    .then(json => console.log(json))
    .catch((e) => console.log(e));
}