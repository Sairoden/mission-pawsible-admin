// Styles
import styled from "styled-components";
import defaultUser from "../../assets/default-user.jpg";

// Hooks
import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { firstName, lastName, avatar } = user.user_metadata;
  const fullName = `${firstName} ${lastName}`;

  return (
    <StyledUserAvatar>
      <Avatar src={avatar || defaultUser} alt={`Avatar of ${fullName}`} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

export default UserAvatar;
