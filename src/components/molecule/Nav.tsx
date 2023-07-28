import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Logo from '../atom/Logo';
import { motion, useAnimation, useScroll } from 'framer-motion';

const Contanier = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 20px;
    font-weight: bold;
    z-index: 20;
    background-color: transparent;
`;

const Box = styled.div`
    height: 75px;
    padding: 10px 10px;
    max-width: 1050px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
`;

const navVariants = {
    top: {
        backgroundColor: 'transparent',
    },
    scroll: {
        backgroundColor: '#111111',
    },
};

export default function Nav() {
    const navAnimation = useAnimation();
    const { scrollY } = useScroll();

    useEffect(() => {
        function navColorChange() {
            if (scrollY.get() > 80) {
                navAnimation.start('scroll');
            } else {
                navAnimation.start('top');
            }
        }

        const unsubscribeY = scrollY.on('change', navColorChange);

        return () => {
            unsubscribeY();
        };
    }, []);

    return (
        <Contanier variants={navVariants} animate={navAnimation} initial="top">
            <Box>
                <Logo />
                <Links>
                    <Link to="/">Home</Link>
                    {/* <Link to="/project">Project</Link> */}
                    <Link to="/contact">About</Link>
                </Links>
            </Box>
        </Contanier>
    );
}
