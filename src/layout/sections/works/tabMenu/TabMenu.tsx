import {Link} from '../../../../components/Link.ts';
import {S} from '../Works_Styles.ts';

type MenuPropsType = {
    menuItems: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.menuItems.map((el, index) => <S.ListItem key={index}>
                    <Link href="">{el}</Link>
                </S.ListItem>)}
            </ul>
        </S.TabMenu>
    );
};




