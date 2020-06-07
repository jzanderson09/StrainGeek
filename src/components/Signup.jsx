import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../sass/Signup.scss';

const Signup = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        Username: '',
        Password: '',
        Email: ''
    });

    const changeHandler = e => {
        e.preventDefault();
        setUser({ 
            ...user,
            [e.target.name]: e.target.value
         });
    }

    return (
        <div className='Signup'>
            <Card
                className='signup-card'
                bg='light'
                text='dark'
                border='dark'
            >
                <Card.Body>
                    <form>
                        <input
                            type='text'
                            name='firstName'
                            value={user.firstName}
                            placeholder='First Name'
                            onChange={changeHandler}
                        />
                        <input
                            type='text'
                            name='lastName'
                            value={user.lastName}
                            placeholder='Last Name'
                            onChange={changeHandler}
                        />
                        <input
                            type='text'
                            name='username'
                            value={user.username}
                            placeholder='Username'
                            onChange={changeHandler}
                        />
                        <input 
                            type='password'
                            name='password'
                            value={user.password}
                            placeholder='Password'
                            onChange={changeHandler}
                        />
                        <input 
                            type='text'
                            name='email'
                            value={user.email}
                            placeholder='Email'
                            onChange={changeHandler}
                        />
                        <Button 
                            variant='success'
                            className='signup-button'
                        >Sign Up</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Signup;