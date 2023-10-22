// Authentication
import LoginForm from "./authentication/LoginForm";
import Logout from "./authentication/Logout";
import SignupForm from "./authentication/SignupForm";
import UserAvatar from "./authentication/UserAvatar";
import UpdatePasswordForm from "./authentication/UpdatePasswordForm";
import UpdateUserDataForm from "./authentication/UpdateUserDataForm";

// Bookings
import BookingDataBox from "./bookings/BookingDataBox";
import BookingDetail from "./bookings/BookingDetail";
import BookingRow from "./bookings/BookingRow";
import BookingTable from "./bookings/BookingTable";
import BookingTableOperations from "./bookings/BookingTableOperations";

// Cabins
import CreateCabinForm from "./cabins/CreateCabinForm";
import CabinTable from "./cabins/CabinTable";
import CabinRow from "./cabins/CabinRow";
import AddCabin from "./cabins/AddCabin";
import CabinTableOperations from "./cabins/CabinTableOperations";

// Check-in-out
import CheckinBooking from "./check-in-out/CheckinBooking";
import CheckoutButton from "./check-in-out/CheckoutButton";
import Today from "./check-in-out/TodayActivity";
import TodayItem from "./check-in-out/TodayItem";

// Dashboard
import DashboardBox from "./dashboard/DashboardBox";
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardFilter from "./dashboard/DashboardFilter";
import Stat from "./dashboard/Stat";
import Stats from "./dashboard/Stats";
import SalesChart from "./dashboard/SalesChart";
import DurationChart from "./dashboard/DurationChart";

// Guest
// import CreateGuestForm from "./guests/CreateGuestForm";
// import GuestList from "./guests/GuestList";
// import GuestListItem from "./guests/GuestListItem";

// Settings
import UpdateSettingsForm from "./settings/UpdateSettingsForm";

export {
  LoginForm,
  SignupForm,
  UserAvatar,
  UpdatePasswordForm,
  UpdateUserDataForm,
  Logout,
  BookingDataBox,
  BookingDetail,
  BookingRow,
  BookingTable,
  BookingTableOperations,
  CreateCabinForm,
  CheckinBooking,
  CheckoutButton,
  Today,
  DashboardBox,
  DashboardFilter,
  DashboardLayout,
  Stat,
  // CreateGuestForm,
  // GuestList,
  // GuestListItem,
  UpdateSettingsForm,
  CabinTable,
  CabinRow,
  AddCabin,
  CabinTableOperations,
  Stats,
  SalesChart,
  DurationChart,
  TodayItem,
};
