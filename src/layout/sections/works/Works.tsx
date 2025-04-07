import {SectionTitle} from '../../../components/SectionTitle.ts';
import {TabMenu} from './tabMenu/TabMenu.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {Work} from './work/Work.tsx';
import socialImg from '../../../assets/images/proj-1.webp'
import timer from '../../../assets/images/proj-2.webp'
import {Container} from '../../../components/Container.ts';
import * as React from "react";
import { S } from './Works_Styles.ts';


const worksItems = ['All', 'landing page', 'React', 'spa']

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        title: 'Timer',
        src: timer,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((el, index) => <Work key={index} title={el.title} text={el.text} src={el.src}/>)}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

