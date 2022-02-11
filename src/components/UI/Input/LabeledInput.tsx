import React, { FC } from 'react'

interface ILabeledInputProps {
    label: string,
    placeholder: string
}

const LabeledInput:FC<ILabeledInputProps> = ({label, placeholder}) => {
  return (
    <div>
        <label>{label}</label>
        <input placeholder={placeholder}></input>
    </div>
  )
}

export default LabeledInput