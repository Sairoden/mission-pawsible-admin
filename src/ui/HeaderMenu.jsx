// React & Libraries
import { useNavigate } from "react-router-dom";

// Styles
import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";

// Features Components
import { Logout } from "../features";

// UI Components
import { ButtonIcon, DarkModeToggle } from "./index";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle />
      </li>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export default HeaderMenu;
