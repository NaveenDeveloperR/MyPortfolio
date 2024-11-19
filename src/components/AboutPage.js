import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import astronaut from '../assets/Images/spaceman.png';

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }} // Background fades in
                exit={{
                    opacity: 0, transition: { duration: 0.5 }
                  }}
            >
                <LogoComponent theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />
                <ParticleComponent theme="dark" />

                <Spaceman
                    initial={{ top: '100vh', right: '-20vw' }} // Off-screen bottom-right
                    animate={{ top: '10vh', right: '5vw' }}      // Final position in viewport
                    transition={{ delay: 0.5, duration: 2}}     // Delay and duration for smooth effect
                >
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }} // Card content fades in second
                    
                >
                
                    I'm a Full Stack Developer from India. I love building complete applications, making sure the backend and frontend work well together for a smooth user experience.
                    <br /> <br />
                    I'm interested to explore new technologies and use AI/ML to solve real-world problems. I enjoy taking on challenges that help me grow personally and professionally. I love to write journals and read books.
                    <br /> <br />
                    I believe every project is a chance to create something meaningful, and I approach each one with focus and enthusiasm.
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    );
};

export default AboutPage;
