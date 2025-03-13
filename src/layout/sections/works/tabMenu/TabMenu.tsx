import styled from 'styled-components';
import {Link} from '../../../../components/Link.tsx';

type MenuPropsType = {
    menuItems: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((el, index) => <ListItem key={index}>
                    <Link href="">{el}</Link>
                </ListItem>)}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`

const ListItem = styled.li`
    
`


