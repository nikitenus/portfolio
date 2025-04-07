import styled from 'styled-components';
import {Icon} from '../../../components/icon/Icon.tsx';
import {Slider} from '../../../components/slider/Slider.tsx';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {Container} from "../../../components/Container.ts";
import {S} from '../skills/Skills_Styles.ts';
import * as React from "react";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'}
                             align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}/>
                    </S.IconWrapper>

                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #8b58f1;

    ${S.IconWrapper} {
        margin: 40px 0 70px;
    }
`
