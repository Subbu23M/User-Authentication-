import React,{useState} from 'react';

import HeaderTags from '../../HTML-Elements/HeaderTags';

import {Button,Form,FormGroup,Input,ButtonGroup} from 'reactstrap';

import validator from 'validator';

import {useDispatch} from 'react-redux';

import {startRegisterAction} from '../../actions/registerAction';

const Register = (props) => {

    const dispatch = useDispatch();

    // state variable & function to make form as controlled inputs
    const[user,setUser] = useState({
        username: '',
        email: '',
        password: '',
        formErrors: {} 
    })

    // To track errors in component
    const findErrors = {};

    // Form Validation
    const runValidation = () => {
        // For name
        if (user.username.trim().length === 0) {
            // Object Operations creating new property along with value
            findErrors['username'] = 'username cannot be blank';
        }

        // For Email
        if (user.email.trim().length === 0) {
            // Object operations creating new property along with value
            findErrors['email'] = 'email cannot be blank';
        } else if (!validator.isEmail(user.email)) {
            // Object operations creating new property along with value
            findErrors['email'] = 'invalid email format';
        }

        // For password
        if (user.password.length === 0) {
            // Object Operations creating new property along with value
            findErrors['password'] = 'password should not be blank';
        }else if(user.password.length < 8 || user.password.length > 120){
            // Object Operations creating new property along with value
            findErrors['password'] = 'password characters should not be less than 8 and greater than 120';
        }
    }

    // Event Handler as callback function -1  to make form as controlled inputs
    const handleForm = (e) => {
        const res = e.target.name;

        const inputValue = e.target.value;

        if(res === 'username'){
            // Invoke State function
            setUser({ ...user, username: inputValue });
        }else if(res === 'email'){
            // Invoke State function
            setUser({ ...user, email: inputValue });
        }else if(res === 'password'){
            // Invoke State function
            setUser({ ...user, password: inputValue });
        }
    }

    // Event Handler as callback function to submit the form
    const handleSubmit = (e) => {
        // To prevent browser to refresh
        e.preventDefault();

        // Invoke function
        runValidation();

        // To Check form has errors or not
        if(Object.keys(findErrors).length === 0){
            // Invoke State function
            setUser({...user,formErrors:{}});

            // Object Destructuring - ES6
            const{username,email,password} = user;

            // User Inputs ES6 Concise Property
            const formData = {
                username,
                email,
                password
            }
            // console.log(formData);

            // After successfully registered,redirect the user to login page
            const redirect = () => {
                props.history.push('/login')
            }

            // And reset the form after successfully login
            const resetForm = () => {
                setUser({
                    username:'',
                    email : '',
                    password : '',
                    formErrors : {}
                })
            }

            // dispatch action to store
            dispatch(startRegisterAction(formData,redirect,resetForm));

        }else{
            console.log(findErrors);

            // Invoke State function
            setUser({ ...user, formErrors: findErrors });
        }    
    }

    return (
        <>

            <HeaderTags
                Tag='h3'
                className='text-capitalize text-center text-warning mt-2'
                text='register with us'
            />

            <Form className='inputTag' autoComplete='off'>

                {/* 1 */}
                <FormGroup>

                    <Input
                        type='text'
                        placeholder='Enter username'
                        className='inputWidth'
                        name='username'
                        value={user.username}
                        onChange={handleForm}
                    />

                    {/* Conditional Rendering Simple...if */}
                    {
                        user.formErrors.username && <span className='text-danger ml-2'> {user.formErrors.username} </span>
                    }

                </FormGroup>

                {/* 2 */}
                <FormGroup>

                    <Input
                        type='email'
                        placeholder='Enter email'
                        className='inputWidth'
                        name='email'
                        value={user.email}
                        onChange={handleForm}
                    />

                    {/* Conditional Rendering Simple...if */}
                    {
                        user.formErrors.email && <span className='text-danger ml-2'> {user.formErrors.email} </span>
                    }

                </FormGroup>

                {/* 3 */}
                <FormGroup>

                    <Input
                        type='password'
                        placeholder='Enter password'
                        className='inputWidth'
                        name='password'
                        value={user.password}
                        onChange={handleForm}
                    />

                    {/* Conditional Rendering Simple...if */}
                    {
                        user.formErrors.password && <span className='text-danger ml-2'> {user.formErrors.password} </span>
                    }

                </FormGroup>

            </Form>

            <ButtonGroup className='btnGroup my-2'>

                <Button
                    color='success'
                    className='mr-2'
                    onClick={handleSubmit}
                > Register 
                </Button>

                <Button
                    color='secondary'
                > Cancel 
                </Button>

            </ButtonGroup>
            
        </>
    )
}

export default Register;
