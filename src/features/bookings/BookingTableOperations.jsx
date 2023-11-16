// UI Components
import { Filter, TableOperations } from "../../ui";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "Lost", label: "Lost Pets" },
          { value: "Found", label: "Found Pets" },
          { value: "Reunited", label: "Reunited Pets" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
