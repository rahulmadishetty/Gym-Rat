export const required = (value) => (value ? undefined : 'Required');

export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const validatePassword = (value) => {
    if (!value) {
        return 'Required';
    }
    if (value.length < 8) {
        return 'Password should be at least 8 characters long';
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
        return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    return undefined;
};

export const validateEmail = (value) => {
    if (!value) {
        return 'Required';
    }
    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
        return 'Invalid email address';
    }
    return undefined;
};


export const validateConfirmPassword = (value, allValues) => {
    if (!value) {
        return 'Required';
    }
    if (value !== allValues.password) {
        return 'Passwords do not match';
    }
    return undefined;
};