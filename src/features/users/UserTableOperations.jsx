// UI Components
import { TableOperations, Filter, SortBy } from "../../ui";

function UserTableOperations() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: "firstName-asc", label: "Sort by First Name (A-Z)" },
          { value: "firstName-desc", label: "Sort by First Name (Z-A)" },
          { value: "lastName-asc", label: "Sort by Last Name (A-Z)" },
          { value: "lastName-desc", label: "Sort by Last Name (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default UserTableOperations;
