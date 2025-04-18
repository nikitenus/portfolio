import Menu from "../menu/Menu.tsx";
import * as React from "react";
import {S} from '../HeaderMenu_styles.ts';
import {useState} from "react";

export const MobileMenu: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const burgerMenuHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={burgerMenuHandler}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isOpen} onClick={() => {
                setIsOpen(false)
            }}>
                <Menu></Menu>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};





