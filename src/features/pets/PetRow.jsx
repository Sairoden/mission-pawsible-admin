// React & Libraries
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

// Styles
import styled from "styled-components";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";

// UI Components
import { Tag, Table, Menus, Modal, ConfirmDelete } from "../../ui";

// Hooks
import { useDeletePet } from "./useDeletePet";

function PetRow({
  pet: {
    id: petId,
    petName,
    petType,
    breed,
    color,
    size,
    gender,
    location,
    date,
    status,
    lat,
    lng,
    users: { firstName, lastName, email },
  },
}) {
  const statusToTagName = {
    Lost: "red",
    Found: "green",
    Reunited: "blue",
  };

  const navigate = useNavigate();
  const { isDeleting, deletePet } = useDeletePet();

  return (
    <Table.Row>
      <Cabin>{petId}</Cabin>
      <Stacked>
        <span>
          {firstName} {lastName}
        </span>
        <span>
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </Stacked>
      <Stacked>
        <span>{petName}</span>
        <span>{gender}</span>
      </Stacked>
      <Stacked>
        <span>{petType}</span>
        <span>{breed}</span>
      </Stacked>
      <Stacked>
        <span>{color}</span>
        <span>Size: {size}</span>
      </Stacked>
      <Stacked>
        <span>{format(new Date(date), "MMM dd yyyy")}</span>
        <a
          href={`https://www.google.com/maps/@${lat},${lng},18z?entry=ttu`}
          // href={`https://www.google.com/maps/@52.0237,58.7074632,6.49z?entry=ttu`}
          target="_blank"
          rel="noreferrer"
        >
          <span>{location}</span>
        </a>
      </Stacked>
      <Tag type={statusToTagName[status]}>{status} Pet</Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={petId} />
          <Menus.List id={petId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/pets/${petId}`)}
            >
              See details
            </Menus.Button>

            <Menus.Button
              icon={<HiPencil />}
              onClick={() => navigate(`/pets/edit/${petId}`)}
            >
              Edit
            </Menus.Button>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="pet"
            disabled={isDeleting}
            handleConfirm={() => deletePet(petId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

export default PetRow;
