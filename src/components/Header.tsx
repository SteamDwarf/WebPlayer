import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'
import './styles/Link.css';
import Accordion from './UI/Accordion/Accordion';
import Button from './UI/Button/Button';

const Header = () => {
  return (
    <div className='header'>
        <div className='links_block'>
            <Link className='link_button' to='/'>На главную</Link>
        </div>
        <div className='links_block'>
            <Link className='link_button' to='/login'>Войти</Link>
            <Link className='link_button' to='/register'>Зарегистрироваться</Link>
            {/* <Accordion title='user'/> */}
        </div>
    </div>
  )
}

export default Header