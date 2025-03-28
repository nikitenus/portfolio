import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

type MenuPropsType = {
    menuItems: Array<string>
}

export const MobileHeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledHeaderMobileMenu>
            <BurgerButton isOpen={false}>
                <span>

                </span>
            </BurgerButton>

            <MobileHeaderMenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileHeaderMenuPopup>
        </StyledHeaderMobileMenu>
    );
};

const StyledHeaderMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        &::before {
            content: "";
            display: block;
            width: 23px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                width: 36px;
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
    }

`

const MobileHeaderMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(31, 31, 32, 0.90);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999999;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {

        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`

