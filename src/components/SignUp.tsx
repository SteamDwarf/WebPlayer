import React, { useState } from 'react'
import Button from './UI/Button/Button'
import Form from './UI/Form/Form'
import LabeledInput from './UI/Input/LabeledInput'
import { ISignUpData } from '../types/interfaces'
import './styles/SignUp.scss';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions'
import FormError from './UI/Error/FormError'

const SignUp = () => {
    const [signUpData, setSignUpData] = useState<ISignUpData>({userName: '', email: '', password: ''}); 
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');
    const [formError, setFormError] = useState<string>('');
    const {signUpUser, fetchUsers} = useActions();
    const navigate = useNavigate();

    const setUsername = (newUserName: string) => {
        setSignUpData({...signUpData, userName: newUserName});
    }
    const setEmail = (newEmail: string) => {
        setSignUpData({...signUpData, email: newEmail});
    }
    const setPassword = (newPassword: string) => {
        setSignUpData({...signUpData, password: newPassword});
    }

    const registerNewUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(signUpData.password !== repeatedPassword) {
            setFormError('Пароли не совпадают');
            return;
        }

        signUpUser(signUpData);
        localStorage.setItem('isAuth', 'true');
        navigate('/');
    }

//TODO проверку на логин можно сделать через url параметры http://localhost:3004/users?userName=awdad

    return (
        <div className='signup_block'>
            <Form title='Регистрация'>
                <LabeledInput 
                    label='Имя пользователя'
                    placeholder='Введите имя пользователя'
                    value={signUpData.userName}
                    onChange={setUsername}
                />
                <LabeledInput 
                    label='Электронная почта'
                    placeholder='Введите электронную почту'
                    value={signUpData.email}
                    onChange={setEmail}
                />
                <LabeledInput 
                    label='Пароль'
                    placeholder='Введите пароль'
                    value={signUpData.password}
                    onChange={setPassword}
                    optional={{inputType: 'password'}}
                />
                <LabeledInput 
                    label='Повторите пароль'
                    placeholder='Повторно введите пароль'
                    value={repeatedPassword}
                    onChange={setRepeatedPassword}
                    optional={{inputType: 'password'}}
                />
                    {
                        formError.length > 0
                        ?
                            <FormError error={formError}/>
                        :
                            null    
                    }
                <Button onClick={registerNewUser}>Зарегистрироваться</Button>
            </Form>
        </div>
    )
}

export default SignUp