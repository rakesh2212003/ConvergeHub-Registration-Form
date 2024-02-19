import React, { useState } from 'react';

import './Registration.css';
import logo from '../../assets/logo.png'

const Registration = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');

    const [firstnameErrorMessage, setFirstnameErrorMessage] = useState(null);
    const [lastnameErrorMessage, setLastnameErrorMessage] = useState(null);
    const [emailErrorMessage, setEmailErrorMessage] = useState(null);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
    const [cpasswordErrorMessage, setCpasswordErrorMessage] = useState(null);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState(null);


    const validateFirstname = (value) => {
        let id = document.getElementById('firstname');
        setFirstname(value);
    
        if (value === '' || value === null) {
            setFirstnameErrorMessage('Enter a valid firstname');
            id.focus();
            return false;
        } else {
            setFirstnameErrorMessage('');
            return true;
        }
    }
    const validateLastname = (value) => {
        let id = document.getElementById('lastname');
        setLastname(value);
    
        if (value === '' || value === null) {
            setLastnameErrorMessage('Enter a valid lastname');
            id.focus();
            return false;
        } else {
            setLastnameErrorMessage('');
            return true;
        }
    }
    const validateEmail = (value) => {
        setEmail(value);
        const [localPart, domainPart] = value.split('@');
        let id = document.getElementById('email');

        if(value === '' || value === null){
            setEmailErrorMessage('Please provide an email');
            id.focus();
            return false;
        } else if(!value.includes('@') || (!localPart.length > 0) || (!domainPart.length > 0) || (!domainPart.includes('.') || value.endsWith('.'))){
            setEmailErrorMessage('Enter a valid email address');
            id.focus();
            return false;
        } else {
            setEmailErrorMessage('');
            return true;
        }
    }
    const validatePassword = (value) => {
        setPassword(value);
        let id = document.getElementById('password');
        if(value === '' || value === null){
            setPasswordErrorMessage('Please provide a password');
            id.focus();
            return false;
        } else if(value.length < 6){
            setPasswordErrorMessage('Password length must be atleast 6');
            id.focus();
            return false;
        } else {
            setPasswordErrorMessage('');
            return true;
        }
    }
    const validateCpassword = (value) => {
        setCpassword(value);
        let id = document.getElementById('cpassword');

        if(password !== value){
            setCpasswordErrorMessage('Password doesn\'t match');
            id.focus();
            return false;
        } else {
            setCpasswordErrorMessage('');
            return true;
        }
    }
    const validatePhone = (value) => {
        setPhone(value);
        let id = document.getElementById('phone');

        if(value === '' || value === null){
            setPhoneErrorMessage('Please provide a phone no');
            id.focus();
            return false;
        } else if(isNaN(value)){
            setPhoneErrorMessage('Phone no must be a number');
            id.focus();
            return false;
        } else if(value.length != 10){
            setPhoneErrorMessage('Phone no should contain 10 digit');
            id.focus();
            return false;
        } else{
            setPhoneErrorMessage('');
            return true;
        }
    }
    const validateGender = (value) => {
        console.log(value);
    }

    const handleSubmit = (e) => {
        if (!validateFirstname(firstname) ||
            !validateLastname(lastname) ||
            !validateEmail(email) ||
            !validatePassword(password) ||
            !validateCpassword(cpassword) ||
            !validatePhone(phone)
        ) {
            e.preventDefault();
        }
    }

    return (
        <div className='signup'>

            <div className="signup-top">
                <img src={logo} alt="" />
            </div>

            <form onSubmit={ handleSubmit } className='signup-form'>
                <h1 className="signup-form-header">Sign Up</h1>

                <div className="signup-form-firstname_lastname">
                    {/* Firstname */}
                    <div className="signup-form-firstname_lastname-firstname">
                        <input
                            type="text"
                            name='firstname'
                            id='firstname'
                            placeholder=''
                            value={ firstname }
                            onInput={ (e) => validateFirstname(e.target.value) }
                            style={ firstnameErrorMessage ? { border: '1px solid red'} : { border: '1px solid lightgray'} }
                            className='signup-form-input'
                        />
                        <label 
                            htmlFor="firstname"
                            className='signup-form-text'
                        >
                            First Name*
                        </label>
                        <p className='signup-form-error'>
                            {firstnameErrorMessage ? "*"+firstnameErrorMessage : ''}
                        </p>
                    </div>

                    {/* Lastname */}
                    <div className="signup-form-firstname_lastname-lastname">
                        <input 
                            type="text" 
                            name='lastname'    
                            id='lastname'
                            placeholder=''
                            value={ lastname }
                            onInput={ (e) => validateLastname(e.target.value)}
                            className='signup-form-input'
                        />
                        <label
                            htmlFor="lastname"
                            className='signup-form-text'
                        >
                            Last Name*
                        </label>
                        <p className='signup-form-error'>
                            {lastnameErrorMessage ? "*"+lastnameErrorMessage : ''}
                        </p>
                    </div>
                </div>

                {/* Email */}
                <div className="singup-form-email">
                    <input
                        type="text" 
                        name='email'
                        id='email'
                        placeholder=''
                        value={ email }
                        onInput={ (e) => validateEmail(e.target.value) }
                        className='signup-form-input'
                    />
                    <label
                        htmlFor="email"
                        className='signup-form-text'    
                    >
                        Email*
                    </label>
                    <p className='signup-form-error'>
                        { emailErrorMessage ? "*"+emailErrorMessage : '' }
                    </p>
                </div>

                <div className="signup-form-password_cpassword">

                    {/* password */}
                    <div className="signup-form-password_cpassword-password">
                        <input
                            type="password"
                            name='password'
                            id='password'
                            placeholder=''
                            value={ password }
                            onInput={ (e) => validatePassword(e.target.value) }
                            className='signup-form-input'
                        />
                        <label 
                            htmlFor="password"
                            className='signup-form-text'
                        >
                            Password*
                        </label>
                        <p className='signup-form-error'>
                            {passwordErrorMessage ? "*"+passwordErrorMessage : ''}
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div className="signup-form-password_cpassword-cpassword">
                        <input
                            type="password"
                            name='cpassword'
                            id='cpassword'
                            placeholder=''
                            value={ cpassword }
                            onInput={ (e) => validateCpassword(e.target.value) }
                            className='signup-form-input'
                        />
                        <label 
                            htmlFor="cpassword"
                            className='signup-form-text'
                        >
                            Confirm Password*
                        </label>
                        <p className='signup-form-error'>
                            {cpasswordErrorMessage ? "*"+cpasswordErrorMessage : ''}
                        </p>
                    </div>
                </div>

                <div className="signup-form-phone_gender">


                    <div className="signup-form-phone_gender-phone">
                        <input
                            type="text"
                            name='phone'
                            id='phone'
                            placeholder=''
                            value={ phone }
                            onInput={ (e) => validatePhone(e.target.value) }
                            className='signup-form-input'
                        />
                        <label 
                            htmlFor="phone"
                            className='signup-form-text'
                        >
                            Phone No*
                        </label>
                        <p className='signup-form-error'>
                            {phoneErrorMessage ? "*"+phoneErrorMessage : ''}
                        </p>
                    </div>

                    {/* Gender */}
                    {/* <div className="signup-form-phone_gender-gender">
                        <input
                            type="radio" 
                            name='gender'
                            id='male'
                            placeholder=''
                            value={ gender }
                            onInput={ (e) => validateGender(e.target.value) }
                            className='signup-form-input_radio'
                        />
                        <label
                            htmlFor="male"
                            className='signup-form-text_Radio'
                        >
                            Male
                        </label>
                    </div> */}

                    {/* Gender
                    <div className="signup-form-phone_gender-gender">
                        <input
                            type="radio"
                            name='gender'
                            id='male'
                            placeholder=''
                            value={ gender }
                            onInput={ (e) => validateGender(e.target.value) }
                            className='signup-form-input'
                        />
                        <label 
                            htmlFor="male"
                            className='signup-form-text'
                        >
                            Male
                        </label>
                        <p className='signup-form-error'>
                            {cpasswordErrorMessage ? "*"+cpasswordErrorMessage : ''}
                        </p>
                    </div> */}
                </div>

                <button
                    type="submit"
                    className='signup-form-submit'
                >
                    Submit
                </button>

            </form>
        </div>
    );
};

export default Registration;
