import React, { FC, ReactChild, ReactNode } from 'react'
import './Button.scss';

interface IButtonProps {
    children: ReactChild | ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button:FC<IButtonProps> = ({children, onClick}) => {
  return (
    <button className='button' onClick={(e) => onClick(e)}>
        {children}
    </button>
  )
}

export default Button