// Features Components
import { RegisterPet } from "../features";

// UI Components
import { Heading } from "../ui";

function User() {
  return (
    <>
      <Heading as="h1">Register a new pet</Heading>
      <RegisterPet />
    </>
  );
}

export default User;
