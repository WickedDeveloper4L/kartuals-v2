import React from 'react'
import './form-input.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <div className='group'>
        <label className='label'>{label}</label>
        <input onChange={handleChange} {...otherProps} className="form-input"/>
    </div>
  )
}

export default FormInput