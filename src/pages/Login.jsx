// Styles
import styled from "styled-components";

function Login() {
  return <LoginLayout>Login</LoginLayout>;
}

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

export default Login;
