import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: red;
    color: white;
`;
const Category = styled.div`
    font-size: 33px;
`;

function Header() {

    return (
        <HeaderDiv>
            <Category>
                헤더 Div
            </Category>
        </HeaderDiv>
    );
}

export default Header;