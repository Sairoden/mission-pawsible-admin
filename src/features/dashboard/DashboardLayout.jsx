// Styles
import styled from "styled-components";

// Features Components
import { Stats, SalesChart, DurationChart, Today } from "../index";

// UI Components
import { Spinner } from "../../ui";

// Hooks
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
// import { useCabins } from "../cabins/useCabins";

function DashboardLayout() {
  const { isLoading: isLoadingBookings, bookings } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  // const { cabins, isLoadingCabins } = useCabins();
  const cabins = [];
  const isLoadingCabins = false;

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length || 0}
      />
      <Today />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default DashboardLayout;
