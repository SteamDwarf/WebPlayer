import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './styles/Header.scss'
import './styles/Link.scss';
import Accordion from './UI/Accordion/Accordion';
import Button from './UI/Button/Button';

const Header = () => {
  const user = useTypedSelector(state => state.user);
  const {logOutUser} = useActions();

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logOutUser();
    localStorage.setItem('isAuth', 'false');
  }

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
        {user.isAuth === 'true'
        ?
          <div className='links_block'>
            <Button onClick={logout}>Выйти</Button>
          </div>
        :
          <div className='links_block'>
            <Link className='link_button' to='/login'>Войти</Link>
            <Link className='link_button' to='/register'>Зарегистрироваться</Link>
            {/* <Accordion title='user'/> */}
          </div>
        }
        
    </div>
  )
}

export default Header