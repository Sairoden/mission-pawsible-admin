// UI Components
import { TableOperations, Filter, SortBy } from "../../ui";

function UserTableOperations() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by First Name (A-Z)" },
          { value: "name-desc", label: "Sort by First Name (Z-A)" },
          { value: "last-asc", label: "Sort by Last Name (A-Z)" },
          { value: "last-desc", label: "Sort by Last Name (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default UserTableOperations;
