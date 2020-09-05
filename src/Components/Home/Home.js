import React from 'react';
import './Home.css';
import { Container } from '@material-ui/core';
import Users from '../Users/Users';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container maxWidth="md">
                <Header></Header>
                <Users></Users>
            </Container>
        </div>
    );
};

export default Home;