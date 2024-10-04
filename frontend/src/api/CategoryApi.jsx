import { supabase } from "../config/supabaseClient";

export const fetchCategory = async () => {
  let data, error;
  ({ data, error } = await supabase.from("category").select("*"));
  // Handle errors
  if (error) {
    throw new Error("Error fetching Products: " + error.message);
  }

  // Return the fetched data
  return data;
};

export const deleteCategort = async (id) => {
  const { error } = await supabase.from("category").delete().eq("id", id);
  if (error) {
    throw new Error("Error deleting category: " + error.message);
  }
};

export const createCategory = async (name) => {
  const { error } = await supabase.from("category").insert(name);
  if (error) {
    throw new Error("Error creating category: " + error.message);
  }
};
