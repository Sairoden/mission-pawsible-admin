// UI Components
import { TableOperations, Filter } from "../../ui";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "noDiscount", label: "No discount" },
          { value: "withDiscount", label: "With Discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
