import React, { FC } from 'react'
import './Input.scss';

interface OptionalProps {
  type?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  optional?: OptionalProps;
}

const Input:FC<InputProps> = ({placeholder, value, onChange, optional}) => {
  return (
    <input 
      className='input' 
      placeholder={placeholder} 
      type={optional?.type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input