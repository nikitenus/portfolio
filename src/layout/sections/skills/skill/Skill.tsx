import {Icon} from '../../../../components/icon/Icon.tsx';
import styled from 'styled-components';
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const  Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={props.iconId}
                    viewBox={"0 0 50 50"}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText></FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    flex-grow: 1;
    padding: 62px 20px 40px;
    
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`

export const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 80px;
        width: 80px;
        background: rgba(255, 255, 255, 0.10);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
`