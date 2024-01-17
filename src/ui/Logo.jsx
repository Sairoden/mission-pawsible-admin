// Styles
import styled from "styled-components";
import logo from "../assets/logo-mission.png";

function Logo() {
  return (
    <StyledLogo>
      <Img src={logo} alt="Logo" />
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 18.6rem;
  width: auto;
`;

export default Logo;
