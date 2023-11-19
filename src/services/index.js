// SUPABASE
import supabase, { supabaseUrl } from "./supabase";

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
  getSinglePet,
  createPet,
  updatePet,
  updatePetStatus,
  deletePet,
  deletePetImage,
  getCoordsForAddress,
};
