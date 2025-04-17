import photo from '../../../assets/images/photo.jpeg'
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {Container} from '../../../components/Container.ts';
import * as React from "react";
import {S} from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <S.TextWrapper>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>
                            I am
                            <span> Vlad Nikitenkov</span>
                        </S.Name>
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 200,
                                }}
                            />

                        </S.MainTitle>
                    </S.TextWrapper>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};