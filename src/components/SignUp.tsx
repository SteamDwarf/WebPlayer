import React, { useState } from 'react'
import Button from './UI/Button/Button'
import Form from './UI/Form/Form'
import LabeledInput from './UI/Input/LabeledInput'

interface ISignUpData {
    userName: string,
    email: string,
    password: string
}

const SignUp = () => {
    const [signUpData, setSignUpData] = useState<ISignUpData>({userName: '', email: '', password: ''}); 

    const setUsername = (newUserName: string) => {
        setSignUpData({...signUpData, userName: newUserName});
    }
    const setEmail = (newEmail: string) => {
        setSignUpData({...signUpData, email: newEmail});
    }
    const setPassword = (newPassword: string) => {
        setSignUpData({...signUpData, password: newPassword});
    }

    return (
        <div>
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
                />
                <Button onClick={() => console.log('reg')}>Зарегистрироваться</Button>
            </Form>
        </div>
    )
}

export default SignUp