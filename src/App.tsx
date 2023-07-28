import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Router from './Router';
import Nav from './components/molecule/Nav';
import NoiseEffect from './components/atom/NoiseEffect';

const Wrapper = styled.div`
    padding-top: 60px;
`;

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NoiseEffect />
            <Nav />
            <Wrapper>
                <Router />
            </Wrapper>
        </BrowserRouter>
    );
}

export default App;
