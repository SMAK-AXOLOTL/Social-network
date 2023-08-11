import {useField} from "formik";
import React from "react";
import s from './FormComponents.module.css'

export const TextInput = ({label = "", ...props}) => {
    let [field, meta] = useField(props)
    return <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className={s.textInput} {...field} {...props}/>
        {meta.touched && meta.error && <div className={s.textInputErrorMessage}> {meta.error} </div>}
    </>
}

export const SelectInput = ({label = '', ...props}) => {
    let [field, meta] = useField(props)
    return <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props}/>
        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
}
export const Checkbox = ({children, ...props}) => {
    let [field, meta] = useField({...props, type: "checkbox"})
    return <>
        <label className='checkBoxInput'>
            <input type={'checkbox'} {...field} {...props}/>{children}
        </label>
        {meta.touched && meta.error && <div className={'error'}>{meta.error}</div>}
    </>
}
