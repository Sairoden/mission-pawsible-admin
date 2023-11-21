// UI Components
import { Filter, SortBy, TableOperations } from "../../ui";

function PetTableOperations() {
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
      <SortBy
        options={[
          { value: "Oldest", label: "Sort by Oldest" },
          { value: "Newest", label: "Sort by Newest" },
        ]}
      />
    </TableOperations>
  );
}

export default PetTableOperations;
