import { supabase } from "./index";

export const getCabins = async () => {
  try {
    let { data, error } = await supabase.from("cabins").select("*");

    if (error) throw new Error("Cabins could not be loaded");

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
