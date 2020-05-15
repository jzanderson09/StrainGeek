import React from 'react';
import {
    Button,
    Form,
    FormControl,
    Nav,      
    Navbar 
} from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Strain Geek</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="profile">Profile</Nav.Link>
                    <Nav.Link href="settings">Settings</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Dashboard;