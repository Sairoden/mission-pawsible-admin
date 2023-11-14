// Features Components
import { BookingTable, BookingTableOperations } from "../features";

// UI Components
import { Heading, Row } from "../ui";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Pets</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
