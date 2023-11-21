// React & Libraries
import { useSearchParams } from "react-router-dom";

// Features Components
import { PetRow } from "../index";

// UI Components
import { Table, Menus, Empty, Spinner, Pagination } from "../../ui";

// Hooks
import { usePets } from "./usePets";

function PetTable() {
  let { isLoading, pets, count } = usePets();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!pets.length) return <Empty resourceName="pets" />;

  return (
    <Menus>
      <Table columns="1fr 2.5fr 2fr 2fr 2.5fr 3fr 2fr 3.2rem">
        {/* 0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem/ */}
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
          data={pets}
          render={pet => <PetRow key={pet.id} pet={pet} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PetTable;
