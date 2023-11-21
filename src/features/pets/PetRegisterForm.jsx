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

// Utilities
import { inputFormat } from "../../utils";

// Hooks
import { useRegisterPet } from "./useRegisterPet";

// Data
import { cats, dogs, sizes, genders, microchips, petTypes } from "../../data";

function PetRegisterForm() {
  const {
    register,
    formState,
    setValue,
    getValues,
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const { errors } = formState;
  const { registerPet, isCreating } = useRegisterPet();

  const petTypeOptions = petTypes.map(petType => ({
    value: petType,
    label: petType,
  }));
  const catOptions = cats.map(cat => ({ value: cat, label: cat }));
  const dogOptions = dogs.map(dog => ({ value: dog, label: dog }));
  const sizeOptions = sizes.map(size => ({ value: size, label: size }));
  const genderOptions = genders.map(gender => ({
    value: gender,
    label: gender,
  }));
  const microchipOptions = microchips.map(microchip => ({
    value: microchip,
    label: microchip,
  }));

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = data => {
    data.petName = inputFormat(data.petName);
    data.color = inputFormat(data.color);
    data.location = inputFormat(data.location);
    data.description = inputFormat(data.description);
    data.message = inputFormat(data.message);

    registerPet(
      { ...data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  const selectedPetType = watch("petType");
  const selectedBreed = watch("breed");

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
        <FormSelect
          id="petType"
          disabled={isCreating}
          options={[{ value: "", label: "Select one" }, ...petTypeOptions]}
          {...register("petType", { required: "This field is required" })}
          value={getValues("petType")}
          onChange={e => {
            const selectedValue = e.target.value;
            setValue("petType", selectedValue);

            const breedValue = setValue("breed", "");
            console.log(breedValue);
          }}
        />
      </FormRow>

      <Img
        src="https://i.pinimg.com/originals/8f/ef/aa/8fefaa44f99928585b65d34e05556590.png"
        alt="pet"
      />

      <FormRow label="Breed" error={errors?.breed?.message}>
        <FormSelect
          id="breed"
          disabled={!selectedPetType || isCreating} // Disable if "Pet Type" is not selected
          options={[
            { value: "", label: "Select one" },
            ...(selectedPetType === "Dog" ? dogOptions : catOptions), // Render dog options if "Pet Type" is Dog, otherwise cat options
          ]}
          {...register("breed", { required: "This field is required" })}
          value={selectedBreed}
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
        <FormSelect
          id="size"
          disabled={isCreating}
          options={[{ value: "", label: "Select one" }, ...sizeOptions]}
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
          options={[{ value: "", label: "Select one" }, ...genderOptions]}
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
          options={[{ value: "", label: "Select one" }, ...microchipOptions]}
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
          max={today}
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
          defaultValue=""
          disabled={isCreating}
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
          defaultValue=""
          disabled={isCreating}
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
        <FormSelect
          id="status"
          disabled={isCreating}
          options={[
            { value: "", label: "Select one" },
            { value: "Lost", label: "Lost" },
            { value: "Found", label: "Found" },
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
const Img = styled.img`
  display: block;
  width: 5em;
  /* aspect-ratio: 3 / 3; */
  transform: scale(6) translateX(15px);
  float: right;
  margin-right: 23rem;
`;

export default PetRegisterForm;
