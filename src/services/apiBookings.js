import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings({ filter, sortBy }) {
  try {
    let query = supabase
      .from("bookings")
      .select(
        "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
      );

    // FILTER
    if (filter)
      query = query[filter.method || "eq"](filter.field, filter.value);

    // SORT
    if (sortBy) {
      query = query.order(sortBy.field, {
        ascending: sortBy.direction === "asc",
      });
    }

    const { data, error } = await query;

    if (error) throw new Error("Cabins could not be loaded");

    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getBooking(id) {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*", "cabins(*), guests(*)")
      .eq("id", id)
      .single();

    if (error) throw new Error("Booking not found");

    return data;
  } catch (err) {
    console.error(err.message);
  }
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("created_at, totalPrice, extrasPrice")
      .gte("created_at", date)
      .lte("created_at", getToday({ end: true }));

    if (error) throw new Error("Bookings could not get loaded");

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  try {
    const { data, error } = await supabase
      .from("bookings")
      // .select("*")
      .select("*, guests(fullName)")
      .gte("startDate", date)
      .lte("startDate", getToday());

    if (error) throw new Error("Bookings could not get loaded");

    return data;
  } catch (err) {
    console.error(err.message);
  }
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*, guests(fullName, nationality, countryFlag)")
      .or(
        `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
      )
      .order("created_at");

    // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
    // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
    // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

    if (error) throw new Error("Booknigs could not get loaded");

    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function updateBooking(id, obj) {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .update(obj)
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error("Booking could not be updated");

    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function deleteBooking(id) {
  try {
    // REMEMBER RLS POLICIES
    const { data, error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    if (error) throw new Error("Booking could not be deleted");

    return data;
  } catch (err) {
    console.error(err.message);
  }
}
