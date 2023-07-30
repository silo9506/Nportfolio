import React from 'react';
import { motion } from 'framer-motion';
import { DefaultTheme, styled } from 'styled-components';
import { GrContact, GrSettingsOption, GrUser } from 'react-icons/gr';
import cssIcon from '../../assets/img/css.png';
import firebaseIcon from '../../assets/img/firebase.png';
import htmlIcon from '../../assets/img/html.png';
import jsIcon from '../../assets/img/js.png';
import reactIcon from '../../assets/img/react.png';
import reduxIcon from '../../assets/img/redux.png';
interface IcircleVariants {
    radius: string;
    index: number;
}
const Container = styled.div`
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Wrapper = styled(motion.div)`
    position: relative;
    color: white;
    font-family: 'Bellefair', serif;
    height: 70%;
    width: 100%;
    /* max-width: 700px; */
    height: 50%;
`;
const CategoryWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;
`;

const Circle = styled(motion.div)`
    background-color: red;
    /* border-radius: ${(props) => props.theme.borderRadius || '0px'}; */
    position: absolute;
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* width: 300px;
height: 300px; */
    &:nth-child(1) {
        background: #333333;
        z-index: -4;
    }
    &:nth-child(2) {
        background: #464646;
        z-index: -3;
    }
    &:nth-child(3) {
        background: #707070;
        z-index: -2;
    }
`;

const Category = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    ul {
        list-style: circle;
        padding: 0 20px;
        li + li {
            margin-top: 2.5px;
        }
    }
    .iconBox {
        margin: 0 auto;
    }
    table {
        td {
            padding: 2.5px 0;
        }
        td + td {
            word-break: break-all;
            padding-left: 24px;
            padding-bottom: 8px;
        }
    }
    .skillIcon {
        width: 2rem;
        height: 2rem;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin: 10px 0;
    padding-bottom: 8px;
    svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    path {
        fill: white;
    }
`;

const circleVariants = {
    animate: (custom: IcircleVariants) => ({
        opacity: 1,
        scale: [0, 0.2, 0.4, 0.6, 0.8, 1 + custom.index / 100],
        rotate: 360,
        borderRadius: [0, custom.radius],
        transition: {
            scale: { duration: 1, delay: custom.index },
            borderRadius: { duration: 1, delay: custom.index + 0.5, ease: 'circIn', times: [0.8, 1] },
            rotate: {
                duration: 3 + custom.index,
                delay: custom.index === 3 ? custom.index * 2 - 1 : custom.index * 2 + 1,
                repeat: Infinity,
            },
        },
    }),
    initial: (delay: number) => ({
        opacity: 0,
        scale: 0,
        borderRadius: '0px',
    }),
};

export default function Profile() {
    return (
        <Container>
            <Wrapper>
                <Circle
                    initial="initial"
                    animate="animate"
                    variants={circleVariants}
                    custom={{ index: 1, radius: '50% 50% 50% 70%/50% 50% 70% 60%' }}
                />
                <Circle
                    initial="initial"
                    animate="animate"
                    variants={circleVariants}
                    custom={{ index: 2, radius: '80% 30% 50% 50%/50%' }}
                />
                <Circle
                    initial="initial"
                    animate="animate"
                    variants={circleVariants}
                    custom={{ index: 3, radius: '40% 40% 50% 40%/30% 50% 50% 50%' }}
                />
                <CategoryWrapper
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 5, duration: 1, type: 'twwen' }}
                >
                    <Category>
                        <Title>
                            <GrUser />
                            Profile
                        </Title>
                        <table>
                            <tbody>
                                <tr>
                                    <td>이름</td>
                                    <td>김현철</td>
                                </tr>
                                <tr>
                                    <td>생년월일</td>
                                    <td>1995.04.23</td>
                                </tr>
                                <tr>
                                    <td>거주지</td>
                                    <td>서울 강북구 수유동</td>
                                </tr>
                            </tbody>
                        </table>
                    </Category>
                    <Category>
                        <Title>
                            <GrContact />
                            Contact
                        </Title>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Tel</td>
                                    <td>010 9506 2826</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>silo9506@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </Category>

                    <Category>
                        <Title>
                            <GrSettingsOption />
                            Skill
                        </Title>
                        <div className="iconBox">
                            <img className="skillIcon" alt="skillIcon" src={cssIcon}></img>
                            <img className="skillIcon" alt="skillIcon" src={jsIcon}></img>
                            <img className="skillIcon" alt="skillIcon" src={htmlIcon}></img>
                            <img className="skillIcon" alt="skillIcon" src={firebaseIcon}></img>
                            <img className="skillIcon" alt="skillIcon" src={reactIcon}></img>
                            <img className="skillIcon" alt="skillIcon" src={reduxIcon}></img>
                        </div>
                    </Category>
                </CategoryWrapper>
            </Wrapper>
        </Container>
    );
}
