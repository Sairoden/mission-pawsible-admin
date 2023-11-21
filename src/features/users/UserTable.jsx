// React & Libraries
import { useSearchParams } from "react-router-dom";

// Features Components
import UserRow from "./UserRow";

// UI Components
import { Spinner, Table, Menus, Pagination, Empty } from "../../ui";

// Hooks
import { useUsers } from "./useUsers";
import { useAllUsers } from "./useAllUsers";

function UserTable() {
  const { users, isLoading, count } = useUsers();
  const { allUsers } = useAllUsers();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!users.length) return <Empty resourceName="users" />;

  // Search for Users
  const sortBy = searchParams.get("name") || "";
  let sortedUsers;

  if (sortBy) {
    sortedUsers = allUsers.filter(
      user =>
        user.firstName.toLowerCase().includes(sortBy) ||
        user.lastName.toLowerCase().includes(sortBy)
    );
  }

  sortedUsers = sortedUsers ? sortedUsers : users;

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

        <Table.Footer>
          <Pagination count={!sortBy ? count : sortedUsers.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UserTable;
