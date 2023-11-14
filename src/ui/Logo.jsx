// Styles
import styled from "styled-components";

function Logo() {
  const src = "/logo-mission.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
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
