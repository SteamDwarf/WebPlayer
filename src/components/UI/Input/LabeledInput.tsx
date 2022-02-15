import React, { FC } from 'react'
import Input from './Input'
import './LabeledInput.scss';

interface OptionalProps {
  inputType: string;
  onBlur: (validationField:string, value: string) => void;
}
interface ILabeledInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    optional: OptionalProps
}

const LabeledInput:FC<ILabeledInputProps> = ({label, placeholder, value, onChange, optional}) => {
  return (
    <div className='block'>
        <label>{label}</label>
        {/* <Input 
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
          optional={{type: optional.inputType, onBlur: optional.onBlur}}
        /> */}
    </div>
  )
}

export default LabeledInput