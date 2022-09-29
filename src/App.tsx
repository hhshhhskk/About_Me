import Main from "./components/Main";
import Skill from "./components/Skill";
import Project from "./components/Project";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";

const Wrapper = styled.div`
  position: relative;
`;


function App() {

  return (
    <Wrapper>
      <Main />
      <Skill />
      <Project />
      <AboutMe />
    </Wrapper>
  );
}

export default App;
