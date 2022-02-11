import React from 'react'
import Header from './Header';
import Form from './UI/Form/Form'
import './styles/Login.css';
import LabeledInput from './UI/Input/LabeledInput';

const Login = () => {
  return (
    <div>
        <Header />
        <div className='login_block'>
          <Form title='Войти'>
            <LabeledInput label='Логин' placeholder='Введите ваш логин'/>
          </Form>
        </div>
    </div>
  )
}

export default Login
