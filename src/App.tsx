import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Router from './Router';
import Nav from './components/molecule/Nav';
import NoiseEffect from './components/atom/NoiseEffect';

const Wrapper = styled.div`
    width: 100%;
    padding-top: 75px;
`;
const Container = styled.div`
    position: relative;
`;

function App() {
    return (
        <Container>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Nav />
                <NoiseEffect />
                <Wrapper>
                    <Router />
                </Wrapper>
            </BrowserRouter>
        </Container>
    );
}

export default App;
