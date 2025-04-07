import {Logo} from '../../components/logo/Logo.tsx';
import {Container} from '../../components/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.ts';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu.tsx';
import {MobileMenu} from './headerMenu/mobileHeaderMenu/MobileMenu.tsx';
import * as React from "react";
import {S} from './Header_Styles.ts';
import {useEffect, useState} from "react";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindwResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindwResize);
        return () => window.removeEventListener("resize", handleWindwResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint
                        ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

