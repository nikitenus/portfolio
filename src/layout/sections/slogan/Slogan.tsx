import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import {Button} from '../../../components/Button.tsx';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #aea864;
`
