import styled from "styled-components";

const MainDiv = styled.div`
    background-color: red;
    color: white;
    width: 100%;
    height: 1000px;
`;
const Category = styled.div`
    font-size: 33px;
    font-size: 22px;
  color : black;
  background-color: white;
  position: absolute;
  margin-top: 10%;
  left: 10%;
`;

function Header() {

    return (
        <MainDiv>
            <Category>
                자기소개Div
                <br />
                안녕하세요.
                <br />
                끊임없이 발전하는 개발자가 되고 싶은 신입 개발자 곽민성 입니다.
            </Category>
        </MainDiv>
    );
}

export default Header;