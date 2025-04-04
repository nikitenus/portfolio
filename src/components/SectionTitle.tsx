import styled from 'styled-components';
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionTitle = styled.h2`
    ${font({family: '"Josefin Sans", sans-serif', weight: 600, Fmin: 30, Fmax: 36})}

    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 90px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`