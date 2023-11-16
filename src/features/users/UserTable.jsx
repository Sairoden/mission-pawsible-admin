// React & Libraries
import { useSearchParams } from "react-router-dom";

// Features Components
import UserRow from "./UserRow";

// UI Components
import { Spinner, Table, Menus } from "../../ui";

// Hooks
import { useUsers } from "./useUsers";

function UserTable() {
  const { users, isLoading } = useUsers();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");

  let sortedUsers;

  if (field === "name") {
    if (direction === "asc")
      sortedUsers = users.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    else
      sortedUsers = users.sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
  } else {
    if (direction === "asc")
      sortedUsers = users.sort((a, b) => a.lastName.localeCompare(b.lastName));
    else
      sortedUsers = users.sort((a, b) => b.lastName.localeCompare(a.lastName));
  }

  return (
    <Menus>
      <Table columns="1.5fr 1.3fr 1.3fr 1.3fr 2.5fr 1.7fr 1.5fr 3.2rem">
        <Table.Header>
          <div></div>
          <div>USER ID</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Email Address</div>
          <div>Contact Number</div>
          <div>Address</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedUsers}
          render={user => <UserRow user={user} key={user.id} />}
        />
      </Table>
    </Menus>
  );
}

export default UserTable;
