import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: red;
    color: white;
`;
const Category = styled.div`
    font-size: 33px;
`;

export function Header() {

    return (
        <HeaderDiv>
            <Category>
                하이하이하이
            </Category>
        </HeaderDiv>
    );
}

