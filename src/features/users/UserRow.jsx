// Styles
import styled from "styled-components";
import { HiPencil, HiTrash } from "react-icons/hi2";

// Features Components
import EditUserForm from "./EditUserForm";

// UI Components
import { Modal, ConfirmDelete, Table, Menus } from "../../ui";

// Hooks
import { useDeleteUser } from "./useDeleteUser";

function UserRow({ user }) {
  const { isDeleting, deleteUser } = useDeleteUser();

  const {
    id: userId,
    firstName,
    lastName,
    email,
    address,
    contactNumber,
    avatar,
  } = user;

  const handleDelete = () => deleteUser(userId);

  return (
    <Table.Row>
      <Img src={avatar} alt={`Avatar of ${firstName} ${lastName}`} />
      <div>{userId}</div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{contactNumber}</div>
      <div>{address}</div>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={userId} />

            <Menus.List id={userId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <EditUserForm userToEdit={user} handleCloseModal="regular" />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="user"
                disabled={isDeleting}
                handleConfirm={handleDelete}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(2) translateX(15px);
`;

export default UserRow;
