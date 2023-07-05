export const validateLogin = values => {
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

export const validateProfileInfo = values => {
    const errors = {contacts: {}};

    if (!values.fullName) {
        errors.fullName = 'Required';
    }
    if (!values.aboutMe) {
        errors.aboutMe = 'Required'
    }
    if (!values.lookingForAJobDescription) {
        errors.lookingForAJobDescription = 'Required'
    }

    Object.entries(values.contacts).map(([key, value]) => {
        if ((value) && (!RegExp(`^https://${key}.com\/`).test(values.contacts[key]))) {
            errors.contacts[key] = `Invalid URL format - ${key}`
        }
    })

    if(Object.keys(errors).length === 1 && Object.keys(errors.contacts).length === 0){
        return {}
    }

    return errors;
};