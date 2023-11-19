// React & Libraries
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

// Styles
import styled from "styled-components";

// UI Components
import {
  Button,
  Form,
  Input,
  FormRow,
  Select,
  Textarea,
  FileInput,
  Spinner,
  Empty,
} from "../../ui";

// Utilities
import { inputFormat } from "../../utils";

// Hooks
import { usePet } from "./usePet";
import { useUpdatePet } from "./useUpdatePet";
import { useEffect } from "react";

function PetEditForm() {
  const { pet, isLoading } = usePet();
  const { updatePet, isEditing } = useUpdatePet();
  const navigate = useNavigate();

  const {
    register,
    formState,

    handleSubmit,
    control,
  } = useForm();
  const { errors } = formState;

  if (isLoading) return <Spinner />;
  if (!pet) return <Empty resourceName="pet" />;

  let {
    id,
    userId,
    petName,
    petType,
    breed,
    color,
    size,
    gender,
    location,
    microchipped,
    date,
    message,
    description,
    status,
  } = pet;

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = data => {
    data.petName = inputFormat(data.petName);
    data.color = inputFormat(data.color);
    data.location = inputFormat(data.location);
    data.description = inputFormat(data.description);
    data.message = inputFormat(data.message);

    updatePet(
      {
        newPetData: {
          ...data,
        },
        id,
      },
      {
        onSuccess: () => {
          navigate(-1);
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
          disabled={isEditing}
          {...register("userId", { required: "This field is required" })}
          defaultValue={userId}
        />
      </FormRow>

      <FormRow label="Pet Name" error={errors?.petName?.message}>
        <Input
          type="text"
          id="petName"
          disabled={isEditing}
          defaultValue={petName}
          {...register("petName", {
            required: "This field is required",
            onChange: e => {
              e.target.value =
                e.target.value.charAt(0).toUpperCase() +
                e.target.value.slice(1);
            },
          })}
        />
      </FormRow>

      <FormRow label="Pet Type" error={errors?.petType?.message}>
        <Controller
          name="petType"
          control={control}
          defaultValue={petType} // Set the defaultValue to the value you want
          rules={{ required: "Please select a pet type" }} // Add the required validation rule
          render={({ field }) => (
            <FormSelect
              id="petType"
              disabled={isEditing}
              options={[
                { value: "", label: "Select one" },
                { value: "Dog", label: "Dog" },
                { value: "Cat", label: "Cat" },
              ]}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Breed" error={errors?.breed?.message}>
        <Controller
          name="breed"
          control={control}
          defaultValue={breed} // Set the defaultValue to the value you want
          rules={{ required: "Please select a breed" }} // Add the required validation rule
          render={({ field }) => (
            <FormSelect
              id="breed"
              disabled={isEditing}
              options={[
                { value: "", label: "Select one" },
                { value: "Husky", label: "Husky" },
                { value: "Golden Retriever", label: "Golden Retriever" },
              ]}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Color" error={errors?.color?.message}>
        <Input
          type="text"
          id="color"
          defaultValue={color}
          disabled={isEditing}
          {...register("color", {
            required: "This field is required",
            onChange: e => {
              e.target.value =
                e.target.value.charAt(0).toUpperCase() +
                e.target.value.slice(1);
            },
          })}
        />
      </FormRow>

      <FormRow label="Size" error={errors?.size?.message}>
        <Controller
          name="size"
          control={control}
          defaultValue={size} // Set the defaultValue to the value you want
          rules={{ required: "Please select a size" }} // Add the required validation rule
          render={({ field }) => (
            <FormSelect
              id="size"
              disabled={isEditing}
              options={[
                { value: "", label: "Select one" },
                { value: "Small", label: "Small" },
                { value: "Big", label: "Big" },
              ]}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Gender" error={errors?.gender?.message}>
        <Controller
          name="gender"
          control={control}
          defaultValue={gender} // Set the defaultValue to the value you want
          rules={{ required: "Please select a gender" }} // Add the required validation rule
          render={({ field }) => (
            <FormSelect
              id="gender"
              disabled={isEditing}
              options={[
                { value: "", label: "Select one" },
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
              ]}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Microchipped" error={errors?.microchipped?.message}>
        <Controller
          name="microchipped"
          control={control}
          defaultValue={microchipped} // Set the defaultValue to the value you want
          rules={{ required: "Please select a microchip" }} // Add the required validation rule
          render={({ field }) => (
            <FormSelect
              id="microchipped"
              disabled={isEditing}
              options={[
                { value: "", label: "Select one" },
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
                { value: "Unknown", label: "Unknown" },
              ]}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Date Last Seen" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          disabled={isEditing}
          defaultValue={date}
          max={today}
          {...register("date", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Location Last Seen" error={errors?.location?.message}>
        <Textarea
          type="text"
          id="location"
          defaultValue={location}
          disabled={isEditing}
          {...register("location", {
            required: "This field is required",
            onChange: e => {
              e.target.value =
                e.target.value.charAt(0).toUpperCase() +
                e.target.value.slice(1);
            },
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          defaultValue={description}
          disabled={isEditing}
          {...register("description", {
            required: "This field is required",
            onChange: e => {
              e.target.value =
                e.target.value.charAt(0).toUpperCase() +
                e.target.value.slice(1);
            },
          })}
        />
      </FormRow>

      <FormRow label="Message" error={errors?.message?.message}>
        <Textarea
          type="text"
          id="message"
          defaultValue={message}
          disabled={isEditing}
          {...register("message", {
            required: "This field is required",
            onChange: e => {
              e.target.value =
                e.target.value.charAt(0).toUpperCase() +
                e.target.value.slice(1);
            },
          })}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.status?.message}>
        <Controller
          name="status"
          control={control}
          defaultValue={status}
          rules={{ required: "Please select a pet status" }} // Add the required validation rule
          render={({ field }) => (
            <FormSelect
              id="status"
              disabled={isEditing}
              options={[
                { value: "", label: "Select one" },
                { value: "Lost", label: "Lost" },
                { value: "Found", label: "Found" },
                { value: "Reunited", label: "Reunited" },
              ]}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Upload Your Pet" error={errors?.images?.message}>
        <FileInput
          accept="image/*"
          multiple
          disabled={isEditing}
          id="images"
          {...register("images")}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isEditing}>Edit pet</Button>
      </FormRow>
    </Form>
  );
}

const FormSelect = styled(Select)`
  width: 100%;
`;

export default PetEditForm;
