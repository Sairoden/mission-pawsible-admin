// React & Libraries
import { useSearchParams } from "react-router-dom";

// Features Components
import { PetRow } from "../index";

// UI Components
import { Table, Menus, Empty, Spinner, Pagination } from "../../ui";

// Hooks
import { usePets } from "./usePets";
import { usePetStats } from "../dashboard/usePetStats";

function PetTable() {
  let { isLoading, pets, count } = usePets();
  let { petStats } = usePetStats();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!pets.length) return <Empty resourceName="pets" />;

  // Search for Pet Owners
  const sortBy = searchParams.get("name") || "";
  let sortedPets;

  if (sortBy) {
    sortedPets = petStats.filter(
      pet =>
        pet.users.firstName.toLowerCase().includes(sortBy) ||
        pet.users.lastName.toLowerCase().includes(sortBy)
    );
  }

  sortedPets = sortedPets ? sortedPets : pets;

  return (
    <Menus>
      <Table columns="1fr 3.3fr 2fr 2fr 2.5fr 3fr 2fr 3.2rem">
        <Table.Header>
          <div>Pet ID</div>
          <div>User Name</div>
          <div>Pet Name</div>
          <div>Pet Type</div>
          <div>Attributes</div>
          <div>Date</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedPets}
          render={pet => <PetRow key={pet.id} pet={pet} />}
        />

        <Table.Footer>
          <Pagination count={!sortBy ? count : sortedPets.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PetTable;
