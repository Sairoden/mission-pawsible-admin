// Services
import { supabaseUrl, supabase } from "./supabase";

export const signup = async ({
  firstName,
  lastName,
  address,
  contactNumber,
  email,
  password,
}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        address,
        contactNumber,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

export const login = async ({ email, password }) => {
  let { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (user[0]?.role !== "admin") throw new Error("You are not an admin");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  let { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", data.user.email);

  data.user.user_metadata = {
    avatar: user[0].avatar,
    firstName: user[0].firstName,
    lastName: user[0].lastName,
    email: user[0].email,
    contactNumber: user[0].contactNumber,
    address: user[0].address,
  };

  if (error || userError) throw new Error(error.message);

  return data?.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};

export const updateCurrentUser = async ({
  password,
  firstName,
  lastName,
  address,
  contactNumber,
  avatar,
}) => {
  // 1. Update password or fullName
  let updateData;

  if (password) {
    updateData = {
      password,
    };
  } else {
    updateData = {
      data: {
        firstName,
        lastName,
        address,
        contactNumber,
      },
    };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (updateData.password) return data;

  const { error: userError } = await supabase
    .from("users")
    .update(updateData.data)
    .eq("email", data.user.email);

  if (error || userError) throw new Error(error.message);

  if (!avatar) return data;

  // 2. Upload the avatar image to supabase bucket
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: data2, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  const { error: userError2 } = await supabase
    .from("users")
    .update({
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    })
    .eq("email", data2.user.email);

  if (error2) throw new Error(error2.message);

  if (userError2) throw new Error(userError2.message);

  return data2;
};
