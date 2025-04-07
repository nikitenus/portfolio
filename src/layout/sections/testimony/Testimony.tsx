import styled from 'styled-components';
import {Icon} from '../../../components/icon/Icon.tsx';
import {Slider} from '../../../components/slider/Slider.tsx';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {IconWrapper} from "../skills/skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'}
                             align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}/>
                    </IconWrapper>

                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #8b58f1;

    ${IconWrapper} {
        margin: 40px 0 70px;
    }
`
