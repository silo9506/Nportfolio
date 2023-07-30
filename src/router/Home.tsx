import { styled } from 'styled-components';
import Profile from '../components/molecule/Profile';
import React, { useState, useEffect } from 'react';
import TypingEffect from '../components/atom/TypingEffect';
import me from '../assets/img/me.jpg';
import Contact from './Contact';
import { motion } from 'framer-motion';

const Container = styled.div`
    margin: 50px 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        overflow: hidden;
    }
`;

const About = styled.div`
    display: flex;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

const TextWrapper = styled.div`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    padding: 5px 0px;
`;

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

export default function Home() {
    const [displayText, setDisplayText] = useState('');
    const [fine, setFine] = useState(false);
    const text = '신입 개발자 김현철입니다.';

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
    }, []);

    return (
        <Container>
            <About>
                <img src={me} width={300} height={300} style={{ borderRadius: '50%' }} />
                <TextWrapper>
                    <Title>
                        {displayText}
                        <Cursor>|</Cursor>
                    </Title>
                    <motion.p
                        initial={{ y: '10px', opacity: 0 }}
                        animate={displayText.length === text.length ? { y: '0px', opacity: 1 } : ''}
                        transition={{ duration: 0.5 }}
                    >
                        수년간의 유랑 생활 속에서도 고향 이타카를 잊지 않았고, 결국은 고향으로 돌아간 오디세이아의
                        오디세우스처럼, 나침반이 없어도 집을 찾아가는 비둘기처럼, 저는 목표를 결코 잊지 않고 개발자로서
                        완성을 이루어내기 위해 노력하겠습니다.
                    </motion.p>
                </TextWrapper>
            </About>
            <Profile />
        </Container>
    );
}
