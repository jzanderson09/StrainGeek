import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../sass/Home.scss';

const Home = () => {
    const [creds, setCreds] = useState({ 
        username: '', password: '' 
    });

    const changeHandler = e => {
        e.preventDefault();
        setCreds({
            ...creds, 
            [e.target.name]: e.target.value 
        });
    };

    return (
        <div className='Home'>
            <Card
                className='login-card'
                bg='light'
                text='dark'
                border='dark'
            >
                <Card.Body>
                    <div className='title-text-wrapper'>
                        <Card.Title><h1>Tokédex</h1></Card.Title>
                        <Card.Text>
                            <i>Fine Tune Your High</i>
                        </Card.Text>
                    </div>
                    <form>
                        <input
                            type='text'
                            name='username'
                            value={creds.username}
                            placeholder='Username'
                            onChange={changeHandler}
                        />
                        <input 
                            type='password'
                            name='password'
                            value={creds.password}
                            placeholder='Password'
                            onChange={changeHandler}
                        />
                        <Button 
                            variant='success'
                            className='login-button'
                        >Login</Button>
                    </form>
                    <div className='signup-wrapper'>
                        <p>Not a member? </p><Link to="/signup">Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Home;