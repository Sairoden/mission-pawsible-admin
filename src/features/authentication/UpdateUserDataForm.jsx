// React & Libraries
import { useState } from "react";

// UI Components
import { Button, FileInput, Form, Input, FormRow } from "../../ui";

import { useUser } from "./useUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          id="fullName"
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <Input
          id="avatar"
          accept="image/*"
          onChange={e => setAvatar(e.target.files[0])}
        />
      </FormRow>

      <FormRow>
        <Button type="reset" variation="secondary">
          Cancel
        </Button>

        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
