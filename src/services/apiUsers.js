// Services
import { supabase, supabaseAdmin, supabaseUrl } from "./index";

// Utilities
import { PAGE_SIZE } from "../utils";

export const getAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) throw new Error("All Users could not be loaded");

  return data;
};

export const getUsers = async ({ page, sortBy }) => {
  let query = supabase.from("users").select("*", { count: "exact" });

  // SORT
  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Users could not be loaded");

  return { data, count };
};

export const editUser = async (newUser, id) => {
  const hasAvatarPath = newUser.avatar?.startsWith?.(supabaseUrl);
  const avatarName =
    newUser.avatar &&
    `${Math.random()}-${newUser.avatar.name}`.replaceAll("/", "");

  const avatarPath = hasAvatarPath
    ? newUser.avatar
    : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarName}`;

  // 1. Create/edit the cabin
  let query = supabase.from("users");

  // 2.
  if (id) {
    if (newUser.avatar) {
      query = query.update({ ...newUser, avatar: avatarPath }).eq("id", id);
    } else {
      const { address, contactNumber, firstName, lastName } = newUser;
      query = query
        .update({ address, contactNumber, firstName, lastName })
        .eq("id", id);
    }
  }

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
};

export const deleteUser = async id => {
  let { data: user } = await supabase.from("users").select("*").eq("id", id);

  if (user[0].role === "admin")
    throw new Error("You can't delete an administrator");

  const { data, error } = await supabaseAdmin.auth.admin.deleteUser(user[0].id);

  if (error) throw new Error("User could not be deleted");

  return data;
};
