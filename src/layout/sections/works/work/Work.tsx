import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};


const StyledWork = styled.div`
    background-color: #f8d452;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`
