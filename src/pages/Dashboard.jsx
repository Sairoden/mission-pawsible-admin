// Features Components
import { DashboardLayout, DashboardFilter } from "../features";

// UI Components
import { Heading, Row } from "../ui";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
