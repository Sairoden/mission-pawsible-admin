// Services
import { supabase, supabaseUrl, getCoordsForAddress } from "./index";

export const createPet = async newPet => {
  try {
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
  } catch (err) {
    console.error(err.message);
  }
};
