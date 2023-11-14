// Features Components
import { UserTable, UserTableOperations } from "../features";

// UI Components
import { Heading, Row } from "../ui";

function Users() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Users</Heading>
        <UserTableOperations />
      </Row>

      <Row>
        <UserTable />
      </Row>
    </>
  );
}

export default Users;
