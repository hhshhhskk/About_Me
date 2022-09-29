import styled from "styled-components";
import Model from "./model";

const AboutMeDiv = styled.div`
background-color: blue;
`;

const Address = styled.div`
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
            <Address>
                주소Div
                <br />
                깃헙
                <br />
                블로그
            </Address>
            <Model />
        </AboutMeDiv>
    );
}

export default AboutMe;