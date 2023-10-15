// Styles
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

// UI Components
import { ButtonIcon } from "./index";

// Contexts
import { useDarkMode } from "../contexts/darkMode_context";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
