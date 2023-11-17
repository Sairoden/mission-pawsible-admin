// Features Components
import { PetRegisterForm } from "../features";

// UI Components
import { Heading } from "../ui";

function PetRegister() {
  return (
    <>
      <Heading as="h1">Register a new pet</Heading>
      <PetRegisterForm />
    </>
  );
}

export default PetRegister;
