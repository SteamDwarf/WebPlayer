import React, { FC } from 'react'
import './Input.scss';

interface OptionalProps {

  }
  interface InputProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type: string;
    onBlur: (validationField:string, value: string) => void;
  }

const ValidateInput:FC<InputProps> = ({placeholder, value, onChange, type, onBlur}) => {
    return (
      <input 
        className='input' 
        placeholder={placeholder} 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur(type, e.target.value)}
      />
    )
}

export default ValidateInput