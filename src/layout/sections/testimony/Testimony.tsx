import styled from 'styled-components';
import {Icon} from '../../../components/icon/Icon.tsx';
import {Slider} from '../../../components/slider/Slider.tsx';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'}
                         align={'center'}>
                <Icon iconId={'quote'}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #8b58f1;
`
