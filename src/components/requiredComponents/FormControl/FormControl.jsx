import React from 'react'
import { Field } from 'redux-form';
import style from './FormControl.module.css'

export const FormControl = ({ meta: {touched, error}, children}) => {
  const hasError = touched && error;

  return (
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}


export const Textarea = ({ input, ...props }) => {
  return (
    <FormControl {...props}>
      <textarea {...input} {...props} />
    </FormControl>
  )
}

export const Input = ({ input, ...props }) => {
  return (
    <FormControl {...props}>
      <input {...input} {...props} />
    </FormControl>
  )
}

export const createField = (placeholder, name, validators, component, props, text='') => {
  return (
    <div>
      <Field placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}/>
        {text}
    </div>
  )
}