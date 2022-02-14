import React, { useState } from 'react'
import Header from './Header';
import Form from './UI/Form/Form'
import './styles/Login.scss';
import LabeledInput from './UI/Input/LabeledInput';
import Button from './UI/Button/Button';
import { ISignInData } from '../types/interfaces';
import { useActions } from '../hooks/useActions';


const Login = () => {
  const [signInData, setLoginData] = useState<ISignInData>({userName: '', password: ''});
  const {signInUserAction} = useActions();

  const setLogin = (newLogin: string) => {
    setLoginData({...signInData, userName: newLogin});
  }
  const setPassword = (newPassword: string) => {
    setLoginData({...signInData, password: newPassword})
  }
  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInUserAction(signInData);
    localStorage.setItem('isAuth', 'true');
  }


  return (
    <div>
        <div className='login_block'>
          <Form title='Войти'>
            <LabeledInput 
              label='Логин' 
              placeholder='Введите ваш логин' 
              value={signInData.userName}
              onChange={setLogin}
            />
            <LabeledInput 
              label='Пароль' 
              placeholder='Введите ваш пароль' 
              value={signInData.password}
              onChange={setPassword}
              optional={{inputType: 'password'}}
            />
            <Button onClick={signIn}>Войти</Button>
          </Form>
        </div>
    </div>
  )
}

export default Login
