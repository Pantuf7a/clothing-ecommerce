import React from 'react';
import './FormInput.scss';


export const FormInput = ({ handleChange, label, ...otherProps}) => {
  return (
    <div>
      <div className="group">
        <input type="text" className="form__input" onChange={handleChange} {...otherProps}/>
        {
          label ? 
          (<label className={`${otherProps.value.length ? 'shrink' : '' } form__input__label`}>{label}</label>)
          : null
        }
      </div>
    </div>
  )
}
