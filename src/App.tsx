import Header from "./components/Header";
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
      <Header />
      <AboutMe />
      <Skill />
      <Project />
    </Wrapper>
  );
}

export default App;
