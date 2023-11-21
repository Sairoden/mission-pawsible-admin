// Styles
import styled from "styled-components";

// Features Components
import { RecentPetPostItem } from "../index";

// UI Components
import { Heading, Row, Spinner } from "../../ui";

// Hooks
import { usePetRecentPost } from "./usePetRecentPost";

function RecentPetPost() {
  const { petRecentPosts, isLoading } = usePetRecentPost();

  return (
    <StyledRecentPetPost>
      <Row type="horizontal">
        <Heading as="h2">Recent Post</Heading>
      </Row>

      {!isLoading ? (
        petRecentPosts?.length > 0 ? (
          <RecentPetPostList>
            {petRecentPosts.map(petRecentPost => (
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
