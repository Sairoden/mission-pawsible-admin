// Services
import { supabase, supabaseUrl } from "./index";

export const getCabins = async () => {
  try {
    let { data, error } = await supabase.from("cabins").select("*");

    if (error) throw new Error("Cabins could not be loaded");

    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const createEditCabin = async (newCabin, id) => {
  try {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
      "/",
      ""
    );
    const imagePath = hasImagePath
      ? newCabin.image
      : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. Create/edit the cabin
    let query = supabase.from("cabins");

    // A) CREATE
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

    // B) EDIT
    if (id)
      query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

    const { data, error } = await query.select().single();

    if (error) throw new Error("Cabins could not be created");

    // 2. Upload image
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3. Delete the cabin IF there was an error uploading image
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not created"
      );
    }

    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteCabin = async id => {
  try {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) throw new Error("Cabin could not be deleted");

    return data;
  } catch (err) {
    console.error(err.message);
  }
};
