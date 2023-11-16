// Styles
import styled from "styled-components";

/* 
input[type="date"]::-webkit-calendar-picker-indicator {
  color: rgba(0, 0, 0, 0);
  opacity: 1;
  display: block;
  background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;
  width: 20px;
  height: 20px;
  border-width: thin;
} */

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  padding: 0.8rem 5rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);

  &[type="date"]::-webkit-calendar-picker-indicator {
    /* font-size: 3rem; Adjust the size as needed */
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png)
      no-repeat;
    width: 20px;
    height: 25px;
  }
`;

export default Input;
