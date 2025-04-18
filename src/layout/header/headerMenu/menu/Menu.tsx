import * as React from "react";
import {S} from "../HeaderMenu_styles";

// const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Works',
        href: 'works'
    },
    {
        title: 'Testimony',
        href: 'testimony'
    },
    {
        title: 'Contact',
        href: 'contact'
    },
]

const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        offset={130}
                        activeClass="active"
                        smooth
                        to={item.href}
                        spy
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

export default Menu;



