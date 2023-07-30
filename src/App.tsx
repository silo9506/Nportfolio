import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Router from './Router';
import Nav from './components/molecule/Nav';
import NoiseEffect from './components/atom/NoiseEffect';
const Container = styled.div`
    max-width: 1050px;
    position: relative;
    margin: 0 auto;
    padding-top: 75px;
`;
const Wrapper = styled.div`
    margin: 0 auto;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 0px 20px;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 0px 10px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoints.sd}) {
        padding: 0px 5px;
    }
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
