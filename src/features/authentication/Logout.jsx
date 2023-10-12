// Styles
import { HiArrowRightOnRectangle } from "react-icons/hi2";

// UI Components
import { ButtonIcon, SpinnerMini } from "../../ui";

// Hooks
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
