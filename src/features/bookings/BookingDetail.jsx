// React & Libraries
import { useNavigate } from "react-router-dom";

// Styles
import styled from "styled-components";
import { HiArrowUpOnSquare } from "react-icons/hi2";

// Features Components
import { BookingDataBox } from "../index";

// UI Components
import {
  Row,
  Heading,
  Tag,
  ButtonGroup,
  Button,
  ButtonText,
  Spinner,
  Modal,
  ConfirmDelete,
  Empty,
} from "../../ui";

// Hooks
import { useMoveBack } from "../../hooks";
import { usePet } from "./usePet";
import { useDeletePet } from "./useDeletePet";
import { useUpdatePetStatus } from "./useUpdatePetStatus";

function BookingDetail() {
  const { pet, isLoading } = usePet();
  const { isDeleting, deletePet } = useDeletePet();
  const { updatePetStatus, isUpdating } = useUpdatePetStatus();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!pet) return <Empty resourceName="pet" />;

  const { status, id: petId } = pet;

  const statusToTagName = {
    Lost: "red",
    Found: "green",
    Reunited: "blue",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Pet #{petId}</Heading>
          <Tag type={statusToTagName[status]}>{status} Pet</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      {/* RENDER INPUT HERE */}
      <BookingDataBox pet={pet} />

      <ButtonGroup>
        {status !== "Reunited" && (
          <Modal>
            <Modal.Open opens="reunite">
              <Button>Reunite Pet</Button>
            </Modal.Open>

            <Modal.Window name="reunite">
              <ConfirmDelete
                resourceName="pet"
                resourceStatus="reunite"
                disabled={isUpdating}
                handleConfirm={() =>
                  updatePetStatus(petId, {
                    onSuccess: () => navigate(-1),
                  })
                }
              />
            </Modal.Window>
          </Modal>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete Pet</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="pet"
              disabled={isDeleting}
              handleConfirm={() =>
                deletePet(petId, {
                  onSuccess: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export default BookingDetail;
