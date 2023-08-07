type LoginValuesType = {
    email: string
    password: string
}
export const validateLogin = (values: LoginValuesType) => {
    const errors = {
        email: '',
        password: ''
    };

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required'
    }

    return (errors.password === '' && errors.email === '' ? {} : errors);
};

type ProfileInfoValuesType = {
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    contacts: {

    }
}

export const validateProfileInfo = (values: ProfileInfoValuesType) => {
    const errors: ProfileInfoValuesType = {
        fullName: '',
        aboutMe: '',
        lookingForAJobDescription: '',
        contacts: {}
    };

    if (!values.fullName) {
        errors.fullName = 'Required';
    }
    if (!values.aboutMe) {
        errors.aboutMe = 'Required'
    }
    if (!values.lookingForAJobDescription) {
        errors.lookingForAJobDescription = 'Required'
    }
// @ts-ignore
    Object.entries(values.contacts).map(([key, value]) => {if ((value) && (!RegExp(`^https://${key}.com\/`).test(values.contacts[key]))) {errors.contacts[key] = `Invalid URL format - ${key}`}})

    return (Object.keys(errors.contacts).length === 0
        && errors.fullName === ''
        && errors.aboutMe === ''
        && errors.lookingForAJobDescription === '')? {} : errors
};