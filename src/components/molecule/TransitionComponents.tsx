import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { styled, keyframes } from 'styled-components';
import NoiseEffect from '../atom/NoiseEffect';

const SlideIn = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0f0f0f;
    transform-origin: bottom;
    z-index: 20;
`;

const SlideOut = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0f0f0f;
    transform-origin: top;
    z-index: 20;
`;

interface TransitionComponentsProps {
    children: ReactNode;
}

export function TransitionComponents({ children }: TransitionComponentsProps) {
    return (
        <>
            {children}
            <SlideIn
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <SlideOut
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
}
