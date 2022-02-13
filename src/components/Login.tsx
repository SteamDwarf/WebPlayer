import React, { useState } from 'react'
import Header from './Header';
import Form from './UI/Form/Form'
import './styles/Login.scss';
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
  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(loginData);
  }


  return (
    <div>
        <Header />
        <div className='login_block'>
          <Form title='Войти'>
            <LabeledInput 
              label='Логин' 
              placeholder='Введите ваш логин' 
              value={loginData.login}
              onChange={setLogin}
            />
            <LabeledInput 
              label='Пароль' 
              placeholder='Введите ваш пароль' 
              inputType='password'
              value={loginData.password}
              onChange={setPassword}
            />
            <Button onClick={signIn}>Войти</Button>
          </Form>
        </div>
    </div>
  )
}

export default Login
