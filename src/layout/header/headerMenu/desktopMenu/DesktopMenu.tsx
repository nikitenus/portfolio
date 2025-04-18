import * as React from "react";
import Menu from "../menu/Menu.tsx";
import { S } from "../HeaderMenu_styles.ts";


export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu></Menu>
        </S.DesktopMenu>
    )
        ;
};



