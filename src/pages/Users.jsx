// Features Components
import { SignupForm } from "../features";

// UI Components
import { Heading } from "../ui";

function Users() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default Users;
