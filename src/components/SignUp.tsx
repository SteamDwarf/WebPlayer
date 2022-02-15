import React, { useState } from 'react'
import Button from './UI/Button/Button'
import Form from './UI/Form/Form'
import LabeledInput from './UI/Input/LabeledInput'
import { ISignUpData } from '../types/interfaces'
import './styles/SignUp.scss';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions'
import FormError from './UI/Error/FormError'
import LabelHandler from './UI/LabelHandler/LabelHandler'
import ValidateInput from './UI/Input/ValidateInput'
import Input from './UI/Input/Input'

const SignUp = () => {
    const [signUpData, setSignUpData] = useState<ISignUpData>({userName: '', email: '', password: ''}); 
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');
    const [formError, setFormError] = useState<string>('');
    const {signUpUser, findUser} = useActions();
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
    const checkInputValidation = (validationField: string, value: string) => {
        findUser(validationField, value);
    }
/*     const checkRepeatedPassword = (password: string, repeatedPassword: string) {
        if(password !== repeatedPassword) {
            setFormError('Пароли не совпадают');
        }
    } */
//TODO проверку на логин можно сделать через url параметры http://localhost:3004/users?userName=awdad

    return (
        <div className='signup_block'>
            <Form title='Регистрация'>
                <LabelHandler label='Имя пользователя'>
                    <ValidateInput 
                        placeholder='Введите имя пользователя'
                        value={signUpData.userName}
                        onChange={setUsername}
                        type='userName'
                        onBlur={checkInputValidation}
                    />
                </LabelHandler>
                <LabelHandler label='Электронная почта'>
                    <ValidateInput 
                        placeholder='Введите электронную почту'
                        value={signUpData.email}
                        onChange={setEmail}
                        type='email'
                        onBlur={checkInputValidation}
                    />
                </LabelHandler>
                <LabelHandler label='Пароль'>
                    <Input 
                        placeholder='Введите пароль'
                        value={signUpData.password}
                        onChange={setPassword}
                        type='password'
                    />
                </LabelHandler>
                <LabelHandler label='Повторите пароль'>
                    <Input 
                       placeholder='Повторно введите пароль'
                       value={repeatedPassword}
                       onChange={setRepeatedPassword}
                       type='password'
                    />
                </LabelHandler>
                {/* <LabeledInput 
                    label='Имя пользователя'
                    placeholder='Введите имя пользователя'
                    value={signUpData.userName}
                    onChange={setUsername}
                    optional={{inputType: 'userName', onBlur: checkInputValidation}}
                />
                <LabeledInput 
                    label='Электронная почта'
                    placeholder='Введите электронную почту'
                    value={signUpData.email}
                    onChange={setEmail}
                    optional={{inputType: 'userName', onBlur: checkInputValidation}}
                />
                <LabeledInput 
                    label='Пароль'
                    placeholder='Введите пароль'
                    value={signUpData.password}
                    onChange={setPassword}
                    optional={{inputType: 'password', onBlur: () => console.log()}}
                />
                <LabeledInput 
                    label='Повторите пароль'
                    placeholder='Повторно введите пароль'
                    value={repeatedPassword}
                    onChange={setRepeatedPassword}
                    optional={{inputType: 'password', onBlur: () => console.log()}}
                /> */}
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