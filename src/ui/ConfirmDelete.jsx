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
  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        {resourceStatus === "reunite" ? "Reunite" : "Delete"} {resourceName}
      </Heading>

      <p>
        Are you sure you want to{" "}
        {resourceStatus === "reunite" ? "reunite" : "delete"} this{" "}
        {resourceName} permanently?
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
          variation={resourceStatus === "reunite" ? "primary" : "danger"}
          disabled={disabled}
          onClick={handleConfirm}
        >
          {resourceStatus === "reunite" ? "Reunite" : "Delete"}
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
