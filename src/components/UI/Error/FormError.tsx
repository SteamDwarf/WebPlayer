import React, { FC } from 'react'
import './FormError.scss';

interface FormErrorProps {
    error: string;
}

const FormError:FC<FormErrorProps> = ({error}) => {
  return (
    <h3 className='error_block'>{error}</h3>
  )
}

export default FormError