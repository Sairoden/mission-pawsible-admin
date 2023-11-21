// Features Components
import { DashboardLayout } from "../features";

// UI Components
import { Heading, Row } from "../ui";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
