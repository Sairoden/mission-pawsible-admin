// React & Libraries
import { useSearchParams } from "react-router-dom";

// Features Components
import CabinRow from "./CabinRow";

// UI Components
import { Spinner, Table, Menus } from "../../ui";

// Hooks
import { useCabins } from "./useCabins";

function CabinTable() {
  const { cabins, isLoading } = useCabins();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;

  // 1) FILTER
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "noDiscount")
    filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  if (filterValue === "withDiscount")
    filteredCabins = cabins.filter(cabin => cabin.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  // SORT BY NAME
  if (sortBy.includes("name")) {
    if (sortBy === "name-asc")
      sortedCabins = filteredCabins.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    else {
      sortedCabins = filteredCabins.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={cabin => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
