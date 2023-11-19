// React & Libraries
import { useState } from "react";

// Services
import supabase from "../services/supabase";

// UI Components
import { Button } from "../ui";

// Data
import { pets } from "./data-pets";

async function deletePets() {
  try {
    const { error } = await supabase.from("pets").delete().gt("id", 0);

    if (error) throw new Error(error);
  } catch (err) {
    console.error(err.message);
  }
}

async function createPets() {
  try {
    const { error } = await supabase.from("pets").insert(pets);

    if (error) throw new Error(error);
  } catch (err) {
    console.error(err.message);
  }
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // PETS need to be deleted FIRST
    await deletePets();

    // PETS need to be created LAST
    await createPets();

    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload Pets
      </Button>
    </div>
  );
}

export default Uploader;
