// React & Libraries
import { useSearchParams } from "react-router-dom";

// UI Components
import { Filter, Input, SortBy, TableOperations } from "../../ui";

function PetTableOperations() {
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
        placeholder="Search for pet name"
        onChange={handleChange}
      />{" "}
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
