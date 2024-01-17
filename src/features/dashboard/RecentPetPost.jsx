// Styles
import styled from "styled-components";

// Features Components
import { RecentPetPostItem } from "../index";

// UI Components
import { Heading, Row, Spinner } from "../../ui";

// Hooks
import { usePetsVerfication } from "./usePetsVerfication";

function RecentPetPost() {
  const { petsVerification, isLoading } = usePetsVerfication();

  console.log(petsVerification);

  return (
    <StyledRecentPetPost>
      <Row type="horizontal">
        <Heading as="h2">Non-Verified Pets</Heading>
      </Row>

      {!isLoading ? (
        petsVerification?.length > 0 ? (
          <RecentPetPostList>
            {petsVerification.map(petRecentPost => (
              <RecentPetPostItem
                petRecentPost={petRecentPost}
                key={petRecentPost.id}
              />
            ))}
          </RecentPetPostList>
        ) : (
          <NoActivity>No Recent Post...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledRecentPetPost>
  );
}

const StyledRecentPetPost = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const RecentPetPostList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

export default RecentPetPost;
