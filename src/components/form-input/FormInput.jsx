import React from 'react'
import './form-input.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <div className='group'>
        <input onChange={handleChange} {...otherProps} className="form-input"/>
        <label className='label'>{label}</label>
    </div>
  )
}

export default FormInput