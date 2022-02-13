import React, { FC } from 'react'
import Input from './Input'
import './LabeledInput.scss';

interface ILabeledInputProps {
    label: string;
    placeholder: string;
    inputType?: string;
    value: string;
    onChange: (value: string) => void;
}

const LabeledInput:FC<ILabeledInputProps> = ({label, placeholder, inputType, value, onChange}) => {
  return (
    <div className='block'>
        <label>{label}</label>
        <Input 
          placeholder={placeholder} 
          type={inputType}
          value={value}
          onChange={onChange}
        />
    </div>
  )
}

export default LabeledInput