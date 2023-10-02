// Features Components
import { BookingTable } from "../features";

// UI Components
import { Heading, Row } from "../ui";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
