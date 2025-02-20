import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Menu} from '../../components/menu/Menu.tsx';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #d4ffd3;
    display: flex;
    justify-content: space-between;
`