import {Icon} from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {S} from '../Skills_Styles.ts';

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}
                          viewBox={"0 0 50 50"}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText></FlexWrapper>
        </S.Skill>
    );
};
