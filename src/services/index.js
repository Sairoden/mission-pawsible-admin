// SUPABASE
import { supabaseUrl, supabase, supabaseAdmin } from "./supabase";

// USERS
import { getAllUsers, getUsers, editUser, deleteUser } from "./apiUsers";

// AUTH
import {
  login,
  getCurrentUser,
  logout,
  signup,
  updateCurrentUser,
} from "./apiAuth";

// PETS
import {
  getAllPets,
  getPetsVerfication,
  getPetStats,
  getSinglePet,
  createPet,
  updatePet,
  updatePetStatus,
  deletePet,
  deletePetImage,
  verifyPet,
} from "./apiPets";

// GEOCODING
import { getCoordsForAddress } from "./apiLocation";

export {
  // SUPABASE
  supabase,
  supabaseAdmin,
  supabaseUrl,

  // AUTH
  login,
  getCurrentUser,
  logout,
  signup,
  updateCurrentUser,

  // USERS
  getAllUsers,
  getUsers,
  editUser,
  deleteUser,
  getAllPets,
  getPetsVerfication,
  getPetStats,

  // PETS
  getSinglePet,
  createPet,
  updatePet,
  updatePetStatus,
  deletePet,
  deletePetImage,
  verifyPet,

  // EXTRA API
  getCoordsForAddress,
};
