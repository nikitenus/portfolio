import {Link} from '../../../../components/Link.ts';
import {S} from '../Works_Styles.ts';

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type MenuPropsType = {
    tabsItems: Array<{ title: string, status: TabsStatusType }>
    changeFilterStatus: (value: TabsStatusType) => void
    filterStatus: string
}

export const TabMenu = (props: MenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((el, index) => <S.ListItem key={index}>
                    <Link active={props.filterStatus === el.status} as={"button"}
                          onClick={() => props.changeFilterStatus(el.status)}>{el.title}</Link>
                </S.ListItem>)}
            </ul>
        </S.TabMenu>
    );
};




