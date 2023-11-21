// Styles
import styled from "styled-components";

// Features Components
import { Stats, SalesChart, DurationChart, RecentPetPost } from "../index";

// UI Components
import { Spinner } from "../../ui";

// Hooks
import { usePetStats } from "./usePetStats";

function DashboardLayout() {
  let { petStats, isLoading } = usePetStats();

  if (isLoading) return <Spinner />;

  const numLostPets = petStats.filter(pet => pet.status === "Lost").length;
  const numFoundPets = petStats.filter(pet => pet.status === "Found").length;
  const numReunitedPets = petStats.filter(
    pet => pet.status === "Reunited"
  ).length;

  return (
    <StyledDashboardLayout>
      <Stats
        numLostPets={numLostPets}
        numFoundPets={numFoundPets}
        numReunitedPets={numReunitedPets}
        numTotalPets={petStats.length}
      />
      <RecentPetPost />
      <DurationChart petStats={petStats} />
      {/* <SalesChart bookings={bookings} numDays={numDays} /> */}
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
