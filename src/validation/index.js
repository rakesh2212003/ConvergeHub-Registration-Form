export const validateFirstname = (value) => {
    if (value.trim() === '') {
        return 'Enter a valid first name';
    } else {
        return null;
    }
};

export const validateLastname = (value) => {
    if (value.trim() === '') {
        return 'Enter a valid last name';
    } else {
        return null;
    }
};

export const validateEmail = (value) => {
    if(value.trim() === ''){
        return 'Enter a valid email address';
    }
}