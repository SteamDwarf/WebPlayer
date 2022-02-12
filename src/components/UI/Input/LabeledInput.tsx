import React, { FC } from 'react'
import Input from './Input'
import './LabeledInput.css';

interface ILabeledInputProps {
    label: string,
    placeholder: string,
    inputType?: string
}

const LabeledInput:FC<ILabeledInputProps> = ({label, placeholder, inputType}) => {
  return (
    <div className='block'>
        <label>{label}</label>
        <Input placeholder={placeholder} type={inputType}/>
    </div>
  )
}

export default LabeledInput