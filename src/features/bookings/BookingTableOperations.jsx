// UI Components
import { Filter, TableOperations } from "../../ui";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "lost", label: "Lost Pets" },
          { value: "found", label: "Found Pets" },
          { value: "reunited", label: "Reunited Pets" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
