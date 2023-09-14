// Styles
import styled from "styled-components";

const Heading = styled.h1`
  ${props =>
    props.type === "h1" &&
    `
  font-size: 3rem;
  font-weight: 600;
  `}

  ${props =>
    props.type === "h2" &&
    `
  font-size: 2rem;
  font-weight: 600;
  `}

${props =>
    props.type === "h3" &&
    `
  font-size: 2rem;
  font-weight: 500;
  `}

  line-height: 1.4
`;

export default Heading;
