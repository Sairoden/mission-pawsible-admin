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
import { getUsers, editUser, deleteUser } from "./apiUsers";

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
  supabase,
  supabaseAdmin,
  supabaseUrl,
  getBookings,
  getBooking,
  getBookingsAfterDate,
  getStaysAfterDate,
  getStaysTodayActivity,
  updateBooking,
  deleteBooking,
  login,
  getCurrentUser,
  logout,
  signup,
  updateCurrentUser,
  getUsers,
  editUser,
  deleteUser,
  getAllPets,
  getPetRecentPost,
  getPetStats,
  getSinglePet,
  createPet,
  updatePet,
  updatePetStatus,
  deletePet,
  deletePetImage,
  getCoordsForAddress,
};
