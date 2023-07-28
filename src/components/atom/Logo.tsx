import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    user-select: none;
`;

const Title = styled.h1<{ skew: number; top1: number; btm1: number; top2: number; btm2: number }>`
    position: relative;
    white-space: pre-wrap;
    text-align: center;
    padding: 0 2px;
    transform: skew(${(props) => props.skew}deg);
    &:before {
        content: "Hyeon Chul's Portfolio";
        position: absolute;
        left: 2px;
        top: 0;
        text-shadow: 2px -2px #00bcd4;
        clip-path: polygon(
            0 ${(props) => props.top1}%,
            100% ${(props) => props.top1}%,
            100% ${(props) => props.btm1}%,
            0 ${(props) => props.btm1}%
        );
    }
    &:after {
        content: "Hyeon Chul's Portfolio";
        position: absolute;
        left: -2px;
        top: 0;
        text-shadow: -2px 2px #ff3f34;
        clip-path: polygon(
            0 ${(props) => props.top2}%,
            100% ${(props) => props.top2}%,
            100% ${(props) => props.btm2}%,
            0 ${(props) => props.btm2}%
        );
    }
`;
export default function Logo() {
    const [top1, setTop1] = useState<number>(0);
    const [top2, setTop2] = useState<number>(0);
    const [btm1, setBtm1] = useState<number>(0);
    const [btm2, setBtm2] = useState<number>(0);
    const [skew, setSkew] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTop1(Math.random() * 400);
            setTop2(Math.random() * 400);
            setBtm1(Math.random() * 400);
            setBtm2(Math.random() * 400);
            setSkew(Math.random() * 8);
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <Title skew={skew} top1={top1} btm1={btm1} top2={top2} btm2={btm2}>
                Hyeon Chul's{'\n'}Portfolio
            </Title>
        </Container>
    );
}
