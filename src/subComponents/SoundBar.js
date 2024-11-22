import React, { useRef, useState,useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocation } from 'react-router-dom'; // Import useLocation for route changes

import music from "../assets/audio/whip-afro-dancehall-music-110235.mp3"

const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:8rem;
top:3rem;
z-index:10;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem
`

const SoundBar = ({ clickcount }) => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);
    const hasInitialized = useRef(false); // Ref to track if initialization has occurred
    const currentLocation = useLocation(); // Renamed to avoid conflict with global 'location'

    useEffect(() => {
        if (clickcount === 1 && !hasInitialized.current) {
            setClick(true); // Initialize the click state when clickCount is 1
            ref.current.play();  // Play the audio when click is true
            hasInitialized.current = true; // Set the flag to true so it doesn't run again
        }
    }, [clickcount]); // Only run when clickCount changes

    // Pause music when the user switches tabs
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden && click) {
                ref.current.pause(); // Pause the audio if the page is hidden
            } else if (!document.hidden && click) {
                ref.current.play(); // Resume the audio if the page becomes visible
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [click]);
    // Stop music when the user navigates to a different page
    useEffect(() => {
        setClick(false); // Reset click state
        if (ref.current) {
            ref.current.pause(); // Pause the audio
            ref.current.currentTime = 0; // Reset audio to the start
        }
    }, [currentLocation]); // Run whenever the route changes

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />


            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default SoundBar
