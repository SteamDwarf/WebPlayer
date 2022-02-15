import React, { FC } from 'react'
import './Input.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string
}

const Input:FC<InputProps> = ({placeholder, value, onChange, type}) => {
  return (
    <input 
      className='input' 
      placeholder={placeholder} 
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input