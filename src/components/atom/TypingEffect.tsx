import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.span`
    animation: blink 0.7s infinite;
    padding-left: 5px;
    @keyframes blink {
        0%,
        100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
`;

const Text = styled.h1``;

export default function TypingEffect() {
    const [displayText, setDisplayText] = useState('');
    const [fine, setFine] = useState(false);
    const text = "Hello, I'm a typing effect!";

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            currentText = text.slice(0, currentIndex + 1);
            setDisplayText(currentText);

            currentIndex += 1;

            if (currentIndex === text.length) {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [text]);

    return (
        <>
            <Text>
                {displayText} <Cursor>|</Cursor>
            </Text>
        </>
    );
}
