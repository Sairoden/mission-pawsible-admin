// Features Components
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

// UI Components
import { Heading, Row } from "../ui";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
