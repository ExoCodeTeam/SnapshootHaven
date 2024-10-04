import { supabase } from "../config/supabaseClient";

export const fetchProducts = async (searchTerm = "", filters = {}) => {
  console.log("dzdzzd");
  console.log(filters);

  let data, error;
  const { minPrice, maxPrice, categories } = filters; // Destructure filter options

  let query = supabase
    .from("product")
    .select("id, name, price, img_url, category_id, category(name)")
    .ilike("name", `%${searchTerm}%`); // Case-insensitive search for product name

  // Apply price range filter if provided
  if (minPrice !== undefined && maxPrice !== undefined) {
    query = query.gte("price", minPrice).lte("price", maxPrice);
  }

  // Apply multiple category filter if provided
  if (categories && categories.length > 0) {
    query = query.in("category.name", categories); // Filters by category name instead of ID
  }

  // Execute the query
  ({ data, error } = await query);

  // Handle errors
  if (error) {
    throw new Error("Error fetching Products: " + error.message);
  }

  // Return the fetched data
  return data;
};

export const createProduct = async (newProduct, img_url) => {
  console.log(newProduct);

  if (img_url) {
    newProduct = { ...newProduct, img_url };
  }
  const cleanedProduct = cleanObject(newProduct);
  const { error } = await supabase.from("product").insert([cleanedProduct]);

  if (error) {
    throw new Error("Error creating Product: " + error.message);
  }
};

export const updateProduct = async (id, updatedProduct) => {
  // Handle empty category_id
  delete updatedProduct.category;

  if (updatedProduct.category_id === "") {
    updatedProduct.category_id = null;
  }

  const { error } = await supabase
    .from("product")
    .update(updatedProduct)
    .eq("id", id);

  if (error) {
    throw new Error("Error updating product: " + error.message);
  }
};

export const deleteProduct = async (id) => {
  const { error } = await supabase.from("product").delete().eq("id", id);
  if (error) {
    throw new Error("Error deleting product: " + error.message);
  }
};

export const uploadImage = async (file) => {
  const fileName = `${Date.now()}_${file.name}`;
  const folderName = "products";
  const path = `${folderName}/${fileName}`;
  const { error } = await supabase.storage.from("imgs").upload(path, file);

  if (error) {
    alert("Error uploading image: " + error.message);
    return null;
  }

  const { data } = supabase.storage.from("imgs").getPublicUrl(path);

  return data.publicUrl;
};

const cleanObject = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v != null && v !== "")
  );
};
