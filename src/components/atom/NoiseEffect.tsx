import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const NoiseContainer = styled(motion.div)`
    background: url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200%;
    opacity: 1;
    z-index: -1;
`;

export default function NoiseEffect() {
    return (
        <NoiseContainer
            animate={{
                x: ['0%', '-5%', '-10%', '5%', '-5%', '-10%', '15%', '0%', '-15%', '10%', '5%'],
                y: ['0%', '-5%', '5%', '-10%', '15%', '5%', '0%', '10%', '0%', '5%', '0%'],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
            }}
        />
    );
}
