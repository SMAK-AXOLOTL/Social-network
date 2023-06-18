import {useField} from "formik";
import React from "react";
import s from './FormComponents.module.css'

//TODO empty input boxes after submission

export const TextInput = ({label, handleBlur, ...props}) => {
    let [field, meta] = useField(props)
    return <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className={s.textInput} onBlur={handleBlur} {...field} {...props}/>
        {meta.touched && meta.error && <div className={s.textInputErrorMessage}> {meta.error} </div>}
    </div>
}

export const SelectInput = ({label, ...props}) => {
    let [field, meta] = useField(props)
    return <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props}/>
        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
}
export const Checkbox = ({children, ...props}) => {
    let [field, meta] = useField({...props, type: "checkbox"})
    return <div>
        <label className='checkBoxInput'>
            <input type={'checkbox'} {...field} {...props}/>{children}
        </label>
        {meta.touched && meta.error && <div className={'error'}>{meta.error}</div>}
    </div>
}
