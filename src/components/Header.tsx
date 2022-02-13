import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './styles/Header.scss'
import './styles/Link.scss';
import Accordion from './UI/Accordion/Accordion';

const Header = () => {
  const user = useTypedSelector(state => state.user);

  return (
    <div className='header'>
        <div className='links_block'>
            {user.isAuth === 'true' 
            ? 
              <Link className='link_button' to='/'>На главную</Link>
            :
              null
          }
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