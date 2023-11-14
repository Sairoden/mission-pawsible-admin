// React & Libraries
import { useForm } from "react-hook-form";

// UI Components
import { Input, Form, Button, FileInput, Textarea, FormRow } from "../../ui";

// Hooks
import { useEditUser } from "./useEditUser";

function EditUserForm({ userToEdit = {}, handleCloseModal }) {
  const { editUser, isEditing } = useEditUser();
  const isWorking = isEditing;

  const { id: editId, ...editValues } = userToEdit;

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editId ? editValues : {},
  });
  const { errors } = formState;

  const onSubmit = data => {
    const avatar =
      typeof data.avatar === "string" ? data.avatar : data.avatar[0];

    if (editId)
      editUser(
        {
          newUserData: {
            ...data,
            avatar,
          },
          id: editId,
        },
        {
          onSuccess: () => {
            reset();
            handleCloseModal?.();
          },
        }
      );
  };

  const onError = err => console.log(err);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={handleCloseModal ? "modal" : "regular"}
    >
      <FormRow label="First Name" error={errors?.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          disabled={isWorking}
          {...register("firstName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Last Name" error={errors?.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          disabled={isWorking}
          {...register("lastName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Contact Number" error={errors?.contactNumber?.message}>
        <Input
          type="text"
          id="contactNumber"
          disabled={isWorking}
          {...register("contactNumber", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Address" error={errors?.address?.message}>
        <Textarea
          type="text"
          id="address"
          defaultValue=""
          disabled={isWorking}
          {...register("address", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Avatar">
        <FileInput
          accept="image/*"
          id="avatar"
          {...register("avatar", {
            required: editId ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          onClick={() => handleCloseModal?.()}
          variation="secondary"
          type="reset"
          disabled={isWorking}
        >
          Cancel
        </Button>

        <Button disabled={isWorking}>Edit user</Button>
      </FormRow>
    </Form>
  );
}

export default EditUserForm;
