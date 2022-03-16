import styled from 'styled-components'
import {motion} from 'framer-motion'
export const CardStyled = styled(motion.div)`
    padding: 2em 0 0 1em;
    background-image:url(${({bg}) => bg});
    background-repeat:no-repeat;
    background-size: cover;
    width:100%;
    height:100%;
    min-height:30vh;

    h2{ 
        padding-top:1.1em;
        padding-left:0.2em;
        color:var(--clr_w_primary);
        font-family: 'Josefin Sans', sans-serif;
        font-size:clamp(1.6rem,2vw,2rem);
        text-transform:uppercase;
        width:${({wd}) => wd || "45%"};
    }

    @media (min-width:768px){
        background-image:url(${({bgPC}) => bgPC});
        min-height:60vh;
        background-size: content;
        margin-bottom:1em;
        position:relative;

        h2{ 
        position:absolute;
        bottom:8vh;
        left:2vw;
        color:var(--clr_w_primary);
        font-family: 'Josefin Sans', sans-serif;
        font-size:clamp(1.6rem,1.2vw,1.6rem);
        text-transform:uppercase;
        width:${({wd}) => wd || "55%"};
    }
    }
`