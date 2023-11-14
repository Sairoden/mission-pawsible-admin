// Services
import { supabase, supabaseUrl } from "./index";

export const getUsers = async () => {
  try {
    let { data, error } = await supabase.from("users").select("*");

    if (error) throw new Error("Users could not be loaded");

    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const editUser = async (newUser, id) => {
  try {
    console.log(newUser);
    const hasAvatarPath = newUser.avatar?.startsWith?.(supabaseUrl);
    const avatarName = `${Math.random()}-${newUser.avatar.name}`.replaceAll(
      "/",
      ""
    );
    const avatarPath = hasAvatarPath
      ? newUser.avatar
      : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarName}`;

    // 1. Create/edit the cabin
    let query = supabase.from("users");

    // 2.
    if (id)
      query = query.update({ ...newUser, avatar: avatarPath }).eq("id", id);

    const { data, error } = await query.select().single();

    if (error) throw new Error("Users could not be edited");

    // 2. Upload avatar
    if (hasAvatarPath) return data;

    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(avatarName, newUser.avatar);

    // 3. Delete the cabin IF there was an error uploading avatar
    if (storageError) {
      await supabase.from("users").delete().eq("id", data.id);
      throw new Error(
        "User avatar could not be uploaded and the user was not edited"
      );
    }

    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteUser = async id => {
  let { data: user } = await supabase.from("users").select("*").eq("id", id);

  if (user[0].role === "admin")
    throw new Error("You can't delete an administrator");

  const { data, error } = await supabase.from("users").delete().eq("id", id);

  if (error) throw new Error("User could not be deleted");

  return data;
};
