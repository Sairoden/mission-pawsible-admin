// Features Components
import { RegisterPet } from "../features";

// UI Components
import { Heading } from "../ui";

function User() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <RegisterPet />
    </>
  );
}

export default User;
