import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Logo from '../atom/Logo';

const Contanier = styled.nav`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5vw;
    padding: 10px;
    height: 60px;
    font-weight: bold;
    z-index: 20;
    background-color: transparent;
    padding: 0 100px;
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
`;

export default function Nav() {
    return (
        <Contanier>
            <Logo />
            <Links>
                <Link to="/">Home</Link>
                {/* <Link to="/project">Project</Link> */}
                <Link to="/contact">About</Link>
            </Links>
        </Contanier>
    );
}
