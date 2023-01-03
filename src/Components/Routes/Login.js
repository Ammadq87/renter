import '../Styles/Login.css'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

export const Login = () => {
    const [containsErrors, _containsErrors] = useState(false);

    const schema = yup.object().shape({
        username: yup.string().email('* Not an email').required('* Username required'),
        password: yup.string().required('* Password required')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    }); // handle submit is called when form is submmited
    // create another function to execute when the form is submitted
    const onSubmit = (data) => {
        console.log(data);
        console.log(errors)
        if (errors) {
            _containsErrors(!containsErrors);
        }
        window.location.assign('/home')
    } 

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit(onSubmit)} action='/register' method='get' style={{height: !containsErrors ? '310px' : '280px' }}>
                <p className='title'>Log in</p>
                
                <p className='error'>{errors.username?.message}</p>
                <input {...register('username')} type='text' placeholder='Username'/>

                <p className='error'>{errors.password?.message}</p>
                <input {...register('password')} type='password' placeholder='Password'/>
                <div className='links'>
                    <p className='forgot-password'><a href='*'>Forgot Password?</a></p>
                    <p className='register'><a href='*'>Register</a></p>
                </div>
                <div className='btn'>
                    <button type='submit'>Log In</button>
                </div>
            </form>

        </div>
    )
}