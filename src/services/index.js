import supabase, { supabaseUrl } from "./supabase";

import {
  getBookings,
  getBooking,
  getBookingsAfterDate,
  getStaysAfterDate,
  getStaysTodayActivity,
  updateBooking,
  deleteBooking,
  getPets,
} from "./apiBookings";

// USERS
import { getUsers, editUser, deleteUser } from "./apiCabins";

// AUTH
import {
  login,
  getCurrentUser,
  logout,
  signup,
  updateCurrentUser,
} from "./apiAuth";

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
  getPets,
};
