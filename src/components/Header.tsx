import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'
import './styles/Link.css';
import Button from './UI/Button/Button';

const Header = () => {
  return (
    <div className='header'>
        <div>
            <Link className='link_button' to='/'>На главную</Link>
        </div>
        <div>
            <Link className='link_button' to='/login'>Войти</Link>
            <Link className='link_button' to='/register'>Зарегистрироваться</Link>
        </div>
    </div>
  )
}

export default Header