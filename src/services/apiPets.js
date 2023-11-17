// Services
import { supabase, supabaseUrl, getCoordsForAddress } from "./index";

// Utilities
import { PAGE_SIZE } from "../utils";

export async function getAllPets({ filter, page }) {
  let query = supabase
    .from("pets")
    .select(
      "id, petName, petType, breed, color, size, gender, location, microchipped, date, message, description, status, lat, lng, users(firstName, lastName, email)",
      { count: "exact" }
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Pets could not be loaded");

  return { data, count };
}

export async function getSinglePet(id) {
  const { data, error } = await supabase
    .from("pets")
    .select(
      "id, petName, petType, breed, color, size, gender, location, microchipped, date, message, description, status, lat, lng, images, users(firstName, lastName, email)"
    )
    .eq("id", id)
    .single();

  if (error) throw new Error("Pet not found");

  return data;
}

export const createPet = async newPet => {
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("id", newPet.userId);

  if (userError) throw new Error("User ID not found. Please try again");

  const newImages = [];
  for (let image of newPet.images) {
    let imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    let imagePath = `${supabaseUrl}/storage/v1/object/public/pet-images/${encodeURI(
      imageName
    )}`;

    // 1. Upload image
    const { error: storageError } = await supabase.storage
      .from("pet-images")
      .upload(imageName, image);

    if (storageError)
      throw new Error(
        "Pet image could not be uploaded and the pet was not created"
      );

    newImages.push(imagePath);
  }

  const coordinates = await getCoordsForAddress(location);

  // 2 Create Pet
  const { data, error } = await supabase
    .from("pets")
    .insert([
      {
        ...newPet,
        images: newImages,
        lat: coordinates.lat,
        lng: coordinates.lon,
      },
    ])
    .select();

  if (error) throw new Error("Pet could not be registered");

  return data;
};

export const updatePetStatus = async id => {
  const { data, error } = await supabase
    .from("pets")
    .update({ status: "Reunited" })
    .eq("id", id)
    .select();

  if (error) throw new Error("Pet could not be updated");

  return data;
};

export const deletePet = async id => {
  const { error } = await supabase.from("pets").delete().eq("id", id);

  if (error) throw new Error("Pet could not be deleted");
};
