import {Icon} from '../icon/Icon.tsx';
import * as React from "react";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <a onClick={()=>scroll.scrollToTop()}>
            <Icon iconId={'code'}/>
        </a>
    );
};