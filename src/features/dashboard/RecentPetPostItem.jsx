// React & Libraries
import { Link } from "react-router-dom";

// Styles
import styled from "styled-components";

// UI Components
import { Button, Tag } from "../../ui";

function RecentPetPostItem({ petRecentPost }) {
  const {
    id,
    users: { firstName, lastName },
    status,
    petType,
  } = petRecentPost;

  return (
    <StyledRecentPetPostItem>
      {status === "Lost" && <Tag type="red">Lost Pet</Tag>}
      {status === "Found" && <Tag type="green">Found Pet</Tag>}

      <User>
        {firstName} {lastName}
      </User>
      <div>{petType}</div>

      <Button size="small" variation="primary" as={Link} to={`/pets/${id}`}>
        Check
      </Button>
    </StyledRecentPetPostItem>
  );
}

const StyledRecentPetPostItem = styled.li`
  display: grid;
  grid-template-columns: 12rem 2fr 0.5fr 1fr;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const User = styled.div`
  font-weight: 500;
`;

export default RecentPetPostItem;
