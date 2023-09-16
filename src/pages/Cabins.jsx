// React & Libraries
import { useEffect } from "react";

// UI Components
import { Heading, Row } from "../ui";

// Services
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then(data => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Test</p>
      <img
        src="https://smdxavevbbioiiyzrtzq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
