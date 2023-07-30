import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const Container = styled(motion.div)`
    width: 100%;
    background-color: #f0f0f012;
    border-radius: 8px;
    padding: 20px 40px;
    h1 {
        font-size: 32px;
        padding-bottom: 20px;
        text-align: center;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 20px 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
        flex-direction: column;
    }
`;

const ImgBox = styled.div`
    flex-grow: 1;
    max-width: 50%;
    min-width: 50%;
    position: relative;
    overflow: hidden;
    height: 350px;
    &:hover {
        .nav-button {
            opacity: 1;
            pointer-events: auto;
        }
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 0 5px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        max-width: 100%;
    }
`;

const Img = styled(motion.div)`
    border-radius: 10px;
    display: flex;
    background-color: #000000a6;
    overflow: hidden;
    img {
        width: 100%;
        height: 350px;
    }
`;

const NavButton = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    z-index: 1;

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(0, 0, 0, 0.6);
    }
`;

const LeftNavButton = styled(NavButton)`
    left: 0px;
`;

const RightNavButton = styled(NavButton)`
    right: 0px;
`;

const InfoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 38px;
    hr {
        width: 30%;
        margin-left: 0px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
        hr {
            width: 80%;
        }
        padding: 0 10px;
    }
`;
const InfoTitle = styled.div`
    margin-top: 15px;
`;
const Info = styled.div`
    ul {
        list-style: circle;
        padding: 0px 20px;
    }
    li {
        padding: 5px 0px;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    gap: 20px;
    margin-top: 20px;
`;

const Button = styled.button`
    cursor: pointer;
    color: white;
    border: transparent;
    border-radius: 5px;
    background-color: #313131;
    padding: 10px 15px;
    font-size: 16px;
    &:first-child {
        background-color: #009688;
    }
`;

interface IProjectCard {
    title: string;
    skile: string[];
    url: string;
    git: string;
    img: string[];
    about: string | JSX.Element;
}

const imgVariants = {
    move: {
        x: '0%',
        opacity: 1,
    },

    init: (forward: boolean | null) => ({
        x: forward === null ? '0%' : forward ? '80%' : '-80%',
        opacity: 0,
    }),
};

const containerVariants = {
    init: {
        scale: 0.1,
        opacity: 0,
    },
    show: () => ({
        scale: 1,
        opacity: 1,
        skew: [-180, 180],
    }),
};

export default function ProjectCard(project: IProjectCard) {
    const [index, setIndex] = useState(1);
    const [forward, setForward] = useState<null | boolean>(null);

    const onClickNext = () => {
        setForward(true);
        setIndex((prev) => {
            if (prev === project.img.length) {
                return 1;
            }
            return prev + 1;
        });
    };

    const onClickPrev = () => {
        setForward(false);
        setIndex((prev) => {
            if (prev === 1) {
                return project.img.length;
            }
            return prev - 1;
        });
    };

    return (
        <Container viewport={{ amount: 0 }} initial="init" variants={containerVariants} whileInView="show">
            <h1>{project.title}</h1>
            <Wrapper>
                <ImgBox>
                    <LeftNavButton className="nav-button" onClick={onClickPrev}>
                        <BiSolidLeftArrow />
                    </LeftNavButton>
                    <Img>
                        {project.img.map(
                            (img, imgIndex) =>
                                index === imgIndex + 1 && (
                                    <motion.img
                                        key={imgIndex}
                                        src={img}
                                        variants={imgVariants}
                                        transition={{ type: 'tween' }}
                                        animate="move"
                                        initial="init"
                                        custom={forward}
                                    />
                                )
                        )}
                    </Img>
                    <RightNavButton className="nav-button" onClick={onClickNext}>
                        <BiSolidRightArrow />
                    </RightNavButton>
                </ImgBox>
                <InfoBox>
                    <Info>{project.about}</Info>
                    <InfoTitle>라이브러리</InfoTitle>
                    <hr />
                    <Info>
                        <ul>
                            {project.skile.map((skile, index) => (
                                <li key={index}>{skile}</li>
                            ))}
                        </ul>
                    </Info>

                    <Buttons>
                        <Button className="p-2 bg-[#313131] rounded shadow-inner cursor-pointer  ">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                Demo Page
                            </a>
                        </Button>
                        <Button className="p-2 bg-[#313131] rounded shadow-inner cursor-pointer  ">
                            <a href={project.git} target="_blank" rel="noopener noreferrer">
                                <BsGithub />
                            </a>
                        </Button>
                    </Buttons>
                </InfoBox>
            </Wrapper>
        </Container>
    );
}
