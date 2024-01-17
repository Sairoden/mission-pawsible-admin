// Styles
import styled from "styled-components";

// UI Components
import { Button, Heading } from "./index";

function ConfirmDelete({
  resourceName,
  handleConfirm,
  disabled,
  handleCloseModal,
  resourceStatus = "delete",
}) {
  let resourceStatusTag;

  if (resourceStatus === "reunite") resourceStatusTag = "Reunite";
  if (resourceStatus === "delete") resourceStatusTag = "Delete";
  if (resourceStatus === "verify") resourceStatusTag = "Verify";

  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        {resourceStatusTag} {resourceName}
      </Heading>

      <p>
        Are you sure you want to {resourceStatusTag} this {resourceName}{" "}
        permanently? Please note that this is irreversible.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={handleCloseModal}
        >
          Cancel
        </Button>
        <Button
          variation={
            resourceStatus === "reunite" || resourceStatus === "verify"
              ? "primary"
              : "danger"
          }
          disabled={disabled}
          onClick={handleConfirm}
        >
          {resourceStatusTag}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export default ConfirmDelete;
