// Libraries
import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = "6a555cbf9f874b7497d829034f24392b";

export const getCoordsForAddress = async address => {
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      address
    )}&apiKey=${API_KEY}
    `
  );

  if (!data) toast.error("Could not find location for the specified address");

  const location = data.features[0].properties;

  return location;
};
