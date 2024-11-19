import { motion } from "framer-motion";
import React from "react";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import {Github,Work,Skills,About} from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const Tooltip = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.body : DarkTheme.text};
  font-size: 0.75rem;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  ${Icons} div:hover & {
    opacity: 1;
  }
`;
const IconWrapper = styled.div`
  position: relative; /* Ensures tooltip is positioned relative to the icon */
  display: flex;
  align-items: center;
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <IconWrapper>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0,1,1.5,1] }}
        transition={{ type: "spring", duration: 1, delay: 0.8}}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/NaveenDeveloperR"}
          rel="noreferrer noopener"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
        <Tooltip color={props.theme}>GitHub</Tooltip>
      </motion.div>
      </IconWrapper>
      {/* Work Page Link */}
      <IconWrapper>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink to="/work" style={{ color: "inherit" }}>
          <Work
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
        <Tooltip color={props.theme}>Work</Tooltip>
      </motion.div>
      </IconWrapper>
      {/* Skills Page Link */}
      <IconWrapper>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink to="/skills" style={{ color: "inherit" }}>
          <Skills
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
        <Tooltip color={props.theme}>Skills</Tooltip>
      </motion.div>
      </IconWrapper>
      {/* About Page Link */}
      <IconWrapper>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink to="/about" style={{ color: "inherit" }}>
          <About
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
        <Tooltip color={props.theme}>About</Tooltip>
      </motion.div>
      </IconWrapper>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.7,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
