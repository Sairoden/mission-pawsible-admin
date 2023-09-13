// Styles
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

// UI Components
// import { Button } from "./ui";
import Button from "./ui/Button";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>hello world</H1>

        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const H1 = styled.h1`
  font-size: 100px;
  font-weight: 600;
`;

export default App;
