import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Skill} from './skill/Skill.tsx';
import {Container} from "../../../components/Container.ts";
import {S} from './Skills_Styles.ts';

const skillData = [
    {
        iconId: 'code',
        title: 'html5',
        description: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: 'css3',
        description: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: 'react',
        description: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'typeScript',
        title: 'typeScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'styled',
        title: 'styled components',
        description: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'figma',
        title: 'WEB DESIgN',
        description: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {
                        skillData.map((el, index) => {
                            return <Skill iconId={el.iconId} title={el.title}
                                          description={el.description} key={index}/>
                        })
                    }
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
