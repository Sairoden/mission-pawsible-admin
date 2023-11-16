// Styles
import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.6rem 1.4em;
  border-radius: 100px;
  white-space: nowrap;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${props => props.type}-700);
  background-color: var(--color-${props => props.type}-100);
`;

export default Tag;
