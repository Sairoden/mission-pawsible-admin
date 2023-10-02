// Features Components
import { CabinTable, AddCabin, CabinTableOperations } from "../features";

// UI Components
import { Heading, Row } from "../ui";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
