// React & Libraries
import { format, isToday } from "date-fns";
import { useNavigate } from "react-router-dom";

// Styles
import styled from "styled-components";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

// UI Components
import { Tag, Table, Menus, Modal, ConfirmDelete } from "../../ui";

// Hooks
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

// Utilities
import { formatCurrency, formatDistanceFromNow } from "../../utils";

function BookingRow({
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
  pet,
}) {
  const statusToTagName = {
    Lost: "red",
    Found: "green",
    Reunited: "blue",
  };

  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

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
          href={`https://www.google.com/maps/@${lat},${lng}`}
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

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            handleConfirm={() => deleteBooking(petId)}
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

export default BookingRow;
