import React, { FC, ReactChild, ReactNode } from 'react'
import './Button.css';

interface IButtonProps {
    children: ReactChild | ReactNode;
}

const Button:FC<IButtonProps> = ({children}) => {
  return (
    <button className='button'>
        {children}
    </button>
  )
}

export default Button