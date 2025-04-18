import {Link} from '../../../../components/Link.ts';
import {Button} from '../../../../components/Button.ts';
import * as React from "react";
import {S} from '../Works_Styles.ts';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active={true} href={'#'}>Demo</Link>
                <Link active={false} href={'#'}>code</Link>
            </S.Description>
        </S.Work>
    );
};


