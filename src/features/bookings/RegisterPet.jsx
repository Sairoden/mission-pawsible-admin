// React & Libraries

// Styles
import styled from "styled-components";

// UI Components
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  Input,
  FormRow,
  Select,
  Textarea,
  FileInput,
} from "../../ui";

// Hooks
import { useRegisterPet } from "./useRegisterPet";

function RegisterPet() {
  const { register, formState, setValue, getValues, handleSubmit, reset } =
    useForm();
  const { errors } = formState;
  const { registerPet, isCreating } = useRegisterPet();

  const onSubmit = data => {
    registerPet(
      { ...data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="User ID" error={errors?.userId?.message}>
        <Input
          type="text"
          id="userId"
          disabled={isCreating}
          {...register("userId", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Pet Name" error={errors?.petName?.message}>
        <Input
          type="text"
          id="petName"
          disabled={isCreating}
          {...register("petName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Pet Type" error={errors?.petType?.message}>
        <FormSelect
          id="petType"
          disabled={isCreating}
          options={[
            { value: "", label: "Select one" },
            { value: "Dog", label: "Dog" },
            { value: "Cat", label: "Cat" },
          ]}
          {...register("petType", { required: "This field is required" })}
          value={getValues("petType")}
          onChange={e => {
            const selectedValue = e.target.value;
            setValue("petType", selectedValue);
          }}
        />
      </FormRow>

      <FormRow label="Breed" error={errors?.breed?.message}>
        <FormSelect
          id="breed"
          disabled={isCreating}
          options={[
            { value: "", label: "Select one" },
            { value: "Husky", label: "Husky" },
            { value: "Golden Retriever", label: "Golden Retriever" },
          ]}
          {...register("breed", { required: "This field is required" })}
          value={getValues("breed")}
          onChange={e => {
            const selectedValue = e.target.value;
            setValue("breed", selectedValue);
          }}
        />
      </FormRow>

      <FormRow label="Color" error={errors?.color?.message}>
        <Input
          type="text"
          id="color"
          disabled={isCreating}
          {...register("color", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Size" error={errors?.size?.message}>
        <FormSelect
          id="size"
          disabled={isCreating}
          options={[
            { value: "", label: "Select one" },
            { value: "Small", label: "Small" },
            { value: "Big", label: "Big" },
          ]}
          {...register("size", { required: "This field is required" })}
          value={getValues("size")}
          onChange={e => {
            const selectedValue = e.target.value;
            setValue("size", selectedValue);
          }}
        />
      </FormRow>

      <FormRow label="Gender" error={errors?.gender?.message}>
        <FormSelect
          id="gender"
          disabled={isCreating}
          options={[
            { value: "", label: "Select one" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          {...register("gender", { required: "This field is required" })}
          value={getValues("gender")}
          onChange={e => {
            const selectedValue = e.target.value;
            setValue("gender", selectedValue);
          }}
        />
      </FormRow>

      <FormRow label="Microchipped" error={errors?.microchipped?.message}>
        <FormSelect
          id="microchipped"
          disabled={isCreating}
          options={[
            { value: "", label: "Select one" },
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
            { value: "Unknown", label: "Unknown" },
          ]}
          {...register("microchipped", { required: "This field is required" })}
          value={getValues("microchipped")}
          onChange={e => {
            const selectedValue = e.target.value;
            setValue("microchipped", selectedValue);
          }}
        />
      </FormRow>

      <FormRow label="Date Last Seen" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          disabled={isCreating}
          {...register("date", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Location Last Seen" error={errors?.location?.message}>
        <Textarea
          type="text"
          id="location"
          defaultValue=""
          disabled={isCreating}
          {...register("location", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Message" error={errors?.message?.message}>
        <Textarea
          type="text"
          id="message"
          defaultValue=""
          disabled={isCreating}
          {...register("message", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.status?.message}>
        <FormSelect
          id="status"
          disabled={isCreating}
          options={[
            { value: "", label: "Select one" },
            { value: "Lost", label: "Lost" },
            { value: "Found", label: "Found" },
            { value: "Reunited", label: "Reunited" },
          ]}
          {...register("status", { required: "This field is required" })}
          value={getValues("status")}
          onChange={e => {
            const selectedValue = e.target.value;
            setValue("status", selectedValue);
          }}
        />
      </FormRow>

      <FormRow label="Upload Your Pet" error={errors?.images?.message}>
        <FileInput
          accept="image/*"
          multiple
          disabled={isCreating}
          id="images"
          {...register("images", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" onClick={reset}>
          Cancel
        </Button>

        <Button disabled={isCreating}>Register pet</Button>
      </FormRow>
    </Form>
  );
}

const FormSelect = styled(Select)`
  width: 100%;
`;

export default RegisterPet;
