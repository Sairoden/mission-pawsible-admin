// SUPABASE
import { supabaseUrl, supabase, supabaseAdmin } from "./supabase";

// BOOKINGS
import {
  getBookings,
  getBooking,
  getBookingsAfterDate,
  getStaysAfterDate,
  getStaysTodayActivity,
  updateBooking,
  deleteBooking,
} from "./apiBookings";

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
  getPetRecentPost,
  getPetStats,
  getSinglePet,
  createPet,
  updatePet,
  updatePetStatus,
  deletePet,
  deletePetImage,
} from "./apiPets";

// GEOCODING
import { getCoordsForAddress } from "./apiLocation";

export {
  // SUPABASE
  supabase,
  supabaseAdmin,
  supabaseUrl,

  // BOOKINGS
  getBookings,
  getBooking,
  getBookingsAfterDate,
  getStaysAfterDate,
  getStaysTodayActivity,
  updateBooking,
  deleteBooking,

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
  getPetRecentPost,
  getPetStats,

  // PETS
  getSinglePet,
  createPet,
  updatePet,
  updatePetStatus,
  deletePet,
  deletePetImage,

  // EXTRA API
  getCoordsForAddress,
};
