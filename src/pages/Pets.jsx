// Features Components
import { PetTable, PetTableOperations } from "../features";

// UI Components
import { Heading, Row } from "../ui";

function Pets() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Pets</Heading>
        <PetTableOperations />
      </Row>

      <PetTable />
    </>
  );
}

export default Pets;
