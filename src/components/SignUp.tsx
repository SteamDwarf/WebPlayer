import React, { useState } from 'react'
import Button from './UI/Button/Button'
import Form from './UI/Form/Form'
import LabeledInput from './UI/Input/LabeledInput'
import { ISignUpData } from '../types/interfaces'
import './styles/SignUp.scss';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions'

const SignUp = () => {
    const [signUpData, setSignUpData] = useState<ISignUpData>({userName: '', email: '', password: ''}); 
    const {signUpUser} = useActions();
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
        signUpUser(signUpData);
        localStorage.setItem('isAuth', 'true');
        navigate('/');
    }

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
                    inputType='password'
                    value={signUpData.password}
                    onChange={setPassword}
                />
                <Button onClick={registerNewUser}>Зарегистрироваться</Button>
            </Form>
        </div>
    )
}

export default SignUp