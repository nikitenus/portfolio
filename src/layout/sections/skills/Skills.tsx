import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Skill} from './skill/Skill.tsx';
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'code'}
                           title={'html5'}
                           description={'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'css'}
                           title={'css'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'react'}
                           title={'react'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'typeScript'}
                           title={'typescript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'styled'}
                           title={'styled components'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'figma'}
                           title={'WEB DESIgN'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`


`