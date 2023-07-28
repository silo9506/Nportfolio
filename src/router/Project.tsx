import React, { useState } from 'react';
import { styled } from 'styled-components';
import { projects } from '../data/projects';
import ProjectCard from '../components/atom/ProjectCard';

const Container = styled.div`
    min-height: 100vh;
    padding: 60px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1050px;
    margin: 0 auto;
`;

const Title = styled.div`
    text-align: center;
    margin: 50px 0px;
    font-size: 40px;
    font-weight: bold;
`;

export default function Project() {
    return (
        <Container>
            <Title>PROJECT</Title>
            <Box>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project}></ProjectCard>
                ))}
            </Box>
        </Container>
    );
}
