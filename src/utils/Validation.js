import {authAPI} from "../api/api";


export const syncValidate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors;
};

export const asyncValidate = values => {
    authAPI.login(values.email, values.password, values.rememberMe).then(data => {
            const errors = {}
            if (data.resultCode === 1) {
                errors.genericError = 'Incorrect E-mail or password'
            }
            return errors
        }
    )

}