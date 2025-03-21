import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Container} from '../../components/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {HeaderMenu} from './headerMenu/HeaderMenu.tsx';
import {MobileHeaderMenu} from './mobileHeaderMenu/MobileHeaderMenu.tsx';

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
    return (
        <StyledHeaderMenu>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileHeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`