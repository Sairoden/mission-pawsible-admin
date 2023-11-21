// React & Libraries
import { useSearchParams } from "react-router-dom";

// UI Components
import { TableOperations, SortBy, Input } from "../../ui";

function UserTableOperations() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    searchParams.set("name", e.target.value.toLowerCase());
    setSearchParams(searchParams);
  };

  return (
    <TableOperations>
      <Input
        type="text"
        id="userId"
        placeholder="Search for name"
        onChange={handleChange}
      />
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
