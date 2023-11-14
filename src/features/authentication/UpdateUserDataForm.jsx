// React & Libraries
import { useState } from "react";

// UI Components
import { Button, FileInput, Form, Input, FormRow } from "../../ui";

// Hooks
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: {
        firstName: currentFirstName,
        lastName: currentLastName,
        address: currentAddress,
        contactNumber: currentContactNumber,
      },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);
  const [address, setAddress] = useState(currentAddress);
  const [contactNumber, setContactNumber] = useState(currentContactNumber);

  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !address || !contactNumber) return;

    const updateUserData = {
      firstName,
      lastName,
      address,
      contactNumber,
      avatar,
    };

    updateUser(updateUserData, {
      onSuccess: () => {
        setAvatar(null);
        e.target.reset();
      },
    });
  }

  function handleCancel() {
    setFirstName(currentFirstName);
    setLastName(currentLastName);
    setAddress(currentAddress);
    setContactNumber(currentContactNumber);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="First name">
        <Input
          id="firstName"
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Last name">
        <Input
          id="lastName"
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Address">
        <Input
          id="address"
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Contact Number">
        <Input
          id="contactNumber"
          type="text"
          value={contactNumber}
          onChange={e => setContactNumber(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={e => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
