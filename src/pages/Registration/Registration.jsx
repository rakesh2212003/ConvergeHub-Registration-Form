import React, { useState } from 'react';

import './Registration.css';
import { 
    handleChanges,
    validateFirstname,
    validateLastname,
    validateEmail 
} from '../../validation';

const Registration = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const [firstnameErrorMessage, setFirstnameErrorMessage] = useState('');
    const [lastnameErrorMessage, setLastnameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const handleChanges = (e) => {
        const { name, value } = e.target;
    
        if (name === 'firstname') {
            setFirstname(value);
            setFirstnameErrorMessage(validateFirstname(value));
        } else if (name === 'lastname') {
            setLastname(value);
            setLastnameErrorMessage(validateLastname(value));
        } else if(name === 'email'){
            setEmail(value);
            emailErrorMessage(validateEmail(value));
        }
    }

    const handleSubmit = (e) => {
        if (firstnameErrorMessage != null &&
            lastnameErrorMessage != null &&
            emailErrorMessage != null
        ) {
            e.preventDefault();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>First Name</span>
            <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={handleChanges}
            />
            {firstnameErrorMessage && <span className="error-message">{firstnameErrorMessage}</span>}

            <span>Last Name:</span>
            <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={handleChanges}
            />
            {lastnameErrorMessage && <span className="error-message">{lastnameErrorMessage}</span>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Registration;
