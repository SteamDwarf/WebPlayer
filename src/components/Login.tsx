import React, { useState } from 'react'
import Header from './Header';
import Form from './UI/Form/Form'
import './styles/Login.css';
import LabeledInput from './UI/Input/LabeledInput';
import Button from './UI/Button/Button';

interface ILoginData {
  login: string,
  password: string
}

const Login = () => {
  const [loginData, setLoginData] = useState<ILoginData>({login: '', password: ''});

  const setLogin = (newLogin: string) => {
    setLoginData({...loginData, login: newLogin});
  }
  const setPassword = (newPassword: string) => {
    setLoginData({...loginData, password: newPassword})
  }

  return (
    <div>
        <Header />
        <div className='login_block'>
          <Form title='Войти'>
            <LabeledInput label='Логин' placeholder='Введите ваш логин'/>
            <LabeledInput label='Пароль' placeholder='Введите ваш пароль' inputType='password'/>
            <Button>Войти</Button>
          </Form>
        </div>
    </div>
  )
}

export default Login
