// Features Components
import { PetEditForm } from "../features";

// UI Components
import { Heading } from "../ui";

function PetEdit() {
  return (
    <>
      <Heading as="h1">Edit your pet</Heading>
      <PetEditForm />
    </>
  );
}

export default PetEdit;
