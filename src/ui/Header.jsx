// Styles
import styled from "styled-components";

// UI Components
import { Logout } from "../features";

function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
`;

export default Header;
