import React, { FC, ReactChild, ReactNode } from 'react'
import './LabelHandler.scss';

interface LabelHandlerProps {
    label: string;
    children: ReactChild | ReactNode;
}

const LabelHandler:FC<LabelHandlerProps> = ({label, children}) => {
  return (
    <div className='block'>
        <label>{label}</label>
        {children}
    </div>
  )
}

export default LabelHandler