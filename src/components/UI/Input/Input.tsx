import React, { FC } from 'react'
import './Input.scss';

interface IInputProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

const Input:FC<IInputProps> = ({placeholder, type, value, onChange}) => {
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