import styled from "styled-components";
import Model from "./model";

const AboutMeDiv = styled.div`
background-color: blue;
`;

const Introduction = styled.div`
  font-size: 22px;
  color : black;
  background-color: white;
  position: absolute;
  margin-top: 10%;
  left: 10%;
`;

function AboutMe() {
    return (
        <AboutMeDiv>
            <Introduction>
                자기소개Div
                <br />
                안녕하세요.
                <br />
                끊임없이 발전하는 개발자가 되고 싶은 신입 개발자 곽민성 입니다.
            </Introduction>
            <Model />
        </AboutMeDiv>
    );
}

export default AboutMe;