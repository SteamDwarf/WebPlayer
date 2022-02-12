import React, { FC, ReactChild, ReactNode } from 'react'
import './Form.css';

interface IFormProps {
  title: string,
  children: ReactChild | ReactNode
}

const Form:FC<IFormProps> = ({title, children}) => {
  return (
    <form className='form'>
        <h1 className='form-title'>{title}</h1>
        <div className='form-interactive'>
          {children}
        </div>
    </form>
  )
}

export default Form