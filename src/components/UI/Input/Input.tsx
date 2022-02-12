import React, { FC } from 'react'
import './Input.css';

interface IInputProps {
  placeholder: string,
  type?: string
}

const Input:FC<IInputProps> = ({placeholder, type}) => {
  return (
    <input className='input' placeholder={placeholder} type={type}/>
  )
}

export default Input